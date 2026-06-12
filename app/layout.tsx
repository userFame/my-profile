import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

/* ──────────────────────────────────────────────────────────────
   FONT COMBINATIONS — uncomment ONE pair (import + both consts)
   and comment out the active one to switch. The rest of the app
   only references --font-display and --font-body.
   ────────────────────────────────────────────────────────────── */

/* 1. Outfit + DM Sans — elegant & modern (ACTIVE) */
const displayFont = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

/* 2. Syne + Space Grotesk — sharp & editorial */
// import { Syne, Space_Grotesk } from "next/font/google";
// const displayFont = Syne({
//   variable: "--font-display",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });
// const bodyFont = Space_Grotesk({
//   variable: "--font-body",
//   subsets: ["latin"],
//   weight: ["300", "400", "500"],
// });

/* 3. Playfair Display + Inter — classic contrast, serif display */
// import { Playfair_Display, Inter } from "next/font/google";
// const displayFont = Playfair_Display({
//   variable: "--font-display",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });
// const bodyFont = Inter({
//   variable: "--font-body",
//   subsets: ["latin"],
//   weight: ["300", "400", "500"],
// });

/* 4. Cormorant Garamond + Nunito Sans — warm & humanist */
// import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
// const displayFont = Cormorant_Garamond({
//   variable: "--font-display",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });
// const bodyFont = Nunito_Sans({
//   variable: "--font-body",
//   subsets: ["latin"],
//   weight: ["300", "400", "600"],
// });

/* 5. Plus Jakarta Sans + Manrope — modern minimal */
// import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
// const displayFont = Plus_Jakarta_Sans({
//   variable: "--font-display",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800"],
// });
// const bodyFont = Manrope({
//   variable: "--font-body",
//   subsets: ["latin"],
//   weight: ["300", "400", "500"],
// });

/* 6. Fraunces + DM Sans — structured & confident */
// import { Fraunces, DM_Sans } from "next/font/google";
// const displayFont = Fraunces({
//   variable: "--font-display",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "900"],
// });
// const bodyFont = DM_Sans({
//   variable: "--font-body",
//   subsets: ["latin"],
//   weight: ["300", "400", "500"],
// });

export const metadata: Metadata = {
  title: "Edward Cadiz — Full Stack Developer",
  description:
    "Portfolio of Edward Cadiz, a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
