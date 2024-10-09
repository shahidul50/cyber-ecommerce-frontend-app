import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import "./globals.css";
import { figtree, sfProDisplay } from "./utils/font";

export const metadata = {
  title: "Cyber E-commerce App",
  description: "Cyber is a electronics product base e-commerce application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${sfProDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
