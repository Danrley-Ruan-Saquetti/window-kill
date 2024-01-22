import { Coordinates } from '../../../types'

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

export class ObjectAbstract implements ObjectModel.Model {
    id = ObjectModel.generateId()
    position = { x: 0, y: 0 }

    protected fixLimitPosition({ height, width }: { height: number, width: number }) {
        const maxWidth = window.innerWidth
        const maxHeight = window.innerHeight

        if (this.position.x - (width / 2) < 0) {
            this.position.x = width / 2
        } else if (this.position.x + (width / 2) > maxWidth) {
            this.position.x = width / 2
        }
        if (this.position.y - (height / 2) < 0) {
            this.position.y = height / 2
        } else if (this.position.x + (height / 2) > maxHeight) {
            this.position.y = height / 2
        }
    }
}