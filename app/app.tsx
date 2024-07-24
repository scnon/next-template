import type { AppProps } from 'next/app'
import { CookiesProvider } from 'react-cookie'
import { trpc } from '@/client/utils/trpc'
import React from 'react'

const MainApp = ({ Component, pageProps }: AppProps) => {
	return (
		<CookiesProvider>
			<Component {...pageProps} />
		</CookiesProvider>
	)
}

export default trpc.withTRPC(MainApp)
