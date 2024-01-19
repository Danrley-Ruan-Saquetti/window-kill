import { CanvasController } from './modules/canvas/controller.js'
import { GameController } from './modules/game/controller.js'

export type AppInstanceOptions = {
    canvasSelector: string
}

export class AppController {
    private canvasController: CanvasController
    private gameController: GameController

    constructor({ canvasSelector = '' }: AppInstanceOptions) {
        this.gameController = new GameController()
        this.canvasController = new CanvasController()
    }

    initComponents() {
        this.gameController.initComponents()
        this.canvasController.initComponents()
    }

    start() {
        this.gameController.start()
        this.canvasController.start()
    }

    stop() {
        this.gameController.stop()
        this.canvasController.stop()
    }
}
