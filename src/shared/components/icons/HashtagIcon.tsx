import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const HashtagIcon: React.FC<Props> = (props) => (
  <svg
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="currentColor"
    {...props}
  >
    <path
      d="M10 3L6 21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20.5 16H2.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M22 7H4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18 3L14 21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default HashtagIcon;
export { HashtagIcon };