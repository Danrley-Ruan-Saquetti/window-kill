import { CanvasModel, CanvasRepository } from './model.js'

export class CanvasController {
    private repo: CanvasRepository

    constructor() {
        this.repo = new CanvasRepository()
    }

    setCanvas(canvas: CanvasModel.Canvas) {
        this.repo.setCanvas(canvas)
    }
}
