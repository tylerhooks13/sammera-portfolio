"use client";
import { Inter } from "next/font/google";
import { useRef } from "react";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { HeroContent } from "./components/HeroSection/types";
import Biography from "./components/Biography/Biography";

export default function Home() {
  const biographyRef = useRef<HTMLElement>(null);

  const scrollToBiography = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    if (biographyRef.current) {
      biographyRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const heroContent: HeroContent = {
    navigationLinks: {
      leftLinks: [
        { href: "#", label: '"Home"' },
        { href: "#", label: '"Portfolio"' },
        { href: "#", label: '"Inquiries"' },
      ],
      rightLink: {
        href: "#biography",
        label: "[Biography + Principles]",
        onClick: scrollToBiography,
      },
    },
    quoteContent: {
      mainQuote:
        "“Any form of art is a form of power; it has impact, it can affect change.”",
      subQuote:
        "--Ossie Davis, Ossie Davis A Life in Black Theater, Film, and Television",
    },
    scrollOptions: {
      text: "Scroll",
      href: "#biography",
      onClick: scrollToBiography,
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection content={heroContent} />
      <Biography biographyRef={biographyRef} />
    </div>
  );
}
