"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link className="text-2xl font-semibold text-purple-600" href="/">
          ✨MAGNIFY
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul>
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                return (
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
                );
              })}
            </ul>
            <ul>
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
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
                );
              })}
              <li className="p-3">
                <UserButton
                  appearance={{
                    variables: {
                      fontSize: "14px",
                      fontWeight: { medium: 600 },
                    },
                    elements: {
                      userButtonBox: {
                        flexDirection: "row-reverse",
                        gap: "2px",
                      },
                    },
                  }}
                  showName
                />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <button
              onClick={() => router.push("/sign-in")}
              className="hover:bg-purple-700 py-[10px] text-sm font-semibold bg-purple-600 text-white rounded-full "
            >
              Sign in
            </button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
