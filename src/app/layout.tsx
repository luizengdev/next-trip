import { NextAuthProvider } from "@/providers/auth";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Next Trip",
  description: "Sistema de Reserva de Viagens!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />

          {children}

          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
