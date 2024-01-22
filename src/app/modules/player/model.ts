import { ObjectAbstract, ObjectModel } from '../object/model.js'

export namespace PlayerModel {
    export interface Model extends ObjectModel.Model {
        radius: number
        speed: number
    }

    export enum MAP_KEYS_CONTROL {
        MOVE_UP = 'w',
        MOVE_DOWN = 's',
        MOVE_LEFT = 'a',
        MOVE_RIGHT = 'd',
    }

    export function getKeyPressed(key: string): MAP_KEYS | null {
        const keyPressed = Object.keys(MAP_KEYS_CONTROL).find(keyMap => MAP_KEYS_CONTROL[keyMap as MAP_KEYS] == key) as MAP_KEYS || null

        return keyPressed
    }

    export type MAP_KEYS = keyof typeof MAP_KEYS_CONTROL
}

export class Player extends ObjectAbstract {
    speed = 2
    radius = 15
    stateMove = {
        MOVE_DOWN: false,
        MOVE_LEFT: false,
        MOVE_RIGHT: false,
        MOVE_UP: false,
    }
    GLOBAL_MAP_KEY_PRESS_DOWN: { [x in PlayerModel.MAP_KEYS]: () => void | any } = {
        MOVE_DOWN: () => this.moveDown(),
        MOVE_UP: () => this.moveUp(),
        MOVE_LEFT: () => this.moveLeft(),
        MOVE_RIGHT: () => this.moveRight(),
    }
    GLOBAL_MAP_KEY_PRESS_UP: { [x in PlayerModel.MAP_KEYS]?: () => void | any } = {
        MOVE_DOWN: () => this.stopDown(),
        MOVE_UP: () => this.stopUp(),
        MOVE_LEFT: () => this.stopLeft(),
        MOVE_RIGHT: () => this.stopRight(),
    }

    constructor() {
        super()
    }

    moveDown() {
        this.stateMove.MOVE_DOWN = true
        this.stopUp()
    }
    moveUp() {
        this.stateMove.MOVE_UP = true
        this.stopDown()
    }
    moveLeft() {
        this.stateMove.MOVE_LEFT = true
        this.stopRight()
    }
    moveRight() {
        this.stateMove.MOVE_RIGHT = true
        this.stopLeft()
    }
    stopDown() {
        this.stateMove.MOVE_DOWN = false
    }
    stopUp() {
        this.stateMove.MOVE_UP = false
    }
    stopLeft() {
        this.stateMove.MOVE_LEFT = false
    }
    stopRight() {
        this.stateMove.MOVE_RIGHT = false
    }

    movePlayer() {
        const speed = {
            x: 0,
            y: 0
        }

        if (this.stateMove.MOVE_DOWN) {
            speed.y = this.speed
        } else if (this.stateMove.MOVE_UP) {
            speed.y = -this.speed
        }
        if (this.stateMove.MOVE_RIGHT) {
            speed.x = this.speed
        } else if (this.stateMove.MOVE_LEFT) {
            speed.x = -this.speed
        }

        this.position.y += speed.y
        this.position.x += speed.x

        this.fixLimitPosition({ width: this.radius, height: this.radius })
    }

    isValidKeyPressDown(key: string) {
        if (!key) {
            return false
        }

        return !!this.GLOBAL_MAP_KEY_PRESS_DOWN[key as PlayerModel.MAP_KEYS]
    }

    isValidKeyPressUp(key: string) {
        if (!key) {
            return false
        }

        return !!this.GLOBAL_MAP_KEY_PRESS_DOWN[key as PlayerModel.MAP_KEYS]
    }
}