import { AuthContextProvider } from '@/context/auth.context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });


export default function App({ Component,  pageProps: { ...pageProps } }: AppProps) {
  return  (
    <AuthContextProvider>
      <main  className={inter.className}>
        <Component {...pageProps} />
      </main>
    </AuthContextProvider>
  )
}
