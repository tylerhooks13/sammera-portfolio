"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import { HeroSectionProps, QuoteContent } from "./types";
import { LocationTracker } from "../LocationTracker/LocationTracker";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["600"],
  style: ["normal", "italic"],
});

// VideoText component with direct SVG mask
const VideoText = ({ text }: { text: string }) => {
  // Generate a unique ID for each mask to avoid conflicts
  const [uniqueId] = useState(
    `mask-${Math.random().toString(36).substring(2, 9)}`
  );

  return (
    <span className="inline-block relative">
      <svg
        width={`${text.length * 0.55}em`}
        viewBox={`0 0 ${text.length * 30} 60`}
        preserveAspectRatio="xMidYMid meet"
        className="inline align-middle"
        style={{ margin: "0 0.02em" }}
      >
        <defs>
          <mask id={uniqueId}>
            <rect width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontSize="40"
              fontWeight="bold"
              fontFamily="Inter, sans-serif"
              style={{ textTransform: "uppercase" }}
            >
              {text}
            </text>
          </mask>
        </defs>

        <g mask={`url(#${uniqueId})`}>
          <foreignObject width="100%" height="100%">
            <div className="w-full h-full" style={{ overflow: "hidden" }}>
              <video
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full object-cover"
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
          </foreignObject>
        </g>
      </svg>
    </span>
  );
};

// Quote component as a regular paragraph of text
const Quote: React.FC<{ content: QuoteContent }> = ({ content }) => {
  const [mounted, setMounted] = useState(false);

  // Simple effect to handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR, return minimal component
  if (!mounted) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-7 px-4 w-full"></div>
        <h3
          className={`${inter.className} italic text-center text-md mb-7 w-3/5`}
        >
          {content.subQuote}
        </h3>
      </div>
    );
  }

  // Process the quote text on client side
  const words = content.mainQuote.split(" ");

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      {/* Main quote as normal paragraph text */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-7">
        <h1
          className={`${inter.className} text-center text-3xl md:text-4xl lg:text-9xl leading-tight md:leading-snug font-semibold tracking-tight`}
        >
          {words.map((word, index) => (
            <VideoText key={index} text={word} />
          ))}
        </h1>
      </div>

      {/* Sub Quote */}
      <h3
        className={`${inter.className} italic text-center text-md mb-7 w-3/5`}
      >
        {content.subQuote}
      </h3>
    </div>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  const { navigationLinks, quoteContent, scrollOptions } = content;

  return (
    <section className="h-screen flex flex-col p-4 relative">
      <Navigation
        leftLinks={navigationLinks.leftLinks}
        rightLink={navigationLinks.rightLink}
        className="mb-5"
      />

      <Quote content={quoteContent} />

      <LocationTracker
        className="absolute bottom-8"
        scrollOptions={scrollOptions}
      />
    </section>
  );
};
