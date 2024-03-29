import { ReactChild, ReactChildren } from "react";

interface AnchorProps {
  children: ReactChild | ReactChildren,
  href: string,
}

export default function Anchor({ children, href }: AnchorProps) {
  return (
    <a href={href} className="border-primary border-2 hover:bg-primary hover:text-white border px-10 py-2 inline-block mt-5 active:translate-y-1">{children}</a>
  )
}
