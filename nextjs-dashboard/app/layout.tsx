import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata : Metadata ={
  title: {
    template: '%s | JNK Food Delivery',
    default: 'JNK Food Delivery'
  },
  description: 'JNK Best And Fast Food Delivery App',
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
