'use client';
import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Whatsapp = () => {
    return (
        <>
            <a
                href="https://wa.link/o8l7fy
"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp with sangam plastic "
                className="fixed right-4 bottom-5 z-50 animate-bounce rounded-full bg-green-500 p-3 text-white shadow-lg transition hover:bg-green-600"
            >
                <FaWhatsapp size={30} />
            </a>

            <a
                href="tel:+919582911766"
                aria-label="Call sangam plastic"
                className="fixed right-4 bottom-21 z-50 animate-bounce rounded-full bg-red-500 p-3 text-white shadow-lg transition hover:bg-red-600"
            >
                <FaPhoneAlt size={27} />
            </a>
        </>
    );
};

export default Whatsapp;
