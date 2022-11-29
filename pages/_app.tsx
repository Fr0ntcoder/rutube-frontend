import type { AppProps } from 'next/app';

import '@/assets/styles/scss/default.scss';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
