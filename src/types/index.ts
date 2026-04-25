export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  label: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  startYear: string;
  endYear: string;
  logo: string;
}

export interface Project {
  title: string;
  date: string;
  coverImage: string;
  href: string;
}

export interface BlogPost {
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  slug: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface StackItem {
  name: string;
  description: string;
  href: string;
}

export interface StackCategory {
  title: string;
  items: StackItem[];
}

export interface SpotifyTrack {
  title: string;
  artist: string;
  albumArt: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  isExternal?: boolean;
}

export interface ClientLogo {
  name: string;
  logo: string;
}
