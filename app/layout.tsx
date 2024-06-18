import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FullscreenWrapper from "@/components/Utils/FullscreenWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeLua Jóias",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FullscreenWrapper>{children}</FullscreenWrapper>
      </body>
    </html>
  );
}
