import type { AppProps } from 'next/app'

import '../styles/site.sass'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

