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
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

</head>


  <Toaster
  position="top-center"
  toastOptions={{
    duration: 3000,
  }}
/>

      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
     
    
        <LayoutWrapper>
        
      
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
