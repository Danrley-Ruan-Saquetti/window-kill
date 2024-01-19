import { GameRepository } from './model.js'

export class GameController {
    private repo: GameRepository
    private requestAnimationFrameId = 0
    private count = 0

    constructor() {
        this.repo = new GameRepository()
    }

    start() {
        if (this.isRunning()) {
            return
        }

        this.repo.update({
            isRunning: true,
        })

        this.update()
    }

    stop() {
        cancelAnimationFrame(this.requestAnimationFrameId)

        this.repo.update({
            isRunning: false,
        })
    }

    update() {
        if (this.isRunning()) {
            this.requestAnimationFrameId = requestAnimationFrame(() => this.update())
        }
    }

    isRunning() {
        return this.repo.state.isRunning
    }
}
