import { AppController } from './app/app.js'

window.onload = () => {
    try {
        App()
    } catch (err: any) {
        console.error(err)
    }
}

function App() {
    const appController = new AppController({ canvasSelector: 'canvas#game-view' })

    appController.initComponents()
    appController.start()
}
