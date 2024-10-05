import localFont from "next/font/local";
import { Figtree } from "next/font/google";

// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const figtree = Figtree({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const sfProDisplay = localFont({
  src: [
    {
      path: "../fonts/SF-Pro-Display-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/SF-Pro-Display-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-srProDisplay",
});

export { figtree, sfProDisplay };
