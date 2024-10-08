import { SVGProps } from "react";

const TrophyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M 20.774 31.097 L 20.774 36.903 M 27.226 31.097 L 27.226 36.903 M 12.387 5.29 L 6.581 5.29 C 5.868 5.29 5.29 5.868 5.29 6.581 L 5.29 17.032 C 5.29 19.811 7.584 22.065 10.414 22.065 L 12.387 22.065 M 35.613 5.29 L 41.419 5.29 C 42.132 5.29 42.71 5.868 42.71 6.581 L 42.71 17.032 C 42.71 19.618 40.723 21.749 38.167 22.032 M 24 44 L 35.613 44 L 31.867 38.649 C 31.384 37.959 30.595 37.548 29.753 37.548 L 24 37.548 L 18.247 37.548 C 17.405 37.548 16.615 37.959 16.133 38.649 L 12.387 44 L 24 44 Z M 24 4 L 35.613 4 L 35.613 19.876 C 35.613 26.073 30.414 31.097 24 31.097 C 17.586 31.097 12.387 26.073 12.387 19.876 L 12.387 4 L 14.71 4 L 24 4 Z M 15.226 40.129 L 29.161 40.129 M 23.998 9.161 L 26.395 13.836 L 31.742 14.583 L 27.871 18.22 L 28.787 23.355 L 23.998 20.931 L 19.213 23.355 L 20.127 18.22 L 16.258 14.583 L 21.605 13.836 L 23.998 9.161 Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);
export default TrophyIcon;
