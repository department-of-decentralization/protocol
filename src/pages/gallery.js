import React, { useState } from "react";
import images from "../images/images.json";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const GalleryPage = () => {

  const [index, setIndex] = useState(-1);

  const handleClick = (index, _) => setIndex(index);

  const thumbswithSrc = images.map((image) => {
    return {
      ...image,
      src: `https://raw.githubusercontent.com/Department-of-Decentralization/pb23-photos/main/thumbnails/${image.name}`,
    };
  });

  const imagesWithSrc = images.map((image) => {
    return {
      src: `https://raw.githubusercontent.com/Department-of-Decentralization/pb23-photos/main/${image.name}`,
    };
  });

  return (
    <main className="my-24">
    <header className="text-center">
      <h1 className="font-bold">Protocol Berg</h1>
      <p className="italic text-center">
        The decentralized protocol and infrastructure conference.
      </p>
    </header>
      <section>
        <h2 className="font-bold">Gallery</h2>
        <p>
          <a
            href="https://www.antontal.com/"
            target="_blank"
            rel="noreferrer"
          >
          Anton Tal
          </a>
          helped us to document Protocol Berg's unique atmosphere and people.
          If you like the photos, please consider sending Anton a donation to
          <code>antontal.eth</code>
        </p>
        <div>
        <Gallery
          images={thumbswithSrc}
          onClick={handleClick}
          enableImageSelection={false}
          rowHeight={240}
          margin={4}
        />
      </div>
      <Lightbox
        slides={imagesWithSrc}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        animation={{ fade: 330, swipe: 250 }}
        carousel={{
          finite: false,
          preload: 1,
          padding: "16px",
          spacing: "30%",
          imageFit: "contain",
        }}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 1,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 500,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 150,
          pinchZoomDistanceFactor: 150,
          scrollToZoom: false,
        }}
      />
      <p>
        Photos of the event were provided by{" "}
        <a
          href="https://www.antontal.com/"
          target="_blank"
          rel="noreferrer"
        >
        Anton Tal
        </a>.
        Please consider leaving Anton a donation: <code>antontal.eth</code>
      </p>
      </section>
      <p className="ml-12">Back to <a href="/">protocol.berlin</a></p>
    </main>
  )
}

export default GalleryPage

export const Head = () => <title>Protocol Berg - Gallery</title>
