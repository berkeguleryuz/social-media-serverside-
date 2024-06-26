"use client";

import React from "react";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import { pageTitles } from "@/constants";

function MainContainer({ children }: { children: React.ReactNode }) {
  const currentPath = usePathname();
  const regex = /^\/([^\/]+)/;
  const matchResult = currentPath.match(regex);
  const firstPath = matchResult ? matchResult[0] : currentPath;

  const title = pageTitles.find((page) => page.url === firstPath)?.title || "";

  return (
    <section className="flex flex-col flex-1 max-w-6xl px-4 md:px-10 lg:px-4 xl:px-20">
      <Nav />
      <div className="mt-6 mb-20">
        <h1 className="mb-5 text-2xl font-bold max-sm:text-md max-sm:font-semibold">
          {title}
        </h1>
        <div className="h-screen overflow-y-scroll custom-scrollbar">
          {children}
        </div>
      </div>
    </section>
  );
}

export default MainContainer;
