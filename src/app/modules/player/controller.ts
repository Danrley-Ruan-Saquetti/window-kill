import { GameRepository } from '../game/model.js'
import { PlayerModel } from './model.js'

export class PlayerController {
    private gameRepository: GameRepository

    constructor() {
        this.gameRepository = new GameRepository()
    }

    initComponents() {
        window.addEventListener('keydown', ev => {
            console.log(PlayerModel.getKeyPressed[ev.key])
        })
    }

    update() {

    }
}