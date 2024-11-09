import { StaticImageData } from "next/image";

export interface HeaderProps {
  title: string;
  subtitle: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
}

export interface FeaturesProps {
  features: Feature[];
}

interface Image {
  src: StaticImageData;
  alt: string;
}

export interface CarouselProps {
  images: Image[];
}

interface Step {
  title: string;
  description: string;
}

export interface StepsProps {
  title: string;
  description: string;
  image?: {
    src: StaticImageData;
    alt: string;
  };
  steps: Step[];
}

interface FAQItem {
  title: string;
  content: string;
}

export interface FaqProps {
  faqs: FAQItem[];
}

export interface BannerProps {
  title: string;
  description: string;
  href: string;
}
export interface DescriptionProps {
  title: string;
  content: string;
}
