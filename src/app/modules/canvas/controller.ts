import { Dimension } from '../../../types/index.js'
import { CanvasModel, CanvasRepository } from './model.js'

export class CanvasController {
    private repo: CanvasRepository
    private requestAnimationFrameId = 0

    constructor() {
        this.repo = new CanvasRepository()
    }

    start() {
        this.update()
    }

    stop() {
        cancelAnimationFrame(this.requestAnimationFrameId)
    }

    update() {
        this.requestAnimationFrameId = requestAnimationFrame(() => this.update())
    }

    resizeCanvas({ height, width }: Dimension) {
        this.repo.canvas.width = width
        this.repo.canvas.height = height
    }

    setCanvas(canvas: CanvasModel.Canvas) {
        this.repo.setCanvas(canvas)
    }
}
