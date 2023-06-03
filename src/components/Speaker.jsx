import React from "react";
import dummySpeaker from "../images/speakers/dummy.png";
import twitterLogo from "../images/twitter.png";
import githubLogo from "../images/github.png";

const Speaker = ({ speaker, index }) => {
  const { twitter, github, name, image, organization } = speaker;
  return (
    <div>
      <img
        src={image?.default || speaker?.image || dummySpeaker}
        alt={name}
        className="mx-auto h-32 grayscale m-2"
      />
      <div className="">
        <div>
          <b>{name}</b>
        </div>
        <div>
          {organization && <span className="italic">{organization.name}</span>}
        </div>
        <div className="flex justify-center mt-2">
          {twitter && (
            <a href={twitter} rel="noopener noreferrer" target="_blank">
              <img
                src={twitterLogo}
                className="mx-2 h-4 invert opacity-70 hover:opacity-100"
                alt="twitter"
              />
            </a>
          )}
          {github && (
            <a href={github} rel="noopener noreferrer" target="_blank">
              <img
                src={githubLogo}
                className="mx-2 h-4 invert opacity-70 hover:opacity-100"
                alt="github"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
