import * as React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// Vector peacock logo inspired by the uploaded mark
// Clean, responsive, and gradient-filled
const Logo: React.FC<LogoProps> = ({ className, ...props }) => (
  <svg
    viewBox="0 0 128 128"
    role="img"
    aria-labelledby="logoTitle"
    className={className}
    {...props}
  >
    <title id="logoTitle">Senthur Chits Logo</title>
    <defs>
      <linearGradient id="peacockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1b4fb1" />
        <stop offset="50%" stopColor="#0fb6c9" />
        <stop offset="100%" stopColor="#8be04e" />
      </linearGradient>
    </defs>

    {/* Stylized peacock body */}
    <path
      d="M78 18c-10 6-12 20-6 30 6 10 4 20-6 28-10 8-27 10-36-1 2 18 22 30 39 28 20-2 35-18 35-36 0-12-6-22-16-28-7-4-10-16-10-21z"
      fill="url(#peacockGradient)"
    />

    {/* Wings */}
    <path d="M24 68c10-10 29-13 40-5-14 2-24 9-32 18-3 3-8-4-8-13z" fill="url(#peacockGradient)" />
    <path d="M28 52c12-9 30-9 40 0-14 0-24 4-33 11-3 2-7-4-7-11z" fill="url(#peacockGradient)" />

    {/* Head and crown */}
    <circle cx="86" cy="28" r="7" fill="#163f87" />
    <circle cx="88.5" cy="26.5" r="1.5" fill="#fff" />
    <path d="M90 17l3 6M86 16l2 6M82 18l2 6" stroke="#163f87" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default Logo;
