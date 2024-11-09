import { SVGProps } from "react";

const CheckMarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M 24 4 C 31.741 9.16 44 9.806 44 9.806 L 44 15.999 C 44 24 41.969 35.611 24 44 C 6.031 35.611 4 24 4 15.999 L 4 9.806 C 4 9.806 16.259 9.16 24 4 Z M 38.884 11.816 C 34.774 11.169 28.857 9.813 24 7.031 C 18.015 10.459 10.421 11.722 6.581 12.163 L 6.581 15.999 C 6.581 30.45 15.658 37.071 23.997 41.139 C 39.408 33.548 41.419 23.745 41.419 15.999 L 41.419 12.163 M 29.806 16.903 L 22.064 25.935 L 18.193 22.064 L 15.613 24.645 L 22.064 31.097 L 32.387 19.484 L 29.806 16.903 Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);
export default CheckMarkIcon;
