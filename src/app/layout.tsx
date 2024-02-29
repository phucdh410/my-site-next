import type { Metadata } from "next";

import { config } from "@fortawesome/fontawesome-svg-core"; //! 1. Cần dòng này fix lỗi icon quá to khi load của Nextjs
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { CMainLayout } from "@/common/layouts";
import theme from "@/themes";

import { montserrat, public_sans, quicksand, raleway } from "./font";

import "@fortawesome/fontawesome-svg-core/styles.css"; //! 2. Cần dòng này fix lỗi icon quá to khi load của Nextjs
import "./globals.css";
import "../styles/index.scss";

config.autoAddCss = false; //! 3. Cần dòng này fix lỗi icon quá to khi load của Nextjs

export const metadata: Metadata = {
  title: "Hihi 🥰🥰",
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
      className={`${raleway.variable} ${montserrat.variable} ${quicksand.variable} ${public_sans.variable}`}
    >
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CMainLayout>{children}</CMainLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
