
import {
    Roboto,
    Poppins,
    Inter,
    Playfair_Display,
} from 'next/font/google';
import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';
import { Toaster } from 'react-hot-toast';

import Script from 'next/script';

// Roboto
const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    display: 'optional',
});

// Poppins
const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    display: 'optional',
});

// Inter
const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'optional',
});

// Playfair
const playfair = Playfair_Display({
    variable: '--font-playfair',
    subsets: ['latin'],
    display: 'optional',
});

export const metadata = {
    title: 'Screw Air Compressor Supplier | Air Treatment Solutions | Eutair',
    description:
        'Looking for a reliable screw air compressor supplier? Eutair offers industrial screw air compressors, air dryers, filters, AMC, and complete air solutions.',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
    alternates: {
        canonical: 'https://screwaircompressormanufacturers.com/',
    },
};

export default function RootLayout({ children }) {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Eutair Equipments',
        url: 'https://screwaircompressormanufacturers.com/',
        logo: 'https://screwaircompressormanufacturers.com/logo.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-9717159766',
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: 'en',
        },
    };

    return (
        <html
            lang="en"
            className={`${roboto.variable} ${poppins.variable} ${inter.variable} ${playfair.variable}`}
        >
            <head>
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-CNDYGYGFJC"
                    strategy="afterInteractive"
                />

                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                >
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-CNDYGYGFJC');
                    `}
                </Script>

                {/* Google Tag Manager */}
                <Script id="gtm" strategy="beforeInteractive">
                    {`
                        (function(w,d,s,l,i){
                            w[l]=w[l]||[];
                            w[l].push({
                                'gtm.start': new Date().getTime(),
                                event:'gtm.js'
                            });

                            var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),
                            dl=l!='dataLayer'?'&l='+l:'';

                            j.async=true;
                            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                            f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PTF5W8BF');
                    `}
                </Script>

                {/* Microsoft Clarity */}
                <Script id="clarity" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){
                                (c[a].q=c[a].q||[]).push(arguments)
                            };
                            t=l.createElement(r);
                            t.async=1;
                            t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];
                            y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "xjp36uvt0f");
                    `}
                </Script>

                {/* Google Ads */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-10893102558"
                    strategy="afterInteractive"
                />

                {/* Material Symbols */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                />
            </head>

            <body className="antialiased">
                {/* Google Tag Manager - noscript */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-PTF5W8BF"
                        height="0"
                        width="0"
                        style={{
                            display: 'none',
                            visibility: 'hidden',
                        }}
                    />
                </noscript>

                {/* Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema),
                    }}
                />

                {/* Toast Notifications */}
                <Toaster
                    position="top-center"
                    toastOptions={{
                        duration: 3000,
                    }}
                />

                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    );
}


