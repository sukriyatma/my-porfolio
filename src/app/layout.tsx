import type { Metadata } from "next";
import { Anonymous_Pro, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const anonymPro = Anonymous_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anonympro",
  weight: ['400', '700'],  
})

export const metadata: Metadata = {
  title: "Sukriyatma",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anonymPro.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
