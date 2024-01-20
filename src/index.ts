import { AppController } from './app/app.js'

window.onload = App

function App() {
    const appController = new AppController({})

    try {
        appController.start({ playerName: 'Dan Ruan' })
        console.log(appController.getState())
    } catch (err: any) {
        console.error(err)
    }
}
