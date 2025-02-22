import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollIcon from "./components/ScrollIcon";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"], // Specify which character sets you need
  display: "swap", // Optimize font loading
  variable: "--font-inter", // Create a CSS variable
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sammera Fadul Portfolio",
  description:
    "The portfolio of Sammera Fadul, a multi-disicplinary interior designer. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {" "}
        <div className="scroll-icon-container">
          <ScrollIcon />
        </div>
        {children}
      </body>
    </html>
  );
}
