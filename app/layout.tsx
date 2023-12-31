import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlitZ",
  description: "My Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        <body className={cn("flex flex-col justify-center items-center px-6", inter.className)}>
          <main className="flex flex-col h-screen py-9 gap-y-12 max-w-xl">{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
