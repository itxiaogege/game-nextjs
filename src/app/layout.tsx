import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // Add this line
  title: {
    template: '%s | Free Online Games Collection - free crazy Games',
    default: 'Free Online Games Collection - free crazy Games'
  },
  description: 'Explore the most popular free online games collection, including racing, arcade, and many other game types, with daily updates of high-quality games.',
  keywords: ['Free Games', 'Online Games', 'Racing Games', 'Arcade Games'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://3ksgames.com',
    siteName: 'free crazy Games',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@gameportal',
    images: ['/twitter-og.jpg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-gray-800">
                free crazy Games
              </Link>
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                {/* <Link href="/categories" className="text-gray-600 hover:text-gray-900">
                  Categories
                </Link> */}
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
