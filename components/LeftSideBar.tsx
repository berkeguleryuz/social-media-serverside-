"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignInWithMetamaskButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ThemeSwitcher";
import { LogOutIcon } from "lucide-react";

function LeftSideBar() {
  return (
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden custom-scrollbar">
      <Link href={"/"} className="flex items-center justify-center">
        <Image src={"/logor.png"} alt="logo" width={200} height={200} />
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center ">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <p className="text-sm font-bold">Berke G</p>
        </div>
        <div className="flex  justify-between">
          <div className="flex flex-col items-center">
            <p className="text-md font-bold">1</p>
            <p className="text-sm font-semibold">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-md font-bold">1</p>
            <p className="text-sm font-semibold">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-md font-bold">1</p>
            <p className="text-sm font-semibold">Following</p>
          </div>
        </div>

        <Separator />

        <Menu />

        <Separator />

        <div className="flex flex-row gap-6 items-center justify-between ">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
