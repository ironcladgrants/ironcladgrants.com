import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SiteNavbar } from '@/components/SiteNavbar';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Ironclad Grants 🛡️ | The 2 CFR 200 AI Grant Operating System, Documentation & Release Notes',
  description:
    'Stop paying 8% contingency commissions. Ironclad Grants is the ethical, AI-powered Grant Operating System for 501(c)(3) nonprofits, cooperatives, and universities. Explore documentation, release notes, and launch portal.ironcladgrants.com.',
  keywords: [
    'Ironclad Grants',
    'Grant Operating System',
    '2 CFR 200 compliance',
    'SF-424A budget generator',
    'SF-425 federal financial report',
    'MTDC indirect cost calculator',
    '990-PF sweet spot calculator',
    'nonprofit grant writing software',
    'anti-hallucination RAG grant copilot',
  ],
  openGraph: {
    title: 'Ironclad Grants | The Ethical AI Grant Operating System',
    description:
      'From RFP discovery and 990-PF hydration to anti-hallucination RAG drafting, Red Team peer review, and 2 CFR 200 post-award compliance.',
    url: 'https://ironcladgrants.com',
    siteName: 'Ironclad Grants',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#10b981',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="slate" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('acbf_theme_preference') || 'slate';
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-white">
        <SiteNavbar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
