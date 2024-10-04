import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import CookieBanner from "@/components/cookie-banner";
import GlobalStyles from "@mui/material/GlobalStyles";

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
    <html lang="el">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles
              styles={{
                img: {
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                },
              }}
            />
            {children}
            <CookieBanner />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      <GoogleAnalytics gaId="G-5LJBVVC7W3" />
    </html>
  );
}
