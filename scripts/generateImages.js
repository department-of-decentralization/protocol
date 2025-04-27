/**
 * Script to generate announcement images for new speaker sessions
 *
 * - Uses fetchUnpublishedSessionsWithSpeakers from publish.js
 * - For the first unpublished session with a single speaker:
 *   - Downloads the speaker's image
 *   - Generates an announcement image using canvas
 *   - Saves the image to announcements/
 *   - Throws if there are multiple speakers (TODO)
 *   - Adds Protocol Berg logo to top right
 *   - Adds footer text at the bottom
 *   - Increases gap between title and author
 *   - Author name is all caps, not bold, and simulates small caps
 */

const fs = require("fs");
const path = require("path");
const { createCanvas, loadImage, registerFont } = require("canvas");
const fetch = require("node-fetch");
const { fetchUnpublishedSessionsWithSpeakers } = require("./publish");

// Register Latin Modern fonts
registerFont(path.join(__dirname, "../src/fonts/Latin-Modern-Roman/lmroman10-regular.otf"), {
  family: "Latin Modern",
  weight: "normal",
});
registerFont(path.join(__dirname, "../src/fonts/Latin-Modern-Roman/lmroman10-bold.otf"), {
  family: "Latin Modern",
  weight: "bold",
});

const OUTPUT_DIR = path.join(__dirname, "..", "announcements");
const WIDTH = 1200;
const HEIGHT = 675;
const SPEAKER_IMG_SIZE = 400;
const LOGO_PATH = path.join(__dirname, "../src/images/protocolBerg.png");
const HALFTONE_AVATAR_PATH = path.join(__dirname, "../src/images/speakers/halftoneAvatar.png");

async function downloadImage(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download image: ${url}`);
  const buffer = await res.buffer();
  fs.writeFileSync(dest, buffer);
}

function getTextBlockHeight(ctx, lines, fontSize, lineHeight) {
  return lines.length * fontSize * lineHeight;
}

function wrapTextLines(ctx, text, maxWidth) {
  const words = text.split(" ");
  let lines = [];
  let line = "";
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      lines.push(line.trim());
      line = words[n] + " ";
    } else {
      line = testLine;
    }
  }
  lines.push(line.trim());
  return lines;
}

function grayscaleImage(ctx, img, x, y, w, h) {
  // img is not used, we grayscale the drawn area
  const imageData = ctx.getImageData(x, y, w, h);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    data[i] = data[i + 1] = data[i + 2] = avg;
  }
  ctx.putImageData(imageData, x, y);
}

function drawSmallCapsName(ctx, name, x, y, maxWidth) {
  // Simulate small caps: first letter of each word larger, rest uppercase and smaller
  const words = name.split(" ");
  let currX = x;
  const gap = 12; // space between words
  for (let w = 0; w < words.length; w++) {
    const word = words[w];
    if (!word) continue;
    // First letter: larger
    ctx.font = '36px "Latin Modern"';
    const firstLetter = word[0].toUpperCase();
    ctx.fillText(firstLetter, currX, y);
    const firstLetterWidth = ctx.measureText(firstLetter).width;
    // Rest: uppercase, smaller
    ctx.font = '26px "Latin Modern"';
    const rest = word.slice(1).toUpperCase();
    ctx.fillText(rest, currX + firstLetterWidth, y); // bottom-aligned
    const restWidth = ctx.measureText(rest).width;
    currX += firstLetterWidth + restWidth + gap;
    // Stop if exceeding maxWidth
    if (currX - x > maxWidth) break;
  }
}

async function generateImageForSession(sessionObj) {
  const { session, speakers } = sessionObj;
  if (speakers.length !== 1) {
    throw new Error(`Session ${session.code} has multiple speakers. TODO: handle this case.`);
  }
  const speaker = speakers[0];

  // Speaker image: always use ../src/images/speakers/{speakerCode}.jpg
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);
  const speakerImgPath = path.join(__dirname, "../src/images/speakers", `${speaker.code}.jpg`);
  if (!fs.existsSync(speakerImgPath)) {
    if (speaker.imageUrl) {
      await downloadImage(speaker.imageUrl, speakerImgPath);
    } else {
      // Copy placeholder to speakerImgPath
      fs.copyFileSync(HALFTONE_AVATAR_PATH, speakerImgPath);
    }
  }
  const imagePath = speakerImgPath;

  // Compose image
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#e6e6e6";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Speaker image (left, square, grayscale, crop to square)
  const speakerImg = await loadImage(imagePath);
  // Crop to square
  const cropSize = Math.min(speakerImg.width, speakerImg.height);
  const cropX = (speakerImg.width - cropSize) / 2;
  const cropY = (speakerImg.height - cropSize) / 2;
  // Draw cropped square, then grayscale
  ctx.drawImage(
    speakerImg,
    cropX,
    cropY,
    cropSize,
    cropSize, // source crop
    50,
    HEIGHT / 2 - SPEAKER_IMG_SIZE / 2,
    SPEAKER_IMG_SIZE,
    SPEAKER_IMG_SIZE // dest
  );
  // Grayscale the drawn area
  grayscaleImage(ctx, null, 50, HEIGHT / 2 - SPEAKER_IMG_SIZE / 2, SPEAKER_IMG_SIZE, SPEAKER_IMG_SIZE);

  // Protocol Berg logo (top right)
  try {
    const logoImg = await loadImage(LOGO_PATH);
    const logoWidth = 140;
    const logoHeight = (logoImg.height / logoImg.width) * logoWidth;
    ctx.drawImage(logoImg, WIDTH - logoWidth - 20, 20, logoWidth, logoHeight);
  } catch (e) {
    console.warn("Could not load logo:", e.message);
  }

  // Text block (right half)
  const textX = SPEAKER_IMG_SIZE + 100;
  const textWidth = WIDTH - textX - 50;
  let y = 0;

  // Prepare lines for session title
  ctx.font = 'bold 48px "Latin Modern"';
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  const titleLines = wrapTextLines(ctx, session.title, textWidth);

  // Speaker name (simulate small caps, not bold)
  ctx.font = '36px "Latin Modern"';
  // Affiliation
  ctx.font = '28px "Latin Modern"';
  const affiliationLines = wrapTextLines(ctx, speaker.affiliation, textWidth);

  // Calculate total text block height
  const lineHeightTitle = 1.2;
  const lineHeightName = 1.2;
  const lineHeightAff = 1.2;
  const blockHeight =
    titleLines.length * 48 * lineHeightTitle +
    40 + // increased gap between title and author
    36 * lineHeightName +
    affiliationLines.length * 28 * lineHeightAff +
    40; // spacing between blocks

  // Center block vertically
  y = HEIGHT / 2 - blockHeight / 2;

  // Draw session title
  ctx.font = 'bold 48px "Latin Modern"';
  ctx.fillStyle = "#111";
  ctx.textBaseline = "top";
  titleLines.forEach((line, i) => {
    ctx.fillText(line, textX, y);
    y += 48 * lineHeightTitle;
  });
  y += 100; // increased gap between title and author+affiliation

  // Draw speaker name (small caps, not bold, bottom-aligned)
  ctx.font = '36px "Latin Modern"';
  ctx.fillStyle = "#111";
  ctx.textBaseline = "alphabetic";
  drawSmallCapsName(ctx, speaker.name, textX, y, textWidth);
  ctx.textBaseline = "top"; // Restore for other text

  // Draw affiliation immediately after author name
  ctx.font = '24px "Latin Modern"';
  ctx.fillStyle = "#444";
  affiliationLines.forEach((line, i) => {
    ctx.fillText(line, textX, y);
    y += 24 * lineHeightAff;
  });

  // Footer text
  const footerY = HEIGHT - 60;
  ctx.font = '20px "Latin Modern"';
  ctx.textAlign = "center";
  const footerText1 = "June 12-13, 2025, Berlin. ";
  const footerText2 = "https://protocol.berlin/";
  // Measure widths
  const text1Width = ctx.measureText(footerText1).width;
  const text2Width = ctx.measureText(footerText2).width;
  // Calculate starting x so the whole footer is centered
  const totalWidth = text1Width + text2Width;
  const startX = WIDTH / 2 - totalWidth / 2;
  // Draw first part (black)
  ctx.fillStyle = "#111";
  ctx.textAlign = "left";
  ctx.fillText(footerText1, startX, footerY);
  // Draw URL in red
  ctx.fillStyle = "#a80000";
  ctx.fillText(footerText2, startX + text1Width, footerY);
  // Underline the URL
  const underlineY = footerY;
  ctx.beginPath();
  ctx.moveTo(startX + text1Width, underlineY + 28);
  ctx.lineTo(startX + text1Width + text2Width, underlineY + 28);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#a80000";
  ctx.stroke();

  // Save image with firstName_announcement.png
  const firstNameForFile = speaker.name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim()
    .split(/\s+/)[0];
  const outPath = path.join(OUTPUT_DIR, `${firstNameForFile}_announcement.png`);
  fs.writeFileSync(outPath, canvas.toBuffer("image/png"));
  console.log(`Generated announcement image: ${outPath}`);
}

async function main() {
  const unpublished = await fetchUnpublishedSessionsWithSpeakers();
  if (!unpublished.length) {
    console.log("No unpublished sessions found.");
    return;
  }
  unpublished.forEach(async (sessionObj) => {
    try {
      await generateImageForSession(sessionObj);
    } catch (error) {
      console.error(`Failed to generate image for session ${sessionObj.session.code}:`, error);
    }
  });
}

main();
