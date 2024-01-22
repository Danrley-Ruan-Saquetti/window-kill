import { GameRepository } from '../game/model.js'
import { PlayerModel } from './model.js'

export class PlayerController {
    private gameRepository: GameRepository

    constructor() {
        this.gameRepository = new GameRepository()
    }

    initComponents() {
        window.addEventListener('keydown', ev => this.keyPressedDown(ev.key))
        window.addEventListener('keyup', ev => this.keyPressedUp(ev.key))
    }

    update() {
        this.gameRepository.getPlayer().movePlayer()
    }

    private keyPressedDown(key: string) {
        const action = PlayerModel.getKeyPressed(key)!

        if (!this.gameRepository.getPlayer().isValidKeyPressDown(action)) {
            return
        }

        this.gameRepository.getPlayer().GLOBAL_MAP_KEY_PRESS_DOWN[action]()
    }

    private keyPressedUp(key: string) {
        const action = PlayerModel.getKeyPressed(key)!

        if (!this.gameRepository.getPlayer().isValidKeyPressUp(action) || !this.gameRepository.getPlayer().GLOBAL_MAP_KEY_PRESS_UP[action]) {
            return
        }

        this.gameRepository.getPlayer().GLOBAL_MAP_KEY_PRESS_UP[action]!()
    }
}