import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alma",
  description: "Reimagining Immigration with Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      
      <body className={`${geistSans.variable} h-full w-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
