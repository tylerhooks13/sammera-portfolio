export interface QuoteContent {
  mainQuote: string;
  subQuote: string;
}

export interface LocationInfo {
  location: string;
  datetime: string;
}

export interface HeroSectionProps {
  navigationLinks: {
    leftLinks: Array<{ href: string; label: string }>;
    rightLink?: {
      href: string;
      label: string;
      onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    };
  };
  quoteContent: QuoteContent;
  locationInfo: LocationInfo;
  onScroll: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
