import type { Metadata } from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import AppContextProvider from "@/components/AppContext";


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
      <body className={` ${manrope.variable} font-sans bg-neutral-100 dark:bg-darkBg`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <AppContextProvider>

          {children}
          </AppContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
