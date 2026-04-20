import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["700", "800"]
});

export const metadata: Metadata = {
  title: "DevShuttle | Software Agency",
  description: "DevShuttle builds modern websites, scalable web applications, and high-performance mobile applications for startups and brands.",
  metadataBase: new URL("https://devshuttle.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} ${montserrat.variable} bg-background-dark text-white antialiased`}>
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="top-center" richColors />
        </SmoothScroll>
      </body>
    </html>
  );
}
