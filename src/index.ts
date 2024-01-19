import { AppController } from './app/app.js'

window.onload = App

function App() {
    const appController = new AppController({ canvasSelector: 'canvas#game-view' })

    try {
        appController.start()
    } catch (err: any) {
        console.error(err)
    }
}
