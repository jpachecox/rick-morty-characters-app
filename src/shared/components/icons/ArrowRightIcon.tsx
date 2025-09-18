import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const ArrowRightIcon: React.FC<Props> = (props) => (
  <svg
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#000000"
    {...props}
  >
    <path
      d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRightIcon;
export { ArrowRightIcon };