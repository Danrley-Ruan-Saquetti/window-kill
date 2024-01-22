import { CanvasRepository } from '../canvas/model.js'
import { PlayerController } from '../player/controller.js'
import { GameRepository } from './model.js'

export class GameController {
    private repo: GameRepository
    private canvasRepository: CanvasRepository
    private playerController: PlayerController
    private setIntervalId: NodeJS.Timeout = null as any
    private FPS = 1000 / 60

    constructor() {
        this.repo = new GameRepository()
        this.playerController = new PlayerController()
        this.canvasRepository = new CanvasRepository()
    }

    initComponents() {

    }

    start() {
        if (this.isRunning()) {
            return
        }

        this.repo.state.isRunning = true

        this.setIntervalId = setInterval(() => this.update(), this.FPS)
    }

    stop() {
        clearInterval(this.setIntervalId)
        this.repo.state.isRunning = false
    }

    update() {
        this.playerController.update()
    }

    resetCanvas() {
        this.canvasRepository.context.fillStyle = '#000'
        this.canvasRepository.context.fillRect(0, 0, this.canvasRepository.canvas.clientWidth, this.canvasRepository.canvas.clientHeight)
    }

    isRunning() {
        return this.repo.state.isRunning
    }

    get state() {
        return this.repo.state
    }
}
