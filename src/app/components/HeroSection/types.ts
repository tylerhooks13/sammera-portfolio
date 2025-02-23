// components/HeroSection/types.ts

// Base types
export interface BaseLink {
  href: string;
  label: string;
}

export interface ClickableLink extends BaseLink {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Navigation types
export interface NavigationLinks {
  leftLinks: BaseLink[];
  rightLink?: ClickableLink;
}

// Content types
export interface QuoteContent {
  mainQuote: string;
  subQuote: string;
}

export interface ScrollOptions {
  text: string;
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Main component props
export interface HeroContent {
  navigationLinks: NavigationLinks;
  quoteContent: QuoteContent;
  scrollOptions: ScrollOptions;
}

export interface HeroSectionProps {
  content: HeroContent;
}
