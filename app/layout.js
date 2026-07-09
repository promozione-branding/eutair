import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Toaster } from "react-hot-toast";

import Whatsapp from "@/components/Whatsapp";

// Roboto
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Screw Air Compressor Supplier | Air Treatment Solutions | Eutair",
  description:
    "Looking for a reliable Screw Air Compressor Supplier? Eutair provides industrial screw air compressors, air dryers, filters, engineering services, AMC, and complete compressed air solutions.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),
            dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PTF5W8BF');
        `}</Script>

        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xjp36uvt0f");
          `}
        </Script>

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10893102558"
          strategy="afterInteractive"
        />
      </head>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />

      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTF5W8BF"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
