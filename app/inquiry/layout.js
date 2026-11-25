import Script from 'next/script';
import Navbar from '@/components/Inquiry/Navbar';
import Footer from '@/components/Inquiry/Footer';
import MobileFooter from '@/components/Inquiry/MobileFooter';
import Whatsapp from '@/components/Whatsapp';
import '../globals.css'; // adjust path to your global stylesheet

export const metadata = {
    title: 'Get a Quote | Screw Air Compressors & Air Treatment | Eutair',
    description:
        'Request a quote from Eutair for industrial screw air compressors, Chicago Pneumatic portable compressors, air dryers, filters, AMC and complete compressed air solutions. Talk to our experts today.',
};

export default function InquiryLayout({ children }) {
    return (
        <html lang="en">
            <head>

                {/* Microsoft Clarity */}
                <Script id="clarity" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "xjp36uvt0f");
                    `}
                </Script>

            </head>
            <body className="antialiased">

                <Navbar />

                <main>{children}</main>

                <Footer />

                <div className="hidden md:block">
                    <Whatsapp />
                </div>

                <MobileFooter />
            </body>
        </html>
    );
}