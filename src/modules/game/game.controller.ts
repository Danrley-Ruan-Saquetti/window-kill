import { Controller } from '../../common/controller.js'
import { GameEntity } from './game.entity.js'

export class GameController extends Controller {
    private gameEntity: GameEntity
    private animateFrameNumber: number

    constructor() {
        super()

        this.animateFrameNumber = 0
        this.gameEntity = new GameEntity()

        this.loadComponents()
    }

    private loadComponents() {

    }

    start() {
        this.update()
    }

    stop() {

    }

    update() {
        this.animateFrameNumber = requestAnimationFrame(() => this.update())
    }
}