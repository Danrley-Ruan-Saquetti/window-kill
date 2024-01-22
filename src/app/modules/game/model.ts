import { Player } from '../player/model.js'

export namespace GameModel {
    export type Game = {
        isRunning: boolean
        player: Player
    }

    export enum MAP_KEYS_CONTROL {
        PAUSE = 'esc',
    }

    export function getKeyPressed(key: string): MAP_KEYS | null {
        const keyPressed = Object.keys(MAP_KEYS_CONTROL).find(keyMap => MAP_KEYS_CONTROL[keyMap as MAP_KEYS] == key) as MAP_KEYS || null

        return keyPressed
    }

    export type MAP_KEYS = keyof typeof MAP_KEYS_CONTROL
}

export class GameRepository {
    private static state: GameModel.Game = {
        isRunning: false,
        player: new Player()
    }
    GLOBAL_MAP_KEY_PRESS_DOWN: { [x in GameModel.MAP_KEYS]: () => void | any } = {
        PAUSE: () => this.pause(),
    }

    pause() { }

    getPlayer() {
        return this.state.player
    }

    get state() {
        return GameRepository.state
    }

    set state(state: GameModel.Game) {
        GameRepository.state = state
    }
}
