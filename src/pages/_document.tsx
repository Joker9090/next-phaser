import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script src="//cdn.jsdelivr.net/npm/phaser@3.11.0/dist/phaser.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
