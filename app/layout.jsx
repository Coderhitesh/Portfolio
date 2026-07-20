import { Bricolage_Grotesque, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Hitesh Yadav — Full Stack Developer",
  description:
    "Full Stack MERN developer with 3+ years of experience building LMS, e-commerce, booking systems and real-time applications. Based in Delhi, India.",
  keywords: [
    "Hitesh Yadav",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js Developer",
    "Node.js Developer",
    "Delhi",
  ],
  openGraph: {
    title: "Hitesh Yadav — Full Stack Developer",
    description:
      "I design and ship production-grade web platforms — LMS, e-commerce, booking systems and real-time apps.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
