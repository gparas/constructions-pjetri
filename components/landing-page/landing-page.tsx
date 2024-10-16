import dynamic from "next/dynamic";

import {
  HeaderProps,
  FeaturesProps,
  CarouselProps,
  StepsProps,
  FaqProps,
  BannerProps,
} from "./types";

interface Props {
  header?: HeaderProps;
  features?: FeaturesProps;
  carousel?: CarouselProps;
  steps?: StepsProps;
  faq?: FaqProps;
  banner?: BannerProps;
}

const componentMap = {
  header: dynamic(() => import("./header")),
  features: dynamic(() => import("./features")),
  carousel: dynamic(() => import("./carousel")),
  steps: dynamic(() => import("./steps")),
  faq: dynamic(() => import("./faq")),
  banner: dynamic(() => import("./banner")),
};

const LandingPage = (props: Props) =>
  Object.entries(props).map(([key, value]) => {
    if (!key) return null;
    const Component = componentMap[key as keyof typeof componentMap];
    return <Component key={key} {...value} />;
  });

export default LandingPage;
