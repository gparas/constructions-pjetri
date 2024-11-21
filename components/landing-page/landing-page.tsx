import { ReactNode } from "react";
import dynamic from "next/dynamic";

import {
  HeaderProps,
  FeaturesProps,
  CarouselProps,
  StepsProps,
  FaqProps,
  BannerProps,
  DescriptionProps,
} from "./types";

interface Props {
  header?: HeaderProps;
  features?: FeaturesProps;
  carousel?: CarouselProps;
  steps?: StepsProps;
  description?: DescriptionProps;
  faq?: FaqProps;
  banner?: BannerProps;
  children?: ReactNode;
}

const componentMap = {
  header: dynamic(() => import("./header")),
  features: dynamic(() => import("./features")),
  carousel: dynamic(() => import("./carousel")),
  steps: dynamic(() => import("./steps")),
  faq: dynamic(() => import("./faq")),
  description: dynamic(() => import("./description")),
  banner: dynamic(() => import("./banner")),
};

const LandingPage = ({ children, ...props }: Props) => {
  return (
    <>
      {props.header && <componentMap.header {...props.header} />}
      {props.features && <componentMap.features {...props.features} />}
      {props.steps && <componentMap.steps {...props.steps} />}
      {props.description && <componentMap.description {...props.description} />}
      {props.carousel && <componentMap.carousel {...props.carousel} />}
      {props.faq && <componentMap.faq {...props.faq} />}
      {children}
      {props.banner && <componentMap.banner {...props.banner} />}
    </>
  );
};

export default LandingPage;
