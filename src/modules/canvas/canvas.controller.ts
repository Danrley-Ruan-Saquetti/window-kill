import { CanvasEntity } from './canvas.entity.js'

export class CanvasController {
    private canvasEntity: CanvasEntity
    private animateFrameNumber: number

    constructor({ canvas }: { canvas: HTMLCanvasElement }) {
        this.canvasEntity = new CanvasEntity(canvas)
        this.animateFrameNumber = 0
    }

    start() {
        this.update()
    }

    stop() {
        cancelAnimationFrame(this.animateFrameNumber)
    }

    update() {
        this.animateFrameNumber = requestAnimationFrame(() => this.update())
    }
}