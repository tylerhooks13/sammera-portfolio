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

// Component for the multi-media hero section
const Quote: React.FC<{ content: QuoteContent }> = ({ content }) => {
  const [mounted, setMounted] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      {/* Main container for the layout */}
      <div className="w-full max-w-5xl mx-auto relative">
        {/* Media elements - positioned absolutely to overlap appropriately */}

        {/* OLD FILM VIDEO - left side */}
        <div className="absolute left-0 top-0 w-[320px] h-[180px] bg-grey overflow-hidden z-10">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs">
            OLD FILM VIDEO
          </div>
          {mounted && (
            <iframe
              className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
              src="https://www.youtube.com/embed/BzvZh3wwp4I?autoplay=1&mute=1&controls=0&loop=1&playlist=BzvZh3wwp4I&showinfo=0&rel=0&modestbranding=1&start=3&iv_load_policy=3"
              title="Old Film Video"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* VINTAGE PHOTO OF BUILDING/SKETCH - right side */}
        <div className="absolute right-0 top-0 w-[280px] h-[180px] bg-grey overflow-hidden z-10">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs">
            VINTAGE PHOTO OF BUILDING/ SKETCH
          </div>
          <img
            src="https://placehold.co/280x180/333333/CCCCCC/?text=Building+Sketch"
            alt="Vintage building sketch"
            className="w-full h-full object-cover"
          />
        </div>

        {/* PHOTO OF ARTWORK - left side below */}
        <div className="absolute left-[100px] bottom-0 w-[240px] h-[160px] bg-grey overflow-hidden z-10">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs">
            PHOTO OF ARTWORK
          </div>
          <img
            src="https://placehold.co/240x160/333333/CCCCCC/?text=Artwork"
            alt="Artwork photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* FASHION CATWALK VIDEO - right side below */}
        <div className="absolute right-[50px] bottom-0 w-[380px] h-[180px] bg-grey overflow-hidden z-10">
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs">
            FASHION CATWALK VIDEO
          </div>
          {mounted && (
            <iframe
              className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
              src="https://www.youtube.com/embed/1J9QsKRWXLs?autoplay=1&mute=1&controls=0&loop=1&playlist=1J9QsKRWXLs&showinfo=0"
              title="Fashion Catwalk Video"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Central Text Container - brings text on top of media elements */}
        <div className="pt-[100px] pb-[100px] px-4 z-20 relative">
          {/* Main Quote */}
          <h1
            className={`${inter.className} text-center text-black text-3xl md:text-4xl lg:text-6xl leading-tight font-semibold tracking-tighter px-4 z-30 relative`}
          >
            {content.mainQuote}
          </h1>

          {/* Sub Quote */}
          <h3
            className={`${inter.className} italic text-center text-md mt-12 max-w-2xl mx-auto`}
          >
            {content.subQuote}
          </h3>
        </div>
      </div>
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
