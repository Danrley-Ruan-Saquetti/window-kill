import { CanvasEntity } from './canvas/canvas.entity.js'

export class AppController {
    private canvasEntity: CanvasEntity

    constructor({ canvas }: { canvas: HTMLCanvasElement }) {
        this.canvasEntity = new CanvasEntity(canvas)
    }
}