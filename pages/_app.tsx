import RootLayout from '@/app/layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'inter-ui/inter.css'

type Props = {}

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return (
    <div className="wrapper">
      <RootLayout>
        <>
          <Component {...pageProps} />
        </>
      </RootLayout>
    </div>
  )
}
export default MyApp
