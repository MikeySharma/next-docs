import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata : Metadata ={
  title: {
    template: '%s | Next.js Dashboard',
    default: 'Next.js Dashboard'
  },
  description: 'Next.js Dashboard',
  metadataBase : new URL('https://mikey-dashboard.vercel.app')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
