export interface Coordinates {
  x: number;
  y: number;
}

export interface ScrollOptions {
  text: string;
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface LocationTrackerProps {
  scrollOptions: ScrollOptions;
  className?: string;
}
