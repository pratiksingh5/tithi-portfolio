import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tithi Choudhary | Business Analyst & Blog Writer",
  description:
    "Tithi Choudhary is a Business Analyst and Blog Writer specializing in insightful industry trends, business strategies, and analytical thinking. Explore thought-provoking blogs and expert insights.",
  keywords:
    "Business Analyst, Blog Writer, Data Analysis, Business Strategy, Market Research, Industry Insights, Business Planning, Case Studies",
  author: "Tithi Choudhary",
  applicationName: "Tithi Choudhary Portfolio",
  generator: "Next.js",
  themeColor: "#ffffff",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  canonical: "https://tithichoudhary.netlify.app",
  
  openGraph: {
    title: "Tithi Choudhary | Business Analyst & Blog Writer",
    description:
      "Explore insightful articles on business analysis, market trends, and strategic planning by Tithi Choudhary.",
    type: "website",
    url: "https://tithichoudhary.netlify.app",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D03AQGXmejBUC7t-A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722598748913?e=1747267200&v=beta&t=3hr__AjbFfr2j1AaR9PL6QjEBzsNeRrkSyHldi167jU",
        width: 1200,
        height: 630,
        alt: "Tithi Choudhary - Business Analyst & Blog Writer",
      },
    ],
    locale: "en_US",
    siteName: "Tithi Choudhary",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
