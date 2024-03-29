export namespace CanvasModel {
    export type Canvas = HTMLCanvasElement
    export type Context = CanvasRenderingContext2D
}

export class CanvasRepository {
    private static canvas: CanvasModel.Canvas = null as any
    private static context: CanvasModel.Context = null as any

    setCanvas(canvas: CanvasModel.Canvas) {
        if (!canvas) {
            throw new Error('Canvas not defined')
        }

        CanvasRepository.canvas = canvas
        CanvasRepository.context = canvas.getContext('2d') as CanvasModel.Context

        if (!CanvasRepository.context) {
            throw new Error('Context not defined')
        }
    }

    get canvas() {
        return CanvasRepository.canvas
    }

    set canvas(canvas: CanvasModel.Canvas) {
        CanvasRepository.canvas = canvas
    }

    get context() {
        return CanvasRepository.context
    }
}
