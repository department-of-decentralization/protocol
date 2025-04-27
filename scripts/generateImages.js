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
const SHARP = require("sharp");

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
const HALFTONE_AVATAR_PATH = path.join(__dirname, "../static/speakers/halftoneAvatar.png");

async function downloadImage(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download image: ${url}`);
  const buffer = await res.buffer();
  fs.writeFileSync(dest, buffer);
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

async function processAndSaveSpeakerImage(srcPath, destPath) {
  // Crop to square, resize to 300x300, grayscale, save as jpg
  await SHARP(srcPath)
    .resize(SPEAKER_IMG_SIZE, SPEAKER_IMG_SIZE, { fit: "cover" })
    .grayscale()
    .jpeg({ quality: 90 })
    .toFile(destPath);
}

/**
 * Shared logic for both single and multiple speaker images
 */
async function prepareImage(ctx, speakers) {
  // Download and process speaker images
  const speakerImgPaths = await Promise.all(
    speakers.map(async (speaker) => {
      const speakerImgPath = path.join(__dirname, "../static/speakers", `${speaker.code}.jpg`);
      if (!fs.existsSync(speakerImgPath)) {
        let tmpPath;
        if (speaker.imageUrl) {
          tmpPath = speakerImgPath + ".tmp";
          await downloadImage(speaker.imageUrl, tmpPath);
        } else {
          tmpPath = HALFTONE_AVATAR_PATH;
        }
        await processAndSaveSpeakerImage(tmpPath, speakerImgPath);
        if (speaker.imageUrl && fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
      }
      return speakerImgPath;
    })
  );

  // Background
  ctx.fillStyle = "#e6e6e6";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  const logoImg = await loadImage(LOGO_PATH);
  const logoWidth = 140;
  const logoHeight = (logoImg.height / logoImg.width) * logoWidth;
  ctx.drawImage(logoImg, WIDTH - logoWidth - 20, 20, logoWidth, logoHeight);

  // Footer text
  const footerY = HEIGHT - 40;
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
  ctx.moveTo(startX + text1Width, underlineY + 2);
  ctx.lineTo(startX + text1Width + text2Width, underlineY + 2);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#a80000";
  ctx.stroke();
  return speakerImgPaths;
}

async function generateImageForSingleSpeaker(sessionObj) {
  const { session, speakers } = sessionObj;
  const speaker = speakers[0];

  // Compose image
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  const [imagePath] = await prepareImage(ctx, speakers);

  // Speaker image (left, square, grayscale, already processed)
  ctx.drawImage(await loadImage(imagePath), 50, HEIGHT / 2 - SPEAKER_IMG_SIZE / 2, SPEAKER_IMG_SIZE, SPEAKER_IMG_SIZE);

  // Text block (right half)
  const textX = SPEAKER_IMG_SIZE + 100;
  const textWidth = WIDTH - textX - 50;
  let y = 0;

  // Prepare lines for session title
  ctx.font = 'bold 48px "Latin Modern"';
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  const titleLines = wrapTextLines(ctx, session.title, textWidth);

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

  // Draw speaker name (regular, centered)
  ctx.font = '32px "Latin Modern"';
  ctx.fillStyle = "#111";
  ctx.textAlign = "left";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(speaker.name, textX, y);
  ctx.textBaseline = "top";

  // Draw affiliation immediately after author name
  ctx.font = '24px "Latin Modern"';
  ctx.fillStyle = "#444";
  affiliationLines.forEach((line, i) => {
    ctx.fillText(line, textX, y);
    y += 24 * lineHeightAff;
  });

  // Save image with firstName_announcement.png
  const firstNameForFile = speaker.name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim()
    .split(/\s+/)[0];
  const outPath = path.join(OUTPUT_DIR, `${firstNameForFile}_announcement.png`);
  fs.writeFileSync(outPath, canvas.toBuffer("image/png"));
  console.log(`Generated announcement image: ${outPath}`);
}

async function generateImageForMultipleSpeakers(sessionObj) {
  const { session, speakers } = sessionObj;
  if (speakers.length !== 2) throw new Error("Only two speakers supported for now");

  // Compose image
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  // Prepare background, logo, footer, and get image paths
  const speakerImgPaths = await prepareImage(ctx, speakers);

  // Draw session title above images, centered, smaller font and narrower area
  const titleY = 70;
  ctx.font = 'bold 36px "Latin Modern"';
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#111";
  const titleAreaWidth = WIDTH - 300;
  const titleLines = wrapTextLines(ctx, session.title, titleAreaWidth);
  let y = titleY;
  titleLines.forEach((line) => {
    ctx.fillText(line, WIDTH / 2, y);
    y += 42;
  });

  // Draw both speaker images, 30% smaller, centered horizontally, below the title
  const imgDrawSize = SPEAKER_IMG_SIZE * 0.7;
  const imgSpacing = 40;
  const totalWidth = 2 * imgDrawSize + imgSpacing;
  const startX = (WIDTH - totalWidth) / 2;
  const imgY = y + 30; // add some gap after title
  for (let i = 0; i < 2; i++) {
    const img = await loadImage(speakerImgPaths[i]);
    ctx.drawImage(img, startX + i * (imgDrawSize + imgSpacing), imgY, imgDrawSize, imgDrawSize);
  }

  // Write each speaker's name and affiliation under their image, centered (no small caps)
  for (let i = 0; i < 2; i++) {
    const speaker = speakers[i];
    const centerX = startX + i * (imgDrawSize + imgSpacing) + imgDrawSize / 2;
    let textY = imgY + imgDrawSize + 36;
    // Name (regular, centered)
    ctx.font = '28px "Latin Modern"';
    ctx.fillStyle = "#111";
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(speaker.name, centerX, textY);
    ctx.textBaseline = "top";
    // Affiliation (centered, gray)
    ctx.font = '20px "Latin Modern"';
    ctx.fillStyle = "#444";
    const affLines = wrapTextLines(ctx, speaker.affiliation, imgDrawSize - 10);
    affLines.forEach((line) => {
      ctx.fillText(line, centerX, textY);
      textY += 24;
    });
  }

  // Save image with both first names
  const firstNames = speakers.map(
    (s) =>
      s.name
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .trim()
        .split(/\s+/)[0]
  );
  const outPath = path.join(OUTPUT_DIR, `${firstNames.join("_")}_announcement.png`);
  fs.writeFileSync(outPath, canvas.toBuffer("image/png"));
  console.log(`Generated announcement image: ${outPath}`);
}

module.exports = { generateImageForSingleSpeaker, generateImageForMultipleSpeakers };
