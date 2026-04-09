import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "CASHFLOW STRATEGIYASI | Moliya Kursi",
  description: "Moliyaviy erkinlikka eltuvchi professional strategiya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning aynan shu xatolarni oldini oladi
    <html lang="uz" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans bg-[#050505] text-white antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}