export type CmsTab =
  | 'Hero Banner'
  | 'Programs'
  | 'Testimonials'
  | 'About & Advantages'
  | 'Lead Capture CTA'
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
  assetMediaPosition?: string;
  floatingBadgeText?: string;
  floatingBadgeSubtext?: string;
  isVisible: boolean;
}

export interface ProgramCategory {
  id: string;
  name: string;
  sortOrder: number;
}

export interface ProgramCmsItem {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  priceFormatted: string;
  iconName: string;
  targetAge?: string;
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
  statCard1Number?: string;
  statCard1Label?: string;
  statCard2Number?: string;
  statCard2Label?: string;
  statCard3Number?: string;
  statCard3Label?: string;
  statCard4Number?: string;
  statCard4Label?: string;
}

export interface AdvantageCmsItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  sortOrder: number;
}

export interface LeadCaptureCmsContent {
  title: string;
  subtitle: string;
  checklistItems: string[];
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
  programCategories: ProgramCategory[];
  programs: ProgramCmsItem[];
  testimonials: TestimonialRosterItem[];
  about: AboutCmsContent;
  advantages: AdvantageCmsItem[];
  leadCapture?: LeadCaptureCmsContent;
  footer: FooterCmsContent;
  advantagesTitle?: string;
  advantagesSubtitle?: string;
  programsTitle?: string;
  programsSubtitle?: string;
  testimonialsTitle?: string;
}
