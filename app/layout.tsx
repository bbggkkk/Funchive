import React from 'react';
import localFont from 'next/font/local';
import './global.scss';
import Theme from './themeprovider';

const PRETENDARD = localFont({
    variable: '--default-font',
    src: 'assets/fonts/pretendard/PretendardVariable.woff2',
    display: 'swap',
});

export const metadata = {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    title: 'Funchive',
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ko' className={PRETENDARD.variable}>
            <body>
                <Theme>{children}</Theme>
            </body>
        </html>
    );
}
