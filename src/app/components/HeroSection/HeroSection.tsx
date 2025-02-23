// HeroSection/HeroSection.tsx
"use client";
import { Inter } from "next/font/google";
import { Navigation } from "../Navigation/Navigation";
import { HeroSectionProps, QuoteContent } from "./types";
import { LocationTracker } from "../LocationTracker/LocationTracker";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

// Quote component for the middle section
const Quote: React.FC<{ content: QuoteContent }> = ({ content }) => (
  <div className="flex-1 flex flex-col items-center justify-center">
    <h3
      className={`${inter.className} font-semibold uppercase text-center w-3/5 text-3xl mb-7`}
    >
      {content.mainQuote}
    </h3>
    <h3 className={`${inter.className} italic text-center text-md mb-7 w-3/5`}>
      {content.subQuote}
    </h3>
  </div>
);

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
