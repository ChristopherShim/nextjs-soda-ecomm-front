import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SopopLogo from "@/assets/Sopop-logo.png";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Nav() {
  const {cartProducts} = useContext(CartContext)
  const router = useRouter();
  const { pathname } = router;

  const inactiveLink = "rounded-[50px] px-[15px] py-[9px] text-white";
  const activeLink = "rounded-[50px] px-[15px] py-[9px] bg-[#C6A1DC] text-black";
  return (
    <header className="relative justify-between flex mx-auto top-4 z-40 inset-x-0 items-center mb-10 md:max-w-[1500px] px-[1rem]">
      <Image
        src={SopopLogo}
        className="h-full w-[100px] object-contain"
      ></Image>
      <nav className="items-center border-solid border-2 border-[#777777] rounded-full p-[2px]">
        <ul className="flex gap-1">
          <li className="px-[4px] py-[10px]">
            <Link
              href="/"
              className={pathname === "/" ? activeLink : inactiveLink}
            >
              Home
            </Link>
          </li>
          <li className="px-[4px] py-[10px]">
            <Link
              href="/product"
              className={pathname.includes("/product") ? activeLink : inactiveLink}
            >
              Shop
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <Link href="/cart">Cart ({cartProducts.length})</Link>
      </div>
    </header>
  );
}
