import type { Metadata } from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const manrope = Manrope({
  subsets:['latin'],
  display: "swap", 
  variable: "--font--manrope"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${manrope.variable} font-sans  dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
