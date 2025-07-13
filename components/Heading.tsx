import { JSX } from "react";

interface HeadingProps {
  children: React.ReactNode;
  level?: number;
}

export default function Heading({ children, level = 1 }: HeadingProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  // Define explicit class mappings so Tailwind can detect them
  const headingStyles = {
    1: "text-4xl font-bold mb-4",
    2: "text-3xl font-bold mb-4",
    3: "text-2xl font-bold mb-4",
    4: "text-xl font-bold mb-4",
    5: "text-lg font-bold mb-4",
    6: "text-base font-bold mb-4",
  };

  const headingStyle = headingStyles[level as keyof typeof headingStyles] || headingStyles[1];

  return (
    <HeadingTag className={headingStyle}>{children}</HeadingTag>
  );
}
