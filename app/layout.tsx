import type { Metadata, Viewport } from "next";
import { Figtree, Newsreader } from "next/font/google";
import { ThemeProviderClient } from "@/components/theme-provider";
import { resumeData } from "@/data/resume";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${resumeData.personal.shortName} — ${resumeData.personal.credentials}`,
  description: resumeData.personal.summary,
};

export const viewport: Viewport = {
  themeColor: "#F7F3EE",
};

const themeColorScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light")return;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="dark"?"#1A1614":"#F7F3EE")}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${figtree.variable} ${newsreader.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeColorScript }} />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <ThemeProviderClient>{children}</ThemeProviderClient>
      </body>
    </html>
  );
}
