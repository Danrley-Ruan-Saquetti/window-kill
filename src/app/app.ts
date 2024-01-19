import { CanvasController } from './modules/canvas/controller.js'
import { GameController } from './modules/game/controller.js'

export type AppInstanceOptions = {
    canvasSelector: string
}

export class AppController {
    private canvasController: CanvasController
    private gameController: GameController

    constructor(options: AppInstanceOptions) {
        this.gameController = new GameController()
        this.canvasController = new CanvasController()

        this.canvasController.setCanvas(document.querySelector(options.canvasSelector || 'canvas') as HTMLCanvasElement)
    }
}
