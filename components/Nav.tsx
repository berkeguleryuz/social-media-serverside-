"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Add } from "@mui/icons-material";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "./ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const [search, setSearch] = useState<any>("");
  const router = useRouter();
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search posts, people..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-neutral-800 py-3 px-5 rounded-lg focus:outline-none text-slate-100 text-xs font-semibold"
        />
        <Search
          className="absolute top-1 right-1 text-slate-100 cursor-pointer hover:text-lime-400"
          onClick={() => {}}
        />
      </div>
      <Button onClick={() => router.push("/create-post")}>
        <Add />
        Create A Post
      </Button>

      <div className="flex gap-3 items-center">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignOutButton>
          <div className="flex cursor-pointer items-center md:hidden">
            Logout
          </div>
        </SignOutButton>
        <ModeToggle />

        <Link href={"/"}>
          <Image
            src={"/mockprofile.png"}
            alt="profile"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
