export interface NavLink {
  label: string;
  href: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface NostosPillar {
  step: string;
  title: string;
  description: string;
  tag: string;
}

export interface GroupSpace {
  badge: string;
  title: string;
  description: string;
  features: string[];
  buttonLabel: string;
  buttonHref: string;
}

export interface ServiceSublist {
  title: string;
  items: {
    icon: string;
    label: string;
  }[];
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  sublist: ServiceSublist;
  buttonLabel: string;
  buttonHref: string;
}

export interface ModalityItem {
  icon: string;
  title: string;
  description: string;
}

export interface CvBadge {
  label: string;
}

export interface AboutInfo {
  name: string;
  role: string;
  shortBio: string;
  avatarIcon: string;
  photo: {
    src: string;
    alt: string;
  };
  cvBadges: CvBadge[];
  contentBadge: string;
  contentTitle: string;
  quote: string;
  paragraphs: string[];
  buttonLabel: string;
  buttonHref: string;
}

export interface ConstellationNode {
  id: number;
  title: string;
  category: string;
  desc: string;
  link: string;
  position: [number, number, number];
  size: number;
}

export interface ContactLink {
  icon: string;
  label: string;
  href: string;
  static?: boolean;
}
