import React from "react";

function FilmVideo({url}) {
  return (
    <>
      <iframe
        src={url}
        title="Spirited Away - Official Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onPlay={() => console.log("play")}
      ></iframe>
    </>
  );
}

export { FilmVideo };
