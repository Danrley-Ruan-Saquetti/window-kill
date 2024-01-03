import { Controller } from '../common/controller.js'
import { CanvasController } from './canvas/canvas.controller.js'
import { GameController } from './game/game.controller.js'

export class AppController extends Controller {
    private canvasController: CanvasController
    private gameController: GameController

    constructor({ canvas }: { canvas: HTMLCanvasElement }) {
        super()

        this.canvasController = new CanvasController({ canvas })
        this.gameController = new GameController()

        this.loadComponents()
    }

    private loadComponents() {
        this.listener.on('/game/start', () => {
            this.start()
        })

        this.listener.on('/game/end', () => {
            this.stop()
        })
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