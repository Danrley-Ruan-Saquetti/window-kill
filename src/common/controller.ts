import { ObserverEmitter, ObserverListener } from './observer/index.js'

export class Controller {
    emitter = new ObserverEmitter()
    listener = new ObserverListener()
}