import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Elizabeth Lam Esquenazi | Academic profile',
  description: 'Academic profile of Elizabeth Lam Esquenazi, Full Professor at Universidad Católica del Norte.',
  icons: { icon: './favicon.png' },
  openGraph: {
    title: 'Elizabeth Lam Esquenazi | Academic profile',
    description: 'Mining waste, mine tailings, environmental geochemistry and circular economy research.',
    type: 'profile',
    images: siteUrl ? [{ url: `${siteUrl}/og.png`, width: 1730, height: 909, alt: 'Elizabeth Lam Esquenazi academic profile' }] : undefined,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
