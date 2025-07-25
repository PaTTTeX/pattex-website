import React, { useState, useEffect } from 'react';

export default function FullscreenImage({ src, alt }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleClickOutside = (e) => {
    if (e.target.id === "fullscreen-overlay") {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <>
      <div
        className="relative overflow-hidden w-full max-h-[339px] min-h-[339px] cursor-pointer"
        onClick={() => setIsFullscreen(true)}
        title="Click to view fullscreen"
      >
        <img
          src={src}
          alt={alt}
          className="mx-auto w-full h-full object-cover"
        />
      </div>

      {isFullscreen && (
        <div
          id="fullscreen-overlay"
          onClick={handleClickOutside}
          className="fixed top-0 left-0 w-screen h-screen bg-black/80 z-50 flex items-center justify-center"
        >
          <img
            src={src}
            alt={alt}
            className="w-[80vw] h-[80vh] object-contain rounded-xl shadow-lg border-4 border-white"
          />
        </div>
      )}
    </>
  );
}
