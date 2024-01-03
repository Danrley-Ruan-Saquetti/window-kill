import { Controller } from '../common/controller.js'
import { CanvasController } from './canvas/canvas.controller.js'

export class AppController extends Controller {
    private canvasController: CanvasController

    constructor({ canvas }: { canvas: HTMLCanvasElement }) {
        super()
        this.canvasController = new CanvasController({ canvas })
    }

    start() {
        this.canvasController.start()
    }

    stop() {
        this.canvasController.stop()
    }
}