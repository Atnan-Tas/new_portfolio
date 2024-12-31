import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import RootLayout from '@/app/RootLayout';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// ✅ Définir les métadonnées (Server Component)
export const metadata: Metadata = {
  title: 'Atnan Tas Portfolio',
  description: 'Portfolio d\'Atnan Tas, designer et développeur web.',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased`}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
