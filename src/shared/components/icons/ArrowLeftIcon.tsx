import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const ArrowLeftIcon: React.FC<Props> = (props) => (
    <svg
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
        {...props}
    >
        <path
        d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
    </svg>
);

export default ArrowLeftIcon;
export { ArrowLeftIcon };
