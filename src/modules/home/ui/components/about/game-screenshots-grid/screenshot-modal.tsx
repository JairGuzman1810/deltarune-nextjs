import Image from "next/image"; // Import Next.js optimized Image component
import { useCallback, useEffect, useState } from "react"; // Import necessary React hooks

// ImageData - Represents an image with its src, alt text, and origin DOMRect
interface ImageData {
  src: string; // Image source URL
  alt: string; // Alt text for the image
  originRect: DOMRect; // DOMRect representing original position for animation
}

// ScreenshotModalProps - Props for the ScreenshotModal component
interface ScreenshotModalProps {
  images: ImageData[]; // List of images to display in the modal
  initialIndex: number; // Index of the image to show initially
  onClose: () => void; // Callback when modal is closed
  getOriginRect?: (index: number) => DOMRect | null; // Optional function to get updated origin rect
}

// AnimationState - Represents the state of the modal animation
type AnimationState = "opening" | "open" | "closing";

// ScreenshotModal - Fullscreen modal to view images with animated transitions and navigation
export const ScreenshotModal = ({
  images,
  initialIndex,
  onClose,
  getOriginRect,
}: ScreenshotModalProps) => {
  const [animState, setAnimState] = useState<AnimationState>("opening"); // State for animation
  const [currentIndex, setCurrentIndex] = useState(initialIndex); // Current index of image
  const [isTransitioning, setIsTransitioning] = useState(false); // Transition state
  const [currentOriginRect, setCurrentOriginRect] = useState<DOMRect>(
    images[initialIndex].originRect // Initial rect from clicked image
  );

  // updateCurrentOriginRect - Updates origin rect if function is provided
  const updateCurrentOriginRect = useCallback(() => {
    if (getOriginRect) {
      const newRect = getOriginRect(currentIndex); // Get rect for current image
      if (newRect) setCurrentOriginRect(newRect); // Update state if valid
    }
  }, [getOriginRect, currentIndex]);

  // Add window resize listener to update origin rect dynamically
  useEffect(() => {
    window.addEventListener("resize", updateCurrentOriginRect); // Attach
    return () => {
      window.removeEventListener("resize", updateCurrentOriginRect); // Cleanup
    };
  }, [updateCurrentOriginRect]);

  // Prevent body scroll and account for scrollbar width
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth; // Calculate scrollbar width
    document.body.style.overflow = "hidden"; // Lock scroll
    document.body.style.paddingRight = `${scrollbarWidth}px`; // Compensate layout shift

    return () => {
      document.body.style.overflow = ""; // Restore scroll
      document.body.style.paddingRight = ""; // Restore padding
    };
  }, []);

  // Set state to fully open on next animation frame
  useEffect(() => {
    requestAnimationFrame(() => setAnimState("open")); // Trigger "open" state
  }, []);

  // handleClose - Starts the closing animation and updates origin
  const handleClose = () => {
    updateCurrentOriginRect(); // Refresh position before closing
    setAnimState("closing"); // Trigger close animation
  };

  // onTransitionEnd - Final cleanup when closing ends
  const onTransitionEnd = () => {
    if (animState === "closing") onClose(); // Fire close callback if done
    setIsTransitioning(false); // Reset transition lock
  };

  // navigate - Navigates to the previous or next image
  const navigate = (direction: "prev" | "next") => (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal close
    if (isTransitioning) return; // Block if already transitioning
    setIsTransitioning(true); // Lock transition
    const newIndex =
      direction === "prev"
        ? currentIndex === 0
          ? images.length - 1
          : currentIndex - 1
        : currentIndex === images.length - 1
        ? 0
        : currentIndex + 1; // Wrap around if needed
    setCurrentIndex(newIndex); // Update current image

    if (getOriginRect) {
      const newRect = getOriginRect(newIndex); // Update origin rect for new image
      if (newRect) setCurrentOriginRect(newRect);
    }
  };

  // positionStyles - Dynamically calculates position/size of the modal
  const positionStyles =
    animState === "opening" || animState === "closing"
      ? {
          top: currentOriginRect.top, // Start/exit from image location
          left: currentOriginRect.left,
          width: currentOriginRect.width,
          height: currentOriginRect.height,
        }
      : {
          top: 0, // Fullscreen when fully open
          left: 0,
          width: "100vw",
          height: "100vh",
        };

  return (
    <>
      {/* Overlay that dims background and closes modal on click */}
      <div
        className={`fixed inset-0 z-[1000] transition-colors duration-300 ease-in-out ${
          animState === "open"
            ? "bg-[#18181bfa]  pointer-events-auto" // Active
            : "bg-transparent pointer-events-none" // Inactive
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Animated container for the image */}
      <div
        onTransitionEnd={onTransitionEnd} // Cleanup after transition
        aria-modal="true"
        role="dialog"
        className={`fixed z-[1001] cursor-zoom-out overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)] rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center bg-[#18181bfa] ${
          animState === "open" && "top-0 left-0 w-screen h-screen rounded-none" // Expand to full screen
        }`}
        style={positionStyles}
        onClick={handleClose}
      >
        {/* Responsive wrapper with fixed aspect ratio */}
        <div className="relative w-[90vw] max-w-[1200px] aspect-[16/9]">
          {images.map((image, index) => (
            <div
              key={index} // Unique key
              className="absolute inset-0 transition-opacity duration-300" // Fade between images
              style={{
                opacity: index === currentIndex ? 1 : 0, // Only current is visible
                pointerEvents: index === currentIndex ? "auto" : "none", // Interactivity only on current
              }}
              onTransitionEnd={() => {
                if (index === currentIndex) setIsTransitioning(false); // Unlock transition
              }}
            >
              <Image
                src={image.src} // Image source
                alt={`Image ${index + 1} of ${images.length}`} // Accessibility alt
                fill // Fill the container
                unoptimized // Skip Next.js optimization
                draggable={false} // Prevent dragging
                priority // Preload this image
                style={{
                  objectFit: animState === "open" ? "contain" : "cover", // Fit mode based on state
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation and close buttons (visible only when open) */}
      {animState === "open" && (
        <>
          {/* Close modal button */}
          <button
            onClick={handleClose}
            aria-label="Close modal"
            type="button"
            className="fixed top-5 right-5 z-[1002] w-10 h-10 rounded-full bg-black hover:bg-gray-800 duration-150 transition-all text-white text-2xl leading-none cursor-pointer select-none border-none flex items-center justify-center hover:text-deltarune-yellow pb-1"
          >
            ×
          </button>

          {/* Previous image button */}
          <button
            onClick={navigate("prev")}
            aria-label="Previous image"
            type="button"
            className={`fixed top-1/2 left-5 z-[1002] w-12 h-12 -translate-y-1/2 rounded-full bg-black bg-opacity-60 text-white/70 text-3xl leading-none cursor-pointer select-none border-none flex items-center justify-center hover:text-deltarune-yellow ${
              isTransitioning && "opacity-50 cursor-not-allowed" // Disabled during transition
            }`}
            disabled={isTransitioning}
          >
            ‹
          </button>

          {/* Next image button */}
          <button
            onClick={navigate("next")}
            aria-label="Next image"
            type="button"
            className={`fixed top-1/2 right-5 z-[1002] w-12 h-12 -translate-y-1/2 rounded-full bg-black bg-opacity-60 text-white/70 text-3xl leading-none cursor-pointer select-none border-none flex items-center justify-center hover:text-deltarune-yellow ${
              isTransitioning && "opacity-50 cursor-not-allowed" // Disabled during transition
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
