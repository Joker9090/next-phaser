import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from '../../node_modules/next/router';
import Phaser from 'phaser'
import React from 'react';
import Game from '@/game/game';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [_phaser,setPhaser] = React.useState<typeof Phaser>()
  const [GameConstructor,setGameConstructor] = React.useState<Game>()
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const DynamicPhaser = require('phaser')
    setPhaser(DynamicPhaser)
  },[])

  React.useEffect(() => {
    if(canvasRef) {
      const DynamicGame = require('@/game/game')
      setGameConstructor(new DynamicGame.default(canvasRef.current))
    }
  },[canvasRef])

  React.useEffect(() => {
    if(_phaser && canvasRef.current && GameConstructor) {
      GameConstructor.init();
    }
  },[_phaser, GameConstructor])

  return (
    <div className="game-container">
      <canvas ref={canvasRef} />
    </div>
  )
}
