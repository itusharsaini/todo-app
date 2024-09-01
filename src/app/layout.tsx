import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import ThemeProvider from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TuDo",
  description: "A todo application by Tushar Saini",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(raleway.className, "w-screen h-screen max-h-screen max-w-screen overflow-hidden")}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
