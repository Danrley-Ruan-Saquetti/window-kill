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

    updateDimension(args: { width?: number, height?: number } = {}) {
        this.getCanvas().width = args.width || this.getCanvas().width
        this.getCanvas().height = args.height || this.getCanvas().height
    }

    getCanvas() {
        return this.canvasElement
    }

    getContext() {
        return this.context
    }
}