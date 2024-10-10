import { SVGProps } from "react";

const WindowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M 44 44 L 4 44 L 4 4.001 L 44 4.001 L 44 44 Z M 21.42 40.776 L 7.226 40.776 L 7.226 7.227 L 21.42 7.227 L 21.42 40.776 Z M 26.581 18.195 L 26.581 7.227 L 40.775 7.227 L 40.775 40.776 L 26.581 40.776 L 26.581 29.808 M 12.388 9.806 L 9.808 12.387 M 16.259 9.806 L 9.808 16.258 M 24.001 23.355 L 24.001 21.419 C 24.001 21.063 24.29 20.774 24.646 20.774 L 25.936 20.774 C 26.293 20.774 26.582 21.063 26.582 21.419 L 26.582 25.935 C 26.582 26.648 26.004 27.226 25.291 27.226 C 24.578 27.226 24.001 26.648 24.001 25.935 M 23.997 4 L 24 21.421 M 24.001 25.935 L 24.001 44"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);
export default WindowIcon;
