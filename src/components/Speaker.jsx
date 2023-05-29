import React from "react";

export default function Spearker({ speaker, index }) {
  return (
    <div className="text-center">
      <img
        src={speaker.avatar}
        alt={speaker.name}
        className="mx-auto h-32 grayscale m-2"
      />
      <div className="break-all">
        ({getAlphab(index)}) <b>{speaker.name}</b>, {speaker.biography}
      </div>
    </div>
  );
}

function getAlphab(index) {
  if (index < 0 || index >= 26) {
    return null; // Index out of range for alphabetical characters
  }

  var charCode = "a".charCodeAt(0) + index;
  return String.fromCharCode(charCode);
}
