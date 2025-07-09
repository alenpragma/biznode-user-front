import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeProvider from "@/components/provider/HomeProvider";
import { Suspense } from "react";
import ProgressBar from "@/lib/progress/Progressbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biz Node",
  description: "Think Big, BIZ Node Bigger",
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ProgressBar />
        </Suspense>
        <HomeProvider>{children}</HomeProvider>
      </body>
    </html>
  );
}
