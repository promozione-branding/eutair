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
  title: " aircompression",
  description:
    "aircompression",
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
