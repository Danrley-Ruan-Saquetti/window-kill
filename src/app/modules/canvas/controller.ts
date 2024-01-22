import { Dimension } from '../../../types/index.js'
import { GameRepository } from '../game/model.js'
import { PlayerController } from '../player/controller.js'
import { CanvasModel, CanvasRepository } from './model.js'

export class CanvasController {
    private repo: CanvasRepository
    private gameRepository: GameRepository
    private playerController: PlayerController
    private requestAnimationFrameId = 0

    constructor() {
        this.repo = new CanvasRepository()
        this.gameRepository = new GameRepository()
        this.playerController = new PlayerController()
    }

    initComponents() {
        this.repo.setCanvas(document.querySelector('canvas#game-view') as HTMLCanvasElement)
        this.resizeCanvas({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    start() {
        this.update()
    }

    stop() {
        cancelAnimationFrame(this.requestAnimationFrameId)
    }

    update() {
        this.resetCanvas()
        this.playerController.draw()
        this.requestAnimationFrameId = requestAnimationFrame(() => this.update())
    }

    resetCanvas() {
        this.repo.context.fillStyle = '#000'
        this.repo.context.fillRect(0, 0, this.repo.canvas.clientWidth, this.repo.canvas.clientHeight)
    }

    resizeCanvas({ height, width }: Dimension) {
        this.repo.canvas.width = width
        this.repo.canvas.height = height
    }
}