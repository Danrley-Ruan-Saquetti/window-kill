import { GameRepository } from '../game/model.js'
import { PlayerModel } from './model.js'

export class PlayerController {
    private gameRepository: GameRepository

    constructor() {
        this.gameRepository = new GameRepository()
    }

    initComponents() {
        window.addEventListener('keydown', ev => this.keyPressed(ev.key))
    }

    keyPressed(key: string) {
        const action = PlayerModel.getKeyPressed(key)!

        if (!this.gameRepository.getPlayer().isValidKey(action)) {
            return
        }

        this.gameRepository.getPlayer().GLOBAL_MAP_KEY[action]()
    }

    update() {

    }
}