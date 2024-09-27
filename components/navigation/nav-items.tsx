import Link from "next/link";
import { NAVIGATION_ITEMS } from "./constants";

const NavItems = () => {
  return NAVIGATION_ITEMS.map((item) => (
    <Link key={item.href} href={item.href} className="p-2 font-semibold">
      {item.label}
    </Link>
  ));
};

export default NavItems;
