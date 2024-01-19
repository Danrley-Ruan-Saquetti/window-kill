import { Dimension } from '../../../types'

export namespace CanvasModel {
    export type Canvas = HTMLCanvasElement
    export type Context = CanvasRenderingContext2D
}

export class CanvasRepository {
    private static canvas: CanvasModel.Canvas = null as any
    private static context: CanvasModel.Context = null as any

    get canvas() {
        return CanvasRepository.canvas
    }

    set canvas(canvas: CanvasModel.Canvas) {
        CanvasRepository.canvas = canvas
    }

    get context() {
        return CanvasRepository.context
    }

    set context(context: CanvasModel.Context) {
        CanvasRepository.context = context
    }
}
