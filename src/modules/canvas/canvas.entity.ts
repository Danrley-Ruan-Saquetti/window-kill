export class CanvasEntity {
    private canvasElement: HTMLCanvasElement
    private context: CanvasRenderingContext2D

    constructor(canvasElement: HTMLCanvasElement) {
        if (!canvasElement) {
            throw new Error('Canvas HTML element is not defined')
        }

        this.canvasElement = canvasElement
        this.context = canvasElement.getContext('2d') as CanvasRenderingContext2D
    }

    getCanvas() {
        return this.canvasElement
    }

    getContext() {
        return this.context
    }
}