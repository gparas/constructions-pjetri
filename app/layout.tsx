import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import CookieBanner from "@/components/cookie-banner";

export const metadata: Metadata = {
  title:
    "Pjetri – Κατασκευές | Ανακαινίσεις | Μονώσεις | Ελαιοχρωματισμοί | Κεραμοσκεπές",
  description: "Αναλαμβάνουμε κάθε έργο με αφοσίωση και εξειδίκευση.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="h-full">
      <body className="h-full flex flex-col text-gray-600 text-base">
        {children}
        <CookieBanner />
      </body>
      <GoogleTagManager gtmId="GTM-T25RTGNF" />
    </html>
  );
}
