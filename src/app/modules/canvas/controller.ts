import { Dimension } from '../../../types/index.js'
import { GameRepository } from '../game/model.js'
import { CanvasModel, CanvasRepository } from './model.js'

export class CanvasController {
    private repo: CanvasRepository
    private gameRepository: GameRepository
    private requestAnimationFrameId = 0

    constructor() {
        this.repo = new CanvasRepository()
        this.gameRepository = new GameRepository()
    }

    initComponents() {
        this.repo.setCanvas(document.querySelector('canvas#game-view') as HTMLCanvasElement)
    }

    start() {
        this.initComponents()
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
