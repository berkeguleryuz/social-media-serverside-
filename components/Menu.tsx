"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

function Menu() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            href={link.route}
            key={link.label}
            className={`flex gap-4 justify-start rounded-lg py-2 px-4 ${
              isActive && "bg-lime-400"
            }`}>
            {link.icon}
            <p className="text-sm text-center flex items-center self-ceter">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Menu;
