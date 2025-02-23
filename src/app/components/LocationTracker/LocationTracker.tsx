// components/LocationTracker/LocationTracker.tsx
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { LocationTrackerProps } from "./types";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600"],
});

export const LocationTracker: React.FC<LocationTrackerProps> = ({
  onScroll,
  className = "",
}) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCoordinates({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatCoordinates = () => {
    return `[${coordinates.x}, ${coordinates.y}]`;
  };

  const formatDateTime = () => {
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    const formattedDate = dateFormatter.format(currentDateTime);

    let hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes().toString().padStart(2, "0");

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `[${formattedDate}][${hours}:${minutes}]`;
  };

  return (
    <div className={`flex flex-col gap-2 ml-4 ${className}`}>
      <div
        className={`${inter.className} font-semibold uppercase text-blue text-sm whitespace-nowrap ml-[2%]`}
      >
        {formatCoordinates()}
      </div>
      <div
        className={`${inter.className} font-semibold uppercase text-blue text-sm whitespace-nowrap ml-[2%]`}
      >
        {formatDateTime()}
      </div>
      <a
        href="#biography"
        onClick={onScroll}
        className={`${inter.className} font-semibold uppercase text-blue text-sm cursor-pointer whitespace-nowrap ml-[2%]`}
      >
        Scroll
      </a>
    </div>
  );
};
