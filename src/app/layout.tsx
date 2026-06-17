import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/theme"
import ReactQueryProvider from "@/react-query";
import { ReduxProvider } from "@/redux/provider";
import { Toaster } from "@/components/ui/sonner"; // <-- 1. Imported Sonner Toaster

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "reco-d",
  description: "share videos with friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${manrope.className} bg-[#171717]`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReduxProvider>
              <ReactQueryProvider>
                {children}
              </ReactQueryProvider>
            </ReduxProvider>
            
            <Toaster /> {/* <-- 2. Added Toaster inside ThemeProvider */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}