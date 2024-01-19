export namespace GameModel {
    export type Game = {
        isRunning: boolean
    }
}

export class GameRepository {
    private static state: GameModel.Game = {
        isRunning: false,
    }

    update(state: Partial<GameModel.Game>) {
        GameRepository.state = {
            ...GameRepository.state,
            ...state,
        }
    }

    get state() {
        return GameRepository.state
    }
}
