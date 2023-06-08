import React from "react";
import dummySpeaker from "../images/speakers/halftoneAvatar.png";
import twitterLogo from "../images/twitter.png";
import githubLogo from "../images/github.png";

function getAlphab(index) {
  if (index < 0) {
    return null; // Index out of range for alphabetical characters
  }
  if (index > 25) {
    return getAlphab(index / 26 - 1) + getAlphab(index % 26); // Index out of range for alphabetical characters
  }

  var charCode = "a".charCodeAt(0) + index;
  return String.fromCharCode(charCode);
}

const Speaker = ({ speaker, index }) => {
  const { twitter, github, name, image, organization } = speaker;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center h-40 w-40 overflow-clip">
        <img
          src={image?.default || speaker?.image || dummySpeaker}
          alt={name}
          className="grayscale brightness-125 opacity-70 contrast-100 object-contain w-48"
        />
      </div>
      <div className="text-center mt-1">
        <span>
          {"(" + getAlphab(index) + ") "}
          <b>{name}</b>
        </span>
        <span>
          {organization && <span className="">{", " + organization.name}</span>}
        </span>
        <span className="">
          {twitter && (
            <>
              <span>{", "}</span>
              <a href={twitter} rel="noopener noreferrer" target="_blank">
                Twitter
              </a>
            </>
          )}
          {github && (
            <>
              <span>{", "}</span>
              <a href={github} rel="noopener noreferrer" target="_blank">
                Github
              </a>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Speaker;
