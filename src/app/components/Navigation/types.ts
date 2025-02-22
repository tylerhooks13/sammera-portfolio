export interface NavLink {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string; // Added className to the interface
}

export interface NavigationProps {
  leftLinks: NavLink[];
  rightLink?: NavLink;
  className?: string;
}
