import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../index.css";
import Providers from "./providers";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samarpan Hospital - Kidney Hospital",
  description: "Samarpan Hospital Kidney Hospital Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
