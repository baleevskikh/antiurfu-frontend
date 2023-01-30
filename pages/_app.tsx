import type { ReactElement, ReactNode } from 'react'
import '@/styles/globals/index.scss'
import type {AppProps} from 'next/app'
import type { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const App = ({Component, pageProps}: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(<Component  {...pageProps} />)
}

export default App
