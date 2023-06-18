import React from "react";
import dummySpeaker from "../images/speakers/halftoneAvatar.png";
import twitterLogo from "../images/twitter.png";
import githubLogo from "../images/github.png";
import websiteLogo from "../images/website.png";
import matrixLogo from "../images/matrix.png";

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
  const { twitter, github, website, matrix, name, image, organization } =
    speaker;
  const src = image?.default || speaker?.image || dummySpeaker;
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
            <>
              <a href={twitter} rel="noopener noreferrer" target="_blank">
                <img
                  src={twitterLogo}
                  alt="Twitter"
                  className="w-5 opacity-50 hover:opacity-100"
                />
              </a>
            </>
          )}
          {github && (
            <>
              <a href={github} rel="noopener noreferrer" target="_blank">
                <img
                  src={githubLogo}
                  alt="Github"
                  className="w-5 opacity-50 hover:opacity-100"
                />
              </a>
            </>
          )}
          {website && (
            <>
              <a href={website} rel="noopener noreferrer" target="_blank">
                <img
                  src={websiteLogo}
                  alt="Website"
                  className="w-5 opacity-50 hover:opacity-100"
                />
              </a>
            </>
          )}
          {matrix && (
            <>
              <a
                href={"https://matrix.to/#/" + matrix}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={matrixLogo}
                  alt="Matrix"
                  className="w-5 opacity-50 hover:opacity-100"
                />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
