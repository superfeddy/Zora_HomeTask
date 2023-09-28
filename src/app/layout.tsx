import 'react-responsive-pagination/themes/bootstrap.css';

import './globals.css';

export const metadata = {
  title: 'Zora Home Challenge'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
