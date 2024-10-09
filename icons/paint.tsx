import { SVGProps } from "react";

const PaintIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="currentColor" {...props}>
    <path d="M 11.452 4.076 C 10.689 4.226 9.788 4.886 9.402 5.576 C 9.01 6.276 8.999 6.413 8.999 10.274 C 8.999 13.421 9.015 13.93 9.128 14.277 C 9.406 15.122 10.018 15.815 10.821 16.196 L 11.325 16.439 L 36.683 16.439 L 37.187 16.196 C 37.976 15.818 38.583 15.142 38.874 14.317 C 38.976 14.017 39.002 13.405 39.028 10.654 C 39.046 8.726 39.028 7.123 38.983 6.803 C 38.788 5.394 37.81 4.321 36.495 4.071 C 35.98 3.973 11.949 3.978 11.452 4.076 M 36.672 5.421 C 36.837 5.502 37.089 5.69 37.232 5.837 C 37.739 6.358 37.738 6.348 37.713 10.357 L 37.691 13.97 L 37.457 14.349 C 37.311 14.584 37.078 14.818 36.842 14.963 L 36.463 15.198 L 11.545 15.198 L 11.166 14.963 C 10.919 14.806 10.709 14.596 10.552 14.349 L 10.317 13.97 L 10.294 10.434 C 10.281 8.491 10.291 6.791 10.315 6.657 C 10.414 6.115 11.014 5.493 11.604 5.322 C 11.773 5.274 16.272 5.25 24.12 5.259 C 36.031 5.272 36.382 5.276 36.672 5.421 M 6.894 7.171 C 6.485 7.335 6.479 7.386 6.479 10.258 L 6.479 12.922 L 6.705 13.149 C 6.985 13.429 7.272 13.441 7.529 13.185 L 7.719 12.994 L 7.719 10.283 C 7.719 8.792 7.698 7.516 7.671 7.447 C 7.625 7.326 7.25 7.089 7.122 7.099 C 7.044 7.115 6.968 7.139 6.894 7.171 M 40.638 7.181 C 40.289 7.377 40.289 7.377 40.289 10.253 L 40.289 12.994 L 40.479 13.185 C 40.736 13.441 41.024 13.429 41.303 13.149 L 41.53 12.922 L 41.53 10.894 L 41.948 10.894 C 42.243 10.894 42.419 10.938 42.549 11.042 L 42.732 11.191 L 42.732 16.746 L 42.422 16.915 C 42.251 17.009 38.395 18.626 33.853 20.51 C 30.963 21.704 28.076 22.905 25.193 24.115 C 24.431 24.459 23.751 25.254 23.507 26.088 C 23.438 26.324 23.384 26.793 23.384 27.155 L 23.384 27.799 L 21.385 27.799 C 19.219 27.799 19.112 27.819 19.009 28.225 C 18.899 28.667 19.325 29.04 19.942 29.04 L 20.2 29.04 L 20.221 35.767 L 20.243 42.494 L 20.458 42.932 C 20.687 43.399 21.055 43.736 21.516 43.9 C 21.717 43.973 22.402 44 24.004 44 C 25.606 44 26.291 43.973 26.492 43.9 C 26.959 43.73 27.34 43.382 27.55 42.932 L 27.765 42.494 L 27.787 35.767 L 27.809 29.04 L 28.08 29.04 C 28.757 29.04 29.174 28.584 28.929 28.112 C 28.868 27.993 28.762 27.874 28.692 27.848 C 28.623 27.82 27.68 27.799 26.595 27.799 L 24.625 27.799 L 24.625 27.29 C 24.625 26.509 24.75 26.135 25.159 25.699 L 25.516 25.318 L 34.046 21.782 C 38.738 19.838 42.792 18.129 43.055 17.983 C 43.606 17.677 43.909 17.354 43.973 16.999 C 43.999 16.861 44.008 15.437 43.996 13.835 L 43.973 10.92 L 43.738 10.541 C 43.38 9.962 42.898 9.699 42.137 9.665 L 41.53 9.637 L 41.53 8.602 C 41.53 7.639 41.518 7.555 41.355 7.372 C 41.148 7.141 40.852 7.062 40.638 7.181 M 4.158 10.478 C 3.997 10.683 3.997 10.686 3.998 20.385 C 3.999 30.765 3.984 30.349 4.377 31.119 C 4.611 31.577 5.28 32.212 5.761 32.432 C 7.515 33.235 9.381 32.441 10.097 30.588 C 10.214 30.284 10.236 29.794 10.273 26.558 C 10.315 23.032 10.324 22.866 10.472 22.667 C 10.736 22.309 11.168 22.116 11.61 22.157 C 12.085 22.203 12.359 22.393 12.585 22.838 C 12.749 23.159 12.76 23.274 12.76 24.744 C 12.76 26.303 12.761 26.309 12.975 26.72 C 13.118 26.992 13.321 27.226 13.574 27.408 C 13.94 27.671 13.984 27.683 14.618 27.683 C 15.226 27.683 15.308 27.663 15.626 27.449 C 15.817 27.32 16.079 27.044 16.208 26.835 C 16.442 26.456 16.443 26.452 16.491 24.975 C 16.517 24.161 16.565 23.426 16.6 23.34 C 16.922 22.539 17.693 22.256 19.888 22.136 C 21.742 22.035 22.616 21.783 23.315 21.151 C 23.86 20.66 23.957 20.382 23.99 19.223 C 24.018 18.241 24.013 18.202 23.83 17.989 C 23.591 17.712 23.231 17.694 22.963 17.945 C 22.79 18.109 22.774 18.186 22.751 19.038 C 22.727 19.891 22.711 19.969 22.531 20.162 C 22.102 20.62 21.387 20.805 19.671 20.901 C 17.191 21.04 16.108 21.501 15.536 22.662 L 15.28 23.181 L 15.241 24.684 C 15.204 26.145 15.198 26.189 15.019 26.333 C 14.775 26.539 14.413 26.521 14.191 26.291 C 14.002 26.101 14.001 26.091 14 24.565 C 14 23.453 13.969 22.928 13.887 22.662 C 13.643 21.884 13.044 21.269 12.272 21.006 C 11.751 20.834 10.906 20.888 10.433 21.126 C 9.907 21.39 9.373 21.951 9.174 22.446 C 9.007 22.862 9.001 22.984 8.962 26.558 C 8.916 30.707 8.951 30.467 8.297 31.044 C 7.425 31.811 6.15 31.588 5.511 30.556 L 5.277 30.177 L 5.238 20.389 C 5.2 10.901 5.194 10.595 5.052 10.436 C 4.83 10.192 4.366 10.213 4.158 10.478 M 26.486 35.713 L 26.486 42.385 L 26.296 42.576 L 26.105 42.766 L 21.904 42.766 L 21.713 42.576 L 21.523 42.385 L 21.523 31.521 L 23.116 31.521 C 24.363 31.521 24.757 31.497 24.929 31.408 C 25.301 31.215 25.36 30.777 25.055 30.471 C 24.864 30.281 24.864 30.281 23.194 30.281 L 21.523 30.281 L 21.523 29.04 L 26.486 29.04 L 26.486 35.713" />
  </svg>
);
export default PaintIcon;
