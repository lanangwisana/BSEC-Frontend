export type CmsTab =
  | 'Hero Banner'
  | 'Programs'
  | 'Testimonials'
  | 'Articles'
  | 'FAQ';

export type DevicePreviewMode = 'desktop' | 'tablet' | 'mobile';

export interface HeroSectionContent {
  headline: string;
  subHeadline: string;
  ctaLabel: string;
  ctaRedirectUrl: string;
  assetFileName: string;
  assetHint: string;
  isVisible: boolean;
}

export interface TestimonialRosterItem {
  id: string;
  order: number;
  studentName: string;
  studentClass: string;
  avatarInitials: string;
  targetPtnPassed: string;
  contentSnippet: string;
  isActive: boolean;
}
