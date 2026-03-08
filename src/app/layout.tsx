import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";
import { MobileStickyActions } from "@/components/ui/MobileStickyActions";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { CartProvider } from "@/contexts/CartContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xiaomi Plus | Smartphones Xiaomi, Apple e Realme",
  description: "Os melhores smartphones Xiaomi, Realme e iPhone originais, lacrados e com garantia em Santa Cruz, RJ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased dark min-h-screen flex flex-col`}>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1 flex flex-col pt-16 md:pt-0">
            {children}
          </main>
          <Footer />
          <FloatingWhatsAppButton />
          <MobileStickyActions />
        </CartProvider>
      </body>
    </html>
  );
}
