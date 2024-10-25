import React, { useEffect } from "react";
import { navigate } from "gatsby";

const GalleryPage = () => {
  useEffect(() => {
    navigate("http://2023.protocol.berlin/gallery/");
  }, []);

  return null;
};

export default GalleryPage;
