import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delhi Public School Pali District | Excellence in Education",
  description:
    "Delhi Public School Pali District, located in Sanpa, Pali, Rajasthan 306401 — nurturing future leaders through holistic education, modern campus facilities, and academic excellence under the CBSE curriculum.",
  keywords: [
    "DPS Pali",
    "Delhi Public School Pali",
    "CBSE school Pali",
    "best school in Pali Rajasthan",
    "DPS Pali District admissions",
  ],
  openGraph: {
    title: "Delhi Public School Pali District",
    description:
      "Nurturing future leaders through holistic education and academic excellence.",
    type: "website",
    locale: "en_IN",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-editorial-cream selection:bg-emerald-900/20">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
