"use client";
import { Inter } from "next/font/google";
import { useRef } from "react";

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
  return (
    <div className="min-h-screen flex flex-col">
      <main className="h-screen flex flex-col p-4 relative">
        <div className="flex justify-between mt-3 mb-20">
          <div className="flex flex-col ml-[10%]">
            <a
              href="#"
              className={`text-1xl ${inter.className} font-semibold uppercase text-fortitude -mb-1`}
            >
              "Portfolio"
            </a>
            <a
              href="#"
              className={`text-1xl ${inter.className} font-semibold uppercase text-fortitude -mb-1`}
            >
              "Resume"
            </a>
            <a
              href="#"
              className={`text-1xl ${inter.className} font-semibold uppercase text-fortitude -mb-1`}
            >
              "Inquiries"
            </a>
          </div>
          <a
            href="#biography"
            onClick={scrollToBiography}
            className={`${inter.className} font-semibold uppercase mr-[10%] text-grey text-sm hover:text-fortitude transition-colors`}
          >
            [Biography + Principles]
          </a>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <h3
            className={`${inter.className} font-semibold uppercase text-center w-3/5 text-3xl mb-7`}
          >
            "insert quote here; Lorem ipsum dolor sit amet, consectetur
            adipiscin"
          </h3>
          <h3
            className={`${inter.className} italic text-center text-md mb-7 w-3/5`}
          >
            [Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim]
          </h3>
        </div>

        <div className="absolute bottom-8 left-0 ml-4">
          <h3
            className={`${inter.className} font-semibold uppercase ml-[2%] text-blue text-sm`}
          >
            [Location/coordinates]
          </h3>
          <h3
            className={`${inter.className} font-semibold uppercase ml-[2%] text-blue text-sm`}
          >
            [MM/DD/YYYY][00:00]
          </h3>
          <a
            href="#biography"
            onClick={scrollToBiography}
            className={`${inter.className} font-semibold uppercase ml-[2%] text-blue text-sm hover:text-fortitude transition-colors cursor-pointer`}
          >
            Scroll
          </a>
        </div>
      </main>

      <section id="biography" ref={biographyRef} className="min-h-screen  p-4">
        <div className="flex flex-row ">
          <div className="w-2/3 h-[400px] bg-grey p-4 ml-3">
            <p className="text-white">Insert headshot</p>
          </div>
          <div className="w-1/3 ml-5 pr-[12%]">
            <h2
              className={`${inter.className}  uppercase text-md mb-2 self-start`}
            >
              Biography
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt{" "}
            </p>
            <div className="prose">{/* Add your biography content here */}</div>
          </div>
        </div>
        <h2 className={`${inter.className}  uppercase text-md  ml-3 mb-6`}>
          Principles
        </h2>
      </section>
    </div>
  );
}
