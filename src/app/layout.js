import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "NODO Contable & Tributario - Contabilidad simple para PYMEs",
  description:
    "Te ordenamos impuestos, facturación y sueldos para que te concentres en vender. Especialistas en PYMEs de toda Argentina.",
  keywords:
    "contabilidad, impuestos, AFIP, monotributo, PYME, sueldos, gestión, córdoba, argentina",
  authors: [{ name: "NODO Contable & Tributario" }],
  creator: "NODO Contable & Tributario",
  publisher: "NODO Contable & Tributario",
  metadataBase: new URL("https://nodocontable.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NODO Contable & Tributario - Contabilidad simple para PYMEs",
    description:
      "Te ordenamos impuestos, facturación y sueldos para que te concentres en vender. Especialistas en PYMEs de toda Argentina.",
    url: "https://nodocontable.com",
    siteName: "NODO Contable & Tributario",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NODO Contable & Tributario - Especialistas en PYMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NODO Contable & Tributario - Contabilidad simple para PYMEs",
    description:
      "Te ordenamos impuestos, facturación y sueldos para que te concentres en vender.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        {/* <a href="#hero" className="skip-link">
          Saltar al contenido principal
        </a>   */}
        {children}
      </body>
    </html>
  );
}
