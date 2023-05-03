import { useRouter } from "next/router";
import Link from "next/link";
import React, { ReactNode } from "react";

interface NavItemProps {
  exact?: boolean;
  href: string;
  children: ReactNode;
}

export default function NavItem({ href, exact, children }: NavItemProps) {
  const router = useRouter();
  const active = exact
    ? router.pathname === href
    : router.pathname.startsWith(href);

  const content = (
    <>
      <span>{children}</span>
    </>
  );

  const Element = href.startsWith("#") ? 'a' : Link

  return  (
    <Element
      href={href}
      className="capitalize truncate font-semibold last:bg-primary-900 last:text-white last:py-2.5 last:px-10 last:rounded-[7px]"
    >
      {content}
    </Element>
  );
}
