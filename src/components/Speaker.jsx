import React, { useEffect, useState } from "react";
import dummySpeaker from "../images/speakers/halftoneAvatar.png";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiFarcaster, SiBluesky } from "react-icons/si";

function getAlphab(index) {
  if (index < 0) {
    return null; // Index out of range for alphabetical characters
  }
  if (index > 25) {
    return getAlphab(index / 26 - 1) + getAlphab(index % 26); // Index out of range for a single alphabetical character
  }

  var charCode = "a".charCodeAt(0) + index;
  return String.fromCharCode(charCode);
}

const Speaker = ({ speaker, index }) => {
  const { twitter, github, website, farcaster, bluesky, name, image, organization } = speaker;
  const src = image ? image.replace(/^\.\/?/, "/") : dummySpeaker;
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if dark mode is active
  useEffect(() => {
    const checkDarkMode = () => {
      // Check specifically for the latex-dark class on the body
      const isDark = document.body.classList.contains("latex-dark");
      console.log("Dark mode detected:", isDark);
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Set up a MutationObserver to detect changes in the body class
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const iconClass = `w-5 h-5 opacity-50 hover:opacity-100 ${isDarkMode ? "text-white" : "text-black"}`;

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <div className="flex justify-center items-center h-40 w-40 overflow-clip">
        <img
          src={src}
          alt={name}
          className={`grayscale ${
            src !== dummySpeaker ? "brightness-125 opacity-70 contrast-100" : ""
          } object-contain w-48`}
        />
      </div>
      <div className="text-center mt-1">
        <div>
          {"(" + getAlphab(index) + ") "}
          <b>{name}</b>
        </div>
        {organization && <div className="">{organization.name}</div>}
        <div className="flex flex-row justify-center gap-4 mt-2">
          {twitter && (
            <a href={twitter} rel="noopener noreferrer" target="_blank">
              <FaXTwitter className={iconClass} />
            </a>
          )}
          {github && (
            <a href={github} rel="noopener noreferrer" target="_blank">
              <FaGithub className={iconClass} />
            </a>
          )}
          {website && (
            <a href={website} rel="noopener noreferrer" target="_blank">
              <FaGlobe className={iconClass} />
            </a>
          )}
          {farcaster && (
            <a href={farcaster} rel="noopener noreferrer" target="_blank">
              <SiFarcaster className={iconClass} />
            </a>
          )}
          {bluesky && (
            <a href={bluesky} rel="noopener noreferrer" target="_blank">
              <SiBluesky className={iconClass} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
