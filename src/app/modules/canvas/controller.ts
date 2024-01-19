import { CanvasRepository } from './model.js'

export class CanvasController {
    private repo: CanvasRepository
    private requestAnimationFrameId = 0

    constructor() {
        this.repo = new CanvasRepository()
    }

    initComponents() {
        this.repo.canvas = document.querySelector('canvas#game-view') as HTMLCanvasElement

        window.addEventListener('resize', () => {
            this.resizeCanvas()
        })
    }

    start() {
        this.resizeCanvas()
        this.update()
    }

    stop() {
        cancelAnimationFrame(this.requestAnimationFrameId)
    }

    update() {
        this.requestAnimationFrameId = requestAnimationFrame(() => this.update())
    }

    resizeCanvas() {
        this.repo.canvas.width = window.innerWidth
        this.repo.canvas.height = window.innerHeight
    }
}
