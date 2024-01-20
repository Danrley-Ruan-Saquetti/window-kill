import { CanvasController } from './modules/canvas/controller.js'
import { GameController } from './modules/game/controller.js'
import { PlayerController } from './modules/player/controller.js'

export type AppInstanceOptions = {}

export class AppController {
    private canvasController: CanvasController
    private gameController: GameController
    private playerController: PlayerController

    constructor({ }: AppInstanceOptions) {
        this.gameController = new GameController()
        this.canvasController = new CanvasController()
        this.playerController = new PlayerController()
    }

    start(args: { playerName: string }) {
        this.gameController.start()
        this.canvasController.start()
        this.playerController.initComponents()
    }

    stop() {
        this.gameController.stop()
        this.canvasController.stop()
    }

    getState() {
        return { ...this.gameController.state }
    }
}
