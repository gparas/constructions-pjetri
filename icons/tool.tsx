import { SVGProps } from "react";

const ToolIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="currentColor" {...props}>
    <path d="M 9.011 10.803 C 9.55 10.799 10.006 10.906 10.475 11.109 C 10.942 11.31 11.315 11.568 11.67 11.926 C 12.024 12.284 12.279 12.663 12.476 13.134 C 12.674 13.606 12.777 14.064 12.771 14.605 L 12.771 15.231 C 12.771 15.552 13.031 15.813 13.353 15.813 L 14.115 15.813 L 14.115 24.044 L 13.353 24.044 C 13.067 24.044 12.823 24.252 12.778 24.535 L 10.652 37.857 C 10.529 38.639 10.579 39.468 10.78 40.173 C 10.982 40.88 11.364 41.584 11.83 42.134 C 12.296 42.684 12.927 43.176 13.591 43.491 C 14.253 43.806 15.063 43.991 15.855 43.999 L 15.862 43.999 C 16.654 43.991 17.464 43.806 18.126 43.491 C 18.79 43.176 19.421 42.684 19.887 42.134 C 20.353 41.584 20.734 40.88 20.937 40.173 C 21.138 39.468 21.188 38.644 21.066 37.86 L 18.939 24.535 C 18.894 24.252 18.65 24.044 18.364 24.044 L 17.786 24.044 L 17.786 15.813 L 18.364 15.813 C 18.685 15.813 18.946 15.552 18.946 15.231 L 18.946 12.099 C 18.94 11.9 18.974 11.769 19.048 11.594 C 19.121 11.422 19.195 11.313 19.326 11.182 C 19.457 11.051 19.566 10.978 19.739 10.905 C 19.912 10.831 20.044 10.803 20.242 10.803 C 20.441 10.803 20.573 10.831 20.747 10.905 C 20.92 10.978 21.029 11.051 21.16 11.182 C 21.291 11.313 21.365 11.422 21.438 11.594 C 21.511 11.769 21.545 11.9 21.539 12.099 L 21.539 12.725 C 21.539 13.047 21.801 13.308 22.122 13.308 L 25.88 13.308 C 26.114 13.302 26.394 13.248 26.595 13.164 C 26.797 13.078 27.026 12.922 27.178 12.771 C 27.33 12.618 27.485 12.39 27.57 12.187 C 27.656 11.986 27.709 11.707 27.715 11.473 L 27.715 5.836 C 27.709 5.602 27.656 5.321 27.57 5.121 C 27.485 4.918 27.33 4.689 27.178 4.538 C 27.026 4.385 26.797 4.23 26.595 4.145 C 26.394 4.06 26.114 4.007 25.88 4 L 22.122 4 C 21.801 4 21.539 4.261 21.539 4.583 L 21.539 5.21 C 21.545 5.409 21.511 5.54 21.438 5.714 C 21.365 5.886 21.291 5.995 21.16 6.126 C 21.029 6.257 20.92 6.331 20.747 6.404 C 20.573 6.478 20.441 6.506 20.242 6.506 C 20.044 6.506 19.912 6.478 19.739 6.404 C 19.566 6.331 19.457 6.257 19.326 6.126 C 19.195 5.995 19.121 5.886 19.048 5.714 C 18.974 5.54 18.94 5.409 18.946 5.21 L 18.946 4.583 C 18.946 4.261 18.685 4 18.364 4 L 12.1 4 C 11.002 4.007 9.898 4.235 8.948 4.637 C 7.996 5.04 7.092 5.653 6.374 6.373 C 5.654 7.091 5.041 7.995 4.638 8.947 C 4.236 9.897 4.008 11.001 4.001 12.099 C 4.001 12.356 4.17 12.582 4.416 12.657 C 4.661 12.731 4.926 12.636 5.069 12.422 C 5.069 12.422 5.317 12.048 5.934 11.638 C 6.264 11.419 6.645 11.222 7.159 11.062 C 7.686 10.898 8.27 10.794 9.011 10.803 Z M 15.28 15.813 L 16.621 15.813 L 16.621 24.044 L 15.28 24.044 L 15.28 15.813 Z M 6.814 9.949 C 6.213 10.137 5.692 10.404 5.312 10.652 C 5.404 10.223 5.538 9.81 5.711 9.401 C 6.069 8.553 6.555 7.838 7.197 7.196 C 7.839 6.554 8.554 6.068 9.402 5.71 C 10.249 5.351 11.123 5.159 12.1 5.165 L 17.781 5.165 L 17.781 5.21 C 17.788 5.529 17.858 5.892 17.975 6.168 C 18.092 6.445 18.294 6.742 18.502 6.95 C 18.71 7.158 19.008 7.36 19.284 7.478 C 19.56 7.594 19.923 7.671 20.242 7.671 C 20.563 7.671 20.926 7.594 21.202 7.478 C 21.478 7.36 21.775 7.158 21.983 6.95 C 22.192 6.742 22.394 6.445 22.511 6.168 C 22.628 5.892 22.698 5.529 22.705 5.21 L 22.705 5.165 L 25.88 5.165 C 25.993 5.159 26.042 5.176 26.141 5.217 C 26.238 5.259 26.279 5.287 26.354 5.361 C 26.429 5.436 26.457 5.478 26.498 5.575 C 26.539 5.674 26.557 5.723 26.55 5.836 L 26.55 11.473 C 26.557 11.585 26.539 11.635 26.498 11.734 C 26.457 11.831 26.429 11.872 26.354 11.946 C 26.279 12.021 26.238 12.049 26.141 12.09 C 26.042 12.133 25.993 12.149 25.88 12.143 L 22.705 12.143 L 22.705 12.099 C 22.698 11.779 22.628 11.416 22.511 11.141 C 22.394 10.864 22.192 10.567 21.983 10.358 C 21.775 10.149 21.478 9.948 21.202 9.831 C 20.926 9.714 20.563 9.638 20.242 9.638 C 19.923 9.638 19.56 9.714 19.284 9.831 C 19.008 9.948 18.71 10.149 18.502 10.358 C 18.294 10.567 18.092 10.864 17.975 11.141 C 17.858 11.416 17.788 11.779 17.781 12.099 L 17.781 14.648 L 17.235 14.648 C 17.225 14.648 17.214 14.647 17.204 14.647 C 17.193 14.647 17.182 14.648 17.172 14.648 L 14.725 14.648 C 14.716 14.648 14.708 14.647 14.698 14.647 C 14.689 14.647 14.679 14.648 14.671 14.648 L 13.936 14.648 L 13.936 14.605 C 13.929 13.944 13.79 13.256 13.55 12.683 C 13.309 12.109 12.929 11.544 12.499 11.108 C 12.068 10.672 11.508 10.285 10.936 10.039 C 10.366 9.792 9.679 9.647 9.017 9.638 C 8.176 9.637 7.414 9.763 6.814 9.949 Z M 19.915 38.044 C 20.031 38.691 19.984 39.264 19.816 39.853 C 19.648 40.438 19.387 40.922 18.998 41.381 C 18.609 41.84 18.175 42.178 17.625 42.439 C 17.073 42.702 16.519 42.843 15.862 42.834 L 15.855 42.834 C 15.198 42.843 14.644 42.702 14.092 42.439 C 13.542 42.178 13.108 41.84 12.718 41.381 C 12.33 40.922 12.068 40.438 11.901 39.853 C 11.732 39.264 11.685 38.695 11.801 38.048 L 13.85 25.209 L 17.867 25.209 L 19.915 38.044 Z M 36.485 8.272 C 36.485 8.038 36.426 7.758 36.341 7.557 C 36.255 7.355 36.099 7.126 35.948 6.974 C 35.796 6.822 35.566 6.667 35.364 6.581 C 35.163 6.496 34.883 6.437 34.65 6.437 C 34.416 6.437 34.135 6.496 33.935 6.581 C 33.732 6.667 33.503 6.822 33.352 6.974 C 33.199 7.126 33.044 7.355 32.959 7.557 C 32.874 7.758 32.814 8.038 32.814 8.272 C 32.814 8.506 32.874 8.785 32.959 8.986 C 33.044 9.188 33.199 9.417 33.352 9.57 C 33.503 9.721 33.732 9.878 33.935 9.963 C 34.135 10.047 34.416 10.107 34.65 10.107 C 34.883 10.107 35.163 10.047 35.364 9.963 C 35.566 9.878 35.796 9.721 35.948 9.57 C 36.099 9.417 36.255 9.188 36.341 8.986 C 36.426 8.785 36.485 8.506 36.485 8.272 Z M 35.267 8.533 C 35.227 8.63 35.198 8.671 35.124 8.746 C 35.049 8.82 35.008 8.848 34.911 8.889 C 34.812 8.932 34.763 8.942 34.65 8.942 C 34.537 8.942 34.488 8.932 34.389 8.889 C 34.292 8.848 34.25 8.82 34.175 8.746 C 34.1 8.671 34.073 8.63 34.031 8.533 C 33.99 8.434 33.979 8.384 33.979 8.272 C 33.979 8.159 33.99 8.11 34.031 8.011 C 34.073 7.914 34.1 7.873 34.175 7.798 C 34.25 7.723 34.292 7.695 34.389 7.654 C 34.488 7.613 34.537 7.602 34.65 7.602 C 34.763 7.602 34.812 7.613 34.911 7.654 C 35.008 7.695 35.049 7.723 35.124 7.798 C 35.198 7.873 35.227 7.914 35.267 8.011 C 35.309 8.11 35.32 8.159 35.32 8.272 C 35.32 8.384 35.309 8.434 35.267 8.533 Z M 38.988 27.233 L 38.988 8.342 C 38.982 7.762 38.859 7.152 38.647 6.652 C 38.434 6.15 38.095 5.651 37.717 5.273 C 37.338 4.894 36.839 4.555 36.337 4.343 C 35.837 4.131 35.228 4.001 34.648 4.001 C 34.068 4.001 33.459 4.131 32.959 4.343 C 32.456 4.555 31.958 4.894 31.579 5.273 C 31.2 5.651 30.862 6.15 30.649 6.652 C 30.437 7.152 30.314 7.762 30.308 8.342 L 30.308 27.233 C 28.897 27.988 27.71 29.016 26.785 30.448 C 25.861 31.878 25.297 33.668 25.297 35.503 C 25.297 37.339 25.861 39.129 26.785 40.56 C 27.71 41.991 29.093 43.195 30.64 43.944 C 30.821 44.029 31.033 44.017 31.201 43.91 C 31.37 43.803 31.473 43.618 31.473 43.418 L 31.473 39.33 C 31.466 38.872 31.554 38.493 31.722 38.094 C 31.89 37.697 32.101 37.387 32.402 37.085 C 32.704 36.784 33.015 36.572 33.412 36.404 C 33.811 36.235 34.19 36.155 34.648 36.155 C 35.106 36.155 35.485 36.235 35.884 36.404 C 36.281 36.572 36.592 36.784 36.893 37.085 C 37.195 37.387 37.405 37.697 37.573 38.094 C 37.742 38.493 37.829 38.872 37.823 39.33 L 37.823 43.418 C 37.823 43.618 37.926 43.803 38.094 43.91 C 38.263 44.017 38.475 44.029 38.656 43.944 C 40.203 43.195 41.585 41.991 42.511 40.56 C 43.435 39.129 43.999 37.339 43.999 35.503 C 43.999 33.668 43.435 31.878 42.511 30.448 C 41.585 29.016 40.4 27.987 38.988 27.233 Z M 38.155 28.115 C 39.568 28.775 40.693 29.781 41.532 31.08 C 42.373 32.381 42.834 33.843 42.834 35.503 C 42.834 37.164 42.373 38.626 41.532 39.927 C 40.693 41.226 40.02 41.81 38.988 42.444 L 38.988 39.33 C 38.982 38.751 38.859 38.141 38.647 37.641 C 38.434 37.139 38.095 36.64 37.717 36.261 C 37.338 35.883 36.839 35.544 36.337 35.331 C 35.837 35.12 35.228 34.99 34.648 34.99 C 34.068 34.99 33.459 35.12 32.959 35.331 C 32.456 35.544 31.958 35.883 31.579 36.261 C 31.2 36.64 30.862 37.139 30.649 37.641 C 30.437 38.141 30.314 38.751 30.308 39.33 L 30.308 42.443 C 29.278 41.807 28.603 41.226 27.764 39.927 C 26.923 38.626 26.462 37.164 26.462 35.503 C 26.462 33.843 26.923 32.381 27.764 31.08 C 28.603 29.781 29.728 28.775 31.141 28.115 C 31.344 28.019 31.473 27.814 31.473 27.59 L 31.473 8.342 C 31.466 7.883 31.554 7.505 31.722 7.106 C 31.89 6.709 32.101 6.398 32.402 6.096 C 32.704 5.795 33.015 5.583 33.412 5.416 C 33.811 5.247 34.19 5.166 34.648 5.166 C 35.106 5.166 35.485 5.247 35.884 5.416 C 36.281 5.583 36.592 5.795 36.893 6.096 C 37.195 6.398 37.405 6.709 37.573 7.106 C 37.742 7.505 37.829 7.883 37.823 8.342 L 37.823 27.59 C 37.823 27.814 37.952 28.019 38.155 28.115 Z" />
  </svg>
);
export default ToolIcon;
