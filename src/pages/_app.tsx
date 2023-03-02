import * as React from 'react'
import '../styles/globals.css'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

export default function App({Component, pageProps}) {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
