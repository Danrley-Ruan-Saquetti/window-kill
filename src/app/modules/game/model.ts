import { Player } from '../player/model.js'

export namespace GameModel {
    export type Game = {
        isRunning: boolean
        player: Player
    }
}

export class GameRepository {
    private static state: GameModel.Game = {
        isRunning: false,
        player: new Player()
    }

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
