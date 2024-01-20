import { Coordinates } from '../../../types'
import { PlayerModel } from '../player/model.js'

export namespace ObjectModel {
    export type Model = {
        id: number
        position: Coordinates
    }

    export function generateId() {
        const VALUE_MAX = 9999
        const now = new Date()

        const idString = `${now.getFullYear()}${`${now.getMonth() + 1}`.padStart(2, '0')}${`${Math.floor(Math.random() * VALUE_MAX)}`.padStart(
            `${VALUE_MAX}`.length,
            '0'
        )}`

        return Number(idString)
    }
}

export class ObjectAbstract implements PlayerModel.Model {
    id = ObjectModel.generateId()
    position = { x: 0, y: 0 }
}