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

        this.canvasController.setCanvas(document.querySelector(canvasSelector) as HTMLCanvasElement)
    }

    start() {
        this.updateSizeCanvas()
        this.gameController.start()
        this.canvasController.start()
    }

    stop() {
        this.gameController.stop()
        this.canvasController.stop()
    }

    private updateSizeCanvas() {
        this.canvasController.resizeCanvas({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }
}
