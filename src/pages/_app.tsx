import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from '../../node_modules/next/router';
import { useEffect } from 'react'
import Phaser from 'phaser';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}