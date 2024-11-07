"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedOut } from "@clerk/clerk-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const MobileNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="mobile-nav">
      <Sheet>
        <header className="shadow-md flex items-center py-4 px-2 justify-between w-screen">
          <Link className="text-xl font-semibold text-purple-600" href="/">
            ✨MAGNIFY
          </Link>
          <div className="flex items-center gap-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="bars"
                width={24}
                height={24}
              />
            </SheetTrigger>
          </div>
        </header>
        <SheetContent className="bg-white text-black">
          {/* Getting errors if removed Start*/}
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          {/* Getting errors if removed End*/}
          <nav className="flex flex-col gap-4">
            <Link className="text-xl font-semibold text-purple-600" href="/">
              ✨MAGNIFY
            </Link>
            <SignedIn>
              <ul>
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <SheetClose asChild key={link.route}>
                      <li
                        onClick={() => router.push(link.route)}
                        key={link.route}
                        className={`navLink ${
                          isActive ? "active-navLink" : "unactive-navLink"
                        }`}
                      >
                        <Image
                          className={`${isActive && "brightness-200"}`}
                          src={link.icon}
                          alt={link.label}
                          width={24}
                          height={24}
                        />
                        {link.label}
                      </li>
                    </SheetClose>
                  );
                })}
              </ul>
            </SignedIn>

            <SignedOut>
              <button
                onClick={() => router.push("/sign-in")}
                className="hover:bg-purple-700 py-[10px] w-full text-sm font-semibold bg-purple-600 text-white rounded-full "
              >
                Sign in
              </button>
            </SignedOut>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
