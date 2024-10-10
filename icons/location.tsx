import { SVGProps } from "react";

const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M24 37.548 34.612 21.97a11.81 11.81 0 0 0-1.936-14.488C30.295 5.155 27.149 3.999 24 4c-3.149-.001-6.295 1.155-8.676 3.482a11.808 11.808 0 0 0-1.936 14.488L24 37.548m7.097-21.29a7.098 7.098 0 1 1-14.195-.001 7.098 7.098 0 0 1 14.195.001Zm0 15.484h5.806L44 44H4l7.097-12.258h5.806"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.75}
    />
  </svg>
);
export default LocationIcon;
