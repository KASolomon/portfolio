import type { Metadata } from "next";
import {Manrope} from "next/font/google";
import {Dancing_Script} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import AppContextProvider from "@/components/AppContext";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio for Kusi-Appiah Solomon",
};

const manrope = Manrope({
  subsets:['latin'],
  display: "swap", 
  variable: "--font--manrope"
})
const dancing = Dancing_Script({
  subsets:['latin'],
  display: "swap", 
  variable: "--font--dancing"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/icon.svg" type="image/svg" />
      </Head>
      <body className={` ${manrope.variable} ${dancing.variable} font-sans w-full bg-neutral-100 dark:bg-darkBg`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <AppContextProvider>

          {children}
          </AppContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
