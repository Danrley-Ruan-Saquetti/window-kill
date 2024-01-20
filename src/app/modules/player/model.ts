import { ObjectAbstract, ObjectModel } from '../object/model.js'

export namespace PlayerModel {
    export type Model = ObjectModel.Model

    export enum MAP_KEYS_CONTROL {
        MOVE_UP = 'w',
        MOVE_DOWN = 's',
        MOVE_LEFT = 'a',
        MOVE_RIGHT = 'd',
        STOP_UP = 'w',
        STOP_DOWN = 's',
        STOP_LEFT = 'a',
        STOP_RIGHT = 'd',
    }

    export function getKeyPressed(key: string): MAP_KEYS | null {
        const keyPressed = Object.keys(MAP_KEYS_CONTROL).find(keyMap => MAP_KEYS_CONTROL[keyMap as MAP_KEYS] == key) as MAP_KEYS || null

        return keyPressed
    }

    export type MAP_KEYS = keyof typeof MAP_KEYS_CONTROL
}

export class Player extends ObjectAbstract {
    stateMove = {
        MOVE_DOWN: false,
        MOVE_LEFT: false,
        MOVE_RIGHT: false,
        MOVE_UP: false,
    }
    GLOBAL_MAP_KEY: { [x in PlayerModel.MAP_KEYS]: () => void | any } = {
        MOVE_DOWN: () => this.moveDown(),
        MOVE_UP: () => this.moveUp(),
        MOVE_LEFT: () => this.moveLeft(),
        MOVE_RIGHT: () => this.moveRight(),
        STOP_DOWN: () => this.stopDown(),
        STOP_UP: () => this.stopUp(),
        STOP_LEFT: () => this.stopLeft(),
        STOP_RIGHT: () => this.stopRight(),
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

    isValidKey(key: string) {
        if (!key) {
            return false
        }

        return !!this.GLOBAL_MAP_KEY[key as PlayerModel.MAP_KEYS]
    }
}