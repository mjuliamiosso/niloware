'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    return (
        <Provider store={store}>
            <html lang={params.locale}>
                <body>
                    {children}
                </body>
            </html>
        </Provider>
    );
}
