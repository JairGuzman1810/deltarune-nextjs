import Image from "next/image";
import { useEffect, useState } from "react";

// ImageData - Represents a single image with bounding rect for animation
interface ImageData {
  src: string; // Image source URL
  alt: string; // Alternative text for accessibility
  originRect: DOMRect; // Bounding rect of image used for transition animation
}

// ScreenshotModalProps - Props for the ScreenshotModal component
interface ScreenshotModalProps {
  images: ImageData[]; // Array of images to display
  initialIndex: number; // Index of image to open modal with
  onClose: () => void; // Handler to close modal
}

// ScreenshotModal - Displays fullscreen modal for viewing images with zoom animation and navigation
export const ScreenshotModal = ({
  images,
  initialIndex,
  onClose,
}: ScreenshotModalProps) => {
  // Animation state: 'opening', 'open', or 'closing'
  const [animState, setAnimState] = useState<"opening" | "open" | "closing">(
    "opening"
  );

  // Index of currently displayed image
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Prevents interaction during animation transitions
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Prevent body scroll and compensate for scrollbar when modal is open
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  // Trigger animation to full-screen on mount
  useEffect(() => {
    requestAnimationFrame(() => setAnimState("open"));
  }, []);

  // Initiate close animation
  const handleClose = () => setAnimState("closing");

  // Call onClose after animation ends
  const onTransitionEnd = () => {
    if (animState === "closing") onClose();
    setIsTransitioning(false);
  };

  // goPrev - Show previous image with wrap-around behavior
  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing modal
    if (isTransitioning) return; // Avoid rapid nav
    setIsTransitioning(true);
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  // goNext - Show next image with wrap-around behavior
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent closing modal
    if (isTransitioning) return; // Avoid rapid nav
    setIsTransitioning(true);
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  const currentImage = images[currentIndex]; // Currently active image
  const originRect = currentImage.originRect; // Rect used for initial zoom animation

  // Styles for animating from originRect to fullscreen (or reverse)
  const positionStyles =
    animState === "opening" || animState === "closing"
      ? {
          top: originRect.top,
          left: originRect.left,
          width: originRect.width,
          height: originRect.height,
        }
      : {
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        };

  return (
    <>
      {/* Modal background overlay - darkens screen and closes on click */}
      <div
        className={`fixed inset-0 z-[1000] transition-colors duration-300 ease-in-out ${
          animState === "open"
            ? "bg-black bg-opacity-90 pointer-events-auto"
            : "bg-transparent pointer-events-none"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Animated image container positioned using originRect */}
      <div
        onTransitionEnd={onTransitionEnd}
        aria-modal="true"
        role="dialog"
        className={`fixed z-[1001] cursor-zoom-out overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)] rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center bg-black ${
          animState === "open"
            ? "top-0 left-0 w-screen h-screen rounded-none"
            : ""
        }`}
        style={positionStyles}
        onClick={handleClose}
      >
        {/* Aspect-ratio container to constrain images */}
        <div className="relative w-[90vw] max-w-[1200px] aspect-[16/9]">
          {/* Map over all images, only one is fully visible at a time */}
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                pointerEvents: index === currentIndex ? "auto" : "none",
              }}
              onTransitionEnd={() => {
                if (index === currentIndex) setIsTransitioning(false);
              }}
            >
              <Image
                src={image.src}
                alt={`Image ${index + 1} of ${images.length}`}
                fill
                draggable={false}
                priority
                style={{
                  objectFit: animState === "open" ? "contain" : "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation and close controls - only visible when modal is fully open */}
      {animState === "open" && (
        <>
          {/* Close button (top-right) */}
          <button
            onClick={handleClose}
            aria-label="Close modal"
            type="button"
            className="fixed top-5 right-5 z-[1002] w-10 h-10 rounded-full bg-black bg-opacity-60 text-white text-2xl leading-none cursor-pointer select-none border-none flex items-center justify-center hover:text-deltarune-yellow"
          >
            ×
          </button>

          {/* Previous image button (left center) */}
          <button
            onClick={goPrev}
            aria-label="Previous image"
            type="button"
            className={`fixed top-1/2 left-5 z-[1002] w-12 h-12 -translate-y-1/2 rounded-full bg-black bg-opacity-60 text-white text-3xl leading-none cursor-pointer select-none border-none flex items-center justify-center hover:text-deltarune-yellow ${
              isTransitioning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isTransitioning}
          >
            ‹
          </button>

          {/* Next image button (right center) */}
          <button
            onClick={goNext}
            aria-label="Next image"
            type="button"
            className={`fixed top-1/2 right-5 z-[1002] w-12 h-12 -translate-y-1/2 rounded-full bg-black bg-opacity-60 text-white text-3xl leading-none cursor-pointer select-none border-none flex items-center justify-center hover:text-deltarune-yellow ${
              isTransitioning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isTransitioning}
          >
            ›
          </button>
        </>
      )}
    </>
  );
};
