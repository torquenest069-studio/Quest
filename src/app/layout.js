import React from 'react';
import '../index.css';
import '../App.css';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import StructuredData from '../components/Common/StructuredData';
import ChatBot from '../components/Common/ChatBot/ChatBot';
import ScrollProgress from '../components/Common/ScrollProgress';

export const viewport = {
  themeColor: '#0a0a0a',
};

export const metadata = {
  metadataBase: new URL('https://questpharmasolution.com'),
  title: {
    template: '%s | QUEST Pharma Solutions',
    default: 'QUEST Pharma Solutions | Global Quality & GMP Compliance',
  },
  description: 'Trusted pharmaceutical quality and GMP compliance consultancy serving regulated manufacturers worldwide.',
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'QUEST Pharma Solutions',
    description: 'Trusted pharmaceutical quality and GMP compliance consultancy.',
    url: 'https://questpharmasolution.com',
    siteName: 'QUEST Pharma Solutions',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <div className="app-wrapper">
          <StructuredData />
          <Navbar />
          <main className="content-area">
            {children}
          </main>
          <Footer />
          <ChatBot />
        </div>
      </body>
    </html>
  );
}
