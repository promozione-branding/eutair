'use client';
import { handleCallClick, handleWhatsappClick } from '@/lib/tracking';
import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Whatsapp = () => {
    return (
        <>
            <a
                href="https://wa.me/919582911766"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp with sangam plastic "
                onClick={() => handleWhatsappClick({ source: 'Website' })}
                className="fixed right-4 bottom-5 z-50 animate-bounce rounded-full bg-green-500 p-3 text-white shadow-lg transition hover:bg-green-600"
            >
                <FaWhatsapp size={30} />
            </a>

            <a
                href="tel:+919582911766"
                aria-label="Call sangam plastic"
                className="fixed right-4 bottom-21 z-50 animate-bounce rounded-full bg-red-500 p-3 text-white shadow-lg transition hover:bg-red-600"
            onClick={() => handleCallClick({ source: 'Website' })}
            >
                <FaPhoneAlt size={27} />
            </a>
        </>
    );
};

export default Whatsapp;
