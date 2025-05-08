import '@/app/ui/global.css';

import {Lusitana} from 'next/font/google';

const lusitana = Lusitana({ weight: ['400', '700'], subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lusitana.className}>{children}</body>
    </html>
  );
}
