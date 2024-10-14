"use client";

import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/lib/constants";

interface Props {
  onClick?: () => void;
}

const NavItems = ({ onClick }: Props) => {
  return NAVIGATION_ITEMS.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="p-2 font-semibold"
      onClick={onClick}
    >
      {item.label}
    </Link>
  ));
};

export default NavItems;
