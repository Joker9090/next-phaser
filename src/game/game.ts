import { GameLvl1 } from "./game_lvl_1";
import { GameLvl2 } from "./game_lvl_2";


export default class Game {

    config: Phaser.Types.Core.GameConfig = {
        type: Phaser.CANVAS,
        width: 800,
        height: 600,
        render: {
            pixelArt: true
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        
    }
    
    constructor(canvas: HTMLCanvasElement) {
        console.log("[Game constructor]");
        const gamelvl1 = new GameLvl1();
        const gamelvl2 = new GameLvl2();
        
        this.config.canvas = canvas;
        this.config.scene = [gamelvl1,gamelvl2]

    }

    init() {
        console.log("[Game constructor] [Init]");

        const game = new Phaser.Game(this.config);
        
        game.scene.start("GameLvl2");
    }


}
