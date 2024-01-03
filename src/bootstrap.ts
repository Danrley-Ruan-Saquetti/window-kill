import { AppController } from './modules/app.controller.js'

export function Bootstrap() {
    const canvasDom = document.querySelector<HTMLCanvasElement>('canvas[id="game-view"]')

    if (!canvasDom) {
        throw new Error('Canvas not defined')
    }

    const app = new AppController({ canvas: canvasDom })

    app.start()

    return app
}