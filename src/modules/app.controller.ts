import { CanvasController } from './canvas/canvas.controller.js'

export class AppController {
    private canvasController: CanvasController

    constructor({ canvas }: { canvas: HTMLCanvasElement }) {
        this.canvasController = new CanvasController({ canvas })
    }

    start() {
        this.canvasController.start()
    }

    stop() {
        this.canvasController.stop()
    }
}