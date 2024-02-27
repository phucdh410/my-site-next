import type { Metadata } from "next";

import { ThemeProvider } from "@mui/material";

import { CMainLayout } from "@/common/layouts";
import theme from "@/themes";

import { comfortaa, montserrat, quicksand, raleway } from "./font";

import "./globals.css";

export const metadata: Metadata = {
  title: "Phúc SITE",
  description: "Được tạo ra bởi tôi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${montserrat.variable} ${quicksand.variable} ${comfortaa.variable}`}
    >
      <ThemeProvider theme={theme}>
        <body>
          <CMainLayout>{children}</CMainLayout>
        </body>
      </ThemeProvider>
    </html>
  );
}
