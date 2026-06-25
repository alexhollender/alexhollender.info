import "../../styles/globals.css";
import Header from "@/components/header/Header";
// import DarkModeToggle from '@/components/darkModeToggle/DarkModeToggle'
import { xanhMono, generalSans, tobias } from "@/utils/fonts";
import type { ReactNode } from "react";

export const metadata = {
  title: "Alex Hollender — Product Design",
  description: "Alex Hollender's design portfolio",
  metadataBase: new URL("https://alexhollender.info"),
  openGraph: {
    title: "Alex Hollender — Product Design",
    description: "Web design & development stuff",
    author: "Alex Hollender",
    url: "https://alexhollender.info",
    siteName: "Alex Hollender's portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${tobias.variable} ${xanhMono.variable}`}
    >
      <body>
        <div className="px-[var(--margin-side)] pb-[var(--margin-bottom)] pt-[var(--margin-top)]">
          <Header />
          {children}
        </div>
        {/* <DarkModeToggle /> */}
      </body>
    </html>
  );
}
