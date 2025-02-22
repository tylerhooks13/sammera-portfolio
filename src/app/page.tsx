import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"], // Specify which character sets you need
  display: "swap", // Optimize font loading
  variable: "--font-inter", // Create a CSS variable
  weight: ["400", "600"],
});
export default function Home() {
  return (
    <main className="p-4">
      <div className="flex justify-between mt-3 mb-7">
        <div className="flex flex-col  ml-[10%] ">
          <a
            href="#"
            className={`text-1xl ${inter.className} font-semibold uppercase text-fortitude  -mb-1`}
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
          href="#"
          className={`${inter.className} font-semibold uppercase mr-[10%] text-grey text-sm`}
        >
          [Biography + Principles]
        </a>
      </div>
      <h3
        className={`${inter.className} font-semibold uppercase text-center w- text-3xl  mb-7  w-93 justify-self-center`}
      >
        “insert quote here; Lorem ipsum dolor sit amet, consectetur adipiscin”
      </h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim
      <h3
        className={`${inter.className} font-semibold uppercase ml-[2%] text-blue text-sm`}
      >
        [Location/coordinates]
      </h3>
      <h3
        className={`${inter.className} font-semibold uppercase ml-[2%] text-blue text-sm `}
      >
        [MM/DD/YYYY][00:00]
      </h3>
      <h3
        className={`${inter.className} font-semibold uppercase ml-[2%] text-blue text-sm`}
      >
        Scroll
      </h3>
    </main>
  );
}
