import React, { useEffect, useRef, useState } from "react";

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const isFadingOutRef = useRef(false);
  const isFadingInRef = useRef(false);

  const sources = Array.isArray(src) ? src : [src];
  const activeSrc = sources[currentSrcIndex];

  // Keep tracking when index/src list changes
  useEffect(() => {
    isFadingOutRef.current = false;
    isFadingInRef.current = false;
    if (videoRef.current) {
      videoRef.current.style.opacity = "0";
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentSrcIndex, src]);

  const handleLoadedData = () => {
    if (!videoRef.current || isFadingInRef.current) return;
    isFadingInRef.current = true;
    isFadingOutRef.current = false;

    let startTimestamp: number | null = null;
    const fadeIn = (timestamp: number) => {
      if (!videoRef.current) return;
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const opacity = Math.min(elapsed / 500, 1);
      videoRef.current.style.opacity = opacity.toString();

      if (elapsed < 500) {
        requestAnimationFrame(fadeIn);
      } else {
        isFadingInRef.current = false;
      }
    };
    requestAnimationFrame(fadeIn);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || isFadingOutRef.current) return;

    const duration = video.duration;
    const currentTime = video.currentTime;
    if (isNaN(duration) || duration === 0) return;

    const timeLeft = duration - currentTime;
    if (timeLeft <= 0.55) {
      isFadingOutRef.current = true;
      isFadingInRef.current = false;

      let startTimestamp: number | null = null;
      const startOpacity = parseFloat(video.style.opacity || "1");

      const fadeOut = (timestamp: number) => {
        if (!videoRef.current) return;
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const opacity = Math.max(startOpacity * (1 - elapsed / 550), 0);
        videoRef.current.style.opacity = opacity.toString();

        if (elapsed < 550) {
          requestAnimationFrame(fadeOut);
        }
      };
      requestAnimationFrame(fadeOut);
    }
  };

  const handleEnded = () => {
    if (sources.length === 1) {
      // Single source loop: rewind and fade-in again
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        isFadingOutRef.current = false;
        video.play().then(() => {
          handleLoadedData();
        }).catch(() => {});
      }
    } else {
      // Multi source loop: increment index
      setCurrentSrcIndex((prev) => (prev + 1) % sources.length);
    }
  };

  return (
    <video
      ref={videoRef}
      src={activeSrc}
      className={className}
      style={{
        opacity: 0,
        ...style,
      }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
}
