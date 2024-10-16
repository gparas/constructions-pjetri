import dynamic from "next/dynamic";

import {
  CarouselProps,
  FaqProps,
  FeaturesProps,
  HeaderProps,
  StepsProps,
} from "./types";

interface Props {
  header?: HeaderProps;
  features?: FeaturesProps;
  carousel?: CarouselProps;
  steps?: StepsProps;
  faq?: FaqProps;
}

const componentMap = {
  header: dynamic(() => import("./header")),
  features: dynamic(() => import("./features")),
  carousel: dynamic(() => import("./carousel")),
  steps: dynamic(() => import("./steps")),
  faq: dynamic(() => import("./faq")),
};

const LandingPage = (props: Props) => {
  return Object.entries(props).map(([key, value]) => {
    const Component = componentMap[key as keyof typeof componentMap];
    if (!value) return null;
    return <Component key={key} {...value} />;
  });
};

export default LandingPage;
