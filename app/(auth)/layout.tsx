import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "../globals.css";

export const metadata = {
  title: "Auth",
  description: "Next 14 Social Media App",
};

interface RootLayoutprops {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutprops) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-neutral-800`}>
          <div className="flex items-center text-center w-full h-full justify-center min-h-screen">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
