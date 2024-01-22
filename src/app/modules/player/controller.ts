import { CanvasRepository } from '../canvas/model.js'
import { GameRepository } from '../game/model.js'
import { PlayerModel } from './model.js'

export class PlayerController {
    private canvasRepository: CanvasRepository
    private gameRepository: GameRepository

    constructor() {
        this.gameRepository = new GameRepository()
        this.canvasRepository = new CanvasRepository()
    }

    initComponents() {
        window.addEventListener('keydown', ev => {
            if (ev.type == 'keydown') {
                this.keyPressedDown(ev.key)
            }
        })
        window.addEventListener('keyup', ev => {
            if (ev.type == 'keyup') {
                this.keyPressedUp(ev.key)
            }
        })
    }

    update() {
        const isMoved = this.gameRepository.getPlayer().movePlayer()
    }

    draw() {
        const player = this.gameRepository.getPlayer()

        this.canvasRepository.context.beginPath()
        this.canvasRepository.context.arc(player.position.x, player.position.y, player.radius, 0, 2 * Math.PI, false)
        this.canvasRepository.context.fillStyle = 'black'
        this.canvasRepository.context.fill()
        this.canvasRepository.context.strokeStyle = 'white'
        this.canvasRepository.context.lineWidth = 3
        this.canvasRepository.context.stroke()
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