import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harpreet Singh Plumbing & Heating — Smethwick & Birmingham",
  description:
    "General plumbing, emergency callouts, boiler repairs and bathroom fitting in Smethwick, Birmingham, West Bromwich, Oldbury, Edgbaston and Sandwell.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
