import React from 'react';
import localFont from 'next/font/local';

import { useRouter } from 'next/router';

const PRETENDARD = localFont({
    variable: '--default-font',
    src: 'assets/fonts/pretendard/PretendardVariable.woff2',
    display: 'swap',
});

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="ko" className={PRETENDARD.variable}>
        <head>
            <style>{`*{font-family:var(--default-font), sans-serif;}`}</style>
        </head>
        <body>{children}</body>
      </html>
    );
  }