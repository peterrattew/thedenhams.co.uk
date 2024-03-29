import { ReactChild, ReactChildren } from "react";

interface PageTitleProps {
  children: ReactChild | ReactChildren,
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-xl mb-7 mt-2 font-bold text-center md:text-2xl md:mb-10 md:mt-5">{children}</h1>
  );
}
