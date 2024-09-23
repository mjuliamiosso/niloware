import { ReactNode } from 'react';

export default function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={params.locale}>
            <body>
                {children}
            </body>
        </html>
    );
}
