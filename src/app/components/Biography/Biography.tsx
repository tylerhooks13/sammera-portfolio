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
        <div className="w-[961px] h-[400px] bg-grey p-4 ml-3">
          <p className="text-white">Insert headshot</p>
        </div>
        <div className="ml-5 pr-[12%]">
          <h2
            className={`${inter.className}  uppercase text-md mb-2 self-start`}
          >
            Biography
          </h2>
          <p>
            Sammera is a Black-American, multiethnic Interior Designer based in
            Texas, USA. She holds a Bachelor of Science in Family and Consumer
            Sciences (B.S.F.C.S.) – Interior Design from Texas State University,
            complemented by a minor in Technology with a focus on Construction
            Science Management. Her technical foundation reflects a deep
            commitment to understanding both design and the built environment.
            With expertise spanning healthcare, civic, higher education, K-12,
            and non-profit sectors, Sammera approaches design with precision and
            purpose. Known for her attention to detail and collaborative
            mindset, she ensures that every space functions seamlessly—meeting
            the needs of clients, end-users, and the broader community.
          </p>
          <div className="prose">{/* Add your biography content here */}</div>
        </div>
      </div>
      <h2 className={`${inter.className}  uppercase text-md  ml-3 mb-6`}>
        Philosophy
      </h2>
    </section>
  );
};

export default Biography;
