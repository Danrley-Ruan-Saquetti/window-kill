import { AppController } from './app/app.js'

window.onload = App

function App() {
    const appController = new AppController({ canvasSelector: 'canvas#game-view' })
}
