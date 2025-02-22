"use client";
import { Inter } from "next/font/google";
import { useRef } from "react";
import { HeroSection } from "./components/HeroSection/HeroSecttion";
import Biography from "./components/Biography/Biography";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

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
  const heroContent = {
    navigationLinks: {
      leftLinks: [
        { href: "#", label: '"Portfolio"' },
        { href: "#", label: '"Resume"' },
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
    locationInfo: {
      location: "[Location/coordinates]",
      datetime: "[MM/DD/YYYY][00:00]",
    },
  };
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection {...heroContent} onScroll={scrollToBiography} />
      <Biography biographyRef={biographyRef}></Biography>
    </div>
  );
}
