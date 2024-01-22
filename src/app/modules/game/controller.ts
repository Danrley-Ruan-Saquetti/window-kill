import { PlayerController } from '../player/controller.js'
import { GameRepository } from './model.js'

export class GameController {
    private repo: GameRepository
    private playerController: PlayerController
    private requestAnimationFrameId = 0

    constructor() {
        this.repo = new GameRepository()
        this.playerController = new PlayerController()
    }

    initComponents() {

    }

    start() {
        if (this.isRunning()) {
            return
        }

        this.initComponents()
        this.repo.state.isRunning = true

        this.update()
    }

    stop() {
        cancelAnimationFrame(this.requestAnimationFrameId)

        this.repo.state.isRunning = false
    }

    update() {
        this.playerController.update()
        if (this.isRunning()) {
            this.requestAnimationFrameId = requestAnimationFrame(() => this.update())
        }
    }

    isRunning() {
        return this.repo.state.isRunning
    }

    get state() {
        return this.repo.state
    }
}
