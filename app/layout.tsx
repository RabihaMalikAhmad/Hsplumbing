import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Reehal Plumbing & Heating — Smethwick & Birmingham",
  description:
    "General plumbing, emergency callouts, boiler and gas appliance servicing, leak detection and bathroom fitting in Smethwick, Birmingham, West Bromwich, Oldbury, Edgbaston and Sandwell. Gas Safe registered, 24/7 call-outs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
