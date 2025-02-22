import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600"],
});

interface BiographyProps {
  biographyRef: React.Ref<HTMLElement>;
}
export const Biography: React.FC<BiographyProps> = ({ biographyRef }) => {
  return (
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt{" "}
          </p>
          <div className="prose">{/* Add your biography content here */}</div>
        </div>
      </div>
      <h2 className={`${inter.className}  uppercase text-md  ml-3 mb-6`}>
        Principles
      </h2>
    </section>
  );
};

export default Biography;
