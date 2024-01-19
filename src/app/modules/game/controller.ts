import { GameRepository } from './model.js'

export class GameController {
    private repo: GameRepository

    constructor() {
        this.repo = new GameRepository()
    }
}
