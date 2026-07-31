export type CmsTab =
  | 'Hero Banner'
  | 'Programs'
  | 'Testimonials'
  | 'About & Advantages'
  | 'Footer & Contact';

export type DevicePreviewMode = 'desktop' | 'tablet' | 'mobile';

export interface HeroSectionContent {
  taglineBadge: string;
  headline: string;
  subHeadline: string;
  ctaLabel: string;
  ctaRedirectUrl: string;
  ctaSecondaryLabel: string;
  ctaSecondaryUrl: string;
  assetFileName: string;
  assetHint: string;
  assetMediaUrl: string;
  isVisible: boolean;
}

export interface ProgramCmsItem {
  id: string;
  category: 'sd' | 'smp' | 'sma' | 'utbk';
  title: string;
  description: string;
  priceFormatted: string;
  iconName: string;
  targetAge: string;
  isActive: boolean;
  sortOrder: number;
}

export interface TestimonialRosterItem {
  id: string;
  order: number;
  studentName: string;
  studentClass: string;
  avatarInitials: string;
  targetPtnPassed: string;
  contentSnippet: string;
  avatarUrl?: string;
  isActive: boolean;
}

export interface HighlightMetric {
  icon: string;
  number: string;
  label: string;
}

export interface AboutCmsContent {
  title: string;
  subtitle: string;
  descriptionParagraph1: string;
  descriptionParagraph2: string;
  visionText: string;
  missions: string[];
  highlights: HighlightMetric[];
}

export interface AdvantageCmsItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  sortOrder: number;
}

export interface FooterCmsContent {
  aboutText: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
}

export interface FullLandingPageData {
  hero: HeroSectionContent;
  programs: ProgramCmsItem[];
  testimonials: TestimonialRosterItem[];
  about: AboutCmsContent;
  advantages: AdvantageCmsItem[];
  footer: FooterCmsContent;
}
