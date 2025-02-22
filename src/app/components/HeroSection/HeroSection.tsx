import { Inter } from "next/font/google";
import { Navigation } from "../Navigation/Navigation";
import { HeroSectionProps } from "./types";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const HeroSection: React.FC<HeroSectionProps> = ({
  navigationLinks,
  quoteContent,
  locationInfo,
  onScroll,
}) => {
  return (
    <section className="h-screen flex flex-col p-4 relative">
      <Navigation
        leftLinks={navigationLinks.leftLinks}
        rightLink={navigationLinks.rightLink}
        className="mb-5"
      />

      <div className="flex-1 flex flex-col items-center justify-center">
        <h3
          className={`${inter.className} font-semibold uppercase text-center w-3/5 text-3xl mb-7`}
        >
          {quoteContent.mainQuote}
        </h3>
        <h3
          className={`${inter.className} italic text-center text-md mb-7 w-3/5`}
        >
          {quoteContent.subQuote}
        </h3>
      </div>

      <div className="absolute bottom-8 left-0 ml-4">
        <h3
          className={`${inter.className} font-semibold uppercase ml-[2%] text-blue text-sm`}
        >
          {locationInfo.location}
        </h3>
        <h3
          className={`${inter.className} font-semibold uppercase ml-[2%] text-blue text-sm`}
        >
          {locationInfo.datetime}
        </h3>
        <a
          href="#biography"
          onClick={onScroll}
          className={`${inter.className} font-semibold uppercase ml-[2%] text-blue text-sm hover:text-fortitude transition-colors cursor-pointer`}
        >
          Scroll
        </a>
      </div>
    </section>
  );
};
