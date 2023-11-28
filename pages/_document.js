import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link 
        rel="preload"
        href="/assets/monument.otf"
        as="font"
        type="font/otf"
        crossOrigin='anonymous'
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
