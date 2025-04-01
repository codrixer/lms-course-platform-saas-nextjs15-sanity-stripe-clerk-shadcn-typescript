import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SanityLive } from "@/sanity/lib/live";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "DevTube – Build & Deploy Next.js/React Projects from YouTube Tutorials",
  description: "Clone, customize, and deploy real projects from top Next.js and React YouTube tutorials. Every project includes the full source code, step-by-step setup guide, and one-click Vercel deployment. Learn by building—no more missing code or broken setups!",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </ThemeProvider>

      <SanityLive />
    </ClerkProvider>
  );
}
