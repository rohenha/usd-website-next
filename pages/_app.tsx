import type { AppProps } from 'next/app';
import * as React from 'react';
import { LayoutComponent } from "Components";

import '../styles/site.sass'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
    <LayoutComponent teams={pageProps.teams}>
        <Component {...pageProps} />
    </LayoutComponent>
    );
}

