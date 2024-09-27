import type { Metadata } from "next";
import "./globals.css";
import {Inter,IBM_Plex_Serif} from "next/font/google";


const inter= Inter({subsets:["latin"],variable:'--font-inter'});
const ibmPlexSerif=IBM_Plex_Serif({ subsets:['latin'], weight:['400','700'],variable:'--font-ibm-plex-serif'});

export const metadata: Metadata = {
  title: "Banking APP",
  description: "A mordern banking app for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
