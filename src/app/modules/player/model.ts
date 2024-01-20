import { ObjectAbstract, ObjectModel } from '../object/model.js'

export namespace PlayerModel {
    export type Model = ObjectModel.Model

    export enum MAP_KEYS_CONTROL {
        MOVE_UP = 'w',
        MOVE_DOWN = 's',
        MOVE_LEFT = 'a',
        MOVE_RIGHT = 'd',
    }

    export function getKeyPressed(key: string) {
        console.log(Object.keys(MAP_KEYS_CONTROL).find(keyMap => MAP_KEYS_CONTROL[keyMap as MAP_KEYS] == key))
        return (Object.keys(MAP_KEYS_CONTROL).find(keyMap => MAP_KEYS_CONTROL[keyMap as MAP_KEYS] == key) as MAP_KEYS | null) || null
    }

    export type MAP_KEYS = keyof typeof MAP_KEYS_CONTROL
}

export class Player extends ObjectAbstract {
    stateMove: { [x in PlayerModel.MAP_KEYS]: boolean } = {
        MOVE_DOWN: false,
        MOVE_LEFT: false,
        MOVE_RIGHT: false,
        MOVE_UP: false,
    }

    constructor() {
        super()
    }
}