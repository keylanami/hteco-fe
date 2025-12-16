import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HTECO',
  description: 'Track your carbon footprint',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Background Gradient Full Screen */}
      <body className={`${inter.className} bg-gradient-to-br from-green-950 via-teal-900 to-slate-950 text-white min-h-screen selection:bg-emerald-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}