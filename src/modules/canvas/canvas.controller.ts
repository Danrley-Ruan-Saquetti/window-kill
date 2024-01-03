import { Controller } from '../../common/controller.js'
import { CanvasEntity } from './canvas.entity.js'

export class CanvasController extends Controller {
    private canvasEntity: CanvasEntity
    private animateFrameNumber: number

    constructor({ canvas }: { canvas: HTMLCanvasElement }) {
        super()

        this.canvasEntity = new CanvasEntity(canvas)
        this.animateFrameNumber = 0

        this.loadComponents()
    }

    private loadComponents() {
        this.listener.on('/window/resize', data => {
            this.canvasEntity.updateDimension(data)
        })
    }

    start() {
        this.canvasEntity.updateDimension({ width: innerWidth, height: innerHeight })
        this.update()
    }

    stop() {
        cancelAnimationFrame(this.animateFrameNumber)
    }

    update() {
        this.animateFrameNumber = requestAnimationFrame(() => this.update())
    }
}