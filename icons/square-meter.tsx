import { SVGProps } from "react";

const SquareMeterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M 3.997 6.581 L 6.578 4 L 9.158 6.581 M 3.997 32.386 L 6.578 34.966 L 9.158 32.386 M 6.583 4.014 L 6.58 34.962 M 15.609 44 L 13.028 41.418 L 15.609 38.837 M 41.414 43.999 L 43.996 41.418 L 41.414 38.836 M 13.053 41.405 L 44.021 41.404 M 43.996 34.968 L 13.029 34.968 L 13.029 4.001 L 43.996 4.001 L 43.996 34.968 Z M 34.963 13.357 C 34.963 12.466 35.685 11.744 36.576 11.744 C 37.467 11.744 38.189 12.466 38.189 13.357 L 38.189 13.68 C 38.189 14.323 36.899 15.612 36.253 16.259 L 34.317 18.194 L 38.189 18.194 M 25.286 21.419 C 25.286 19.637 23.842 18.194 22.06 18.194 C 20.278 18.194 18.834 19.637 18.834 21.419 L 18.834 27.227 M 31.737 27.227 L 31.737 21.419 C 31.737 19.639 30.295 18.194 28.513 18.194 C 26.731 18.194 25.285 19.639 25.285 21.419 L 25.285 27.227 M 18.83 18.158 L 18.825 21.397"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);
export default SquareMeterIcon;
