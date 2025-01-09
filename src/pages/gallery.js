import React, { useEffect } from "react";
import { navigate } from "gatsby";

const GalleryPage = () => {
  useEffect(() => {
    navigate("http://v1.protocol.berlin/gallery/");
  }, []);

  return null;
};

export default GalleryPage;
