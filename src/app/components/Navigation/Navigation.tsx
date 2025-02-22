import { Inter } from "next/font/google";
import { NavigationProps, NavLink } from "./types";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600"],
});

const NavLinkComponent = ({
  href,
  label,
  onClick,
  className = "",
}: NavLink) => (
  <a
    href={href}
    onClick={onClick}
    className={`${inter.className} font-semibold uppercase ${className}`}
  >
    {label}
  </a>
);

export const Navigation: React.FC<NavigationProps> = ({
  leftLinks,
  rightLink,
  className = "",
}) => {
  return (
    <nav className={`flex justify-between mt-3 mb-20 ${className}`}>
      <div className="flex flex-col ml-10">
        {leftLinks.map((link) => (
          <NavLinkComponent
            key={link.label}
            {...link}
            className="text-xl text-fortitude -mb-1 "
          />
        ))}
      </div>

      {rightLink && (
        <div className="mr-10">
          <NavLinkComponent {...rightLink} className="text-grey text-sm" />
        </div>
      )}
    </nav>
  );
};
