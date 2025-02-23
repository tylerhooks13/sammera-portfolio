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
        '"insert quote here; Lorem ipsum dolor sit amet, consectetur adipiscin"',
      subQuote:
        "[Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim]",
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
