import { ObserverEmitter, ObserverListener } from './observer'

export class Controller {
    emitter = new ObserverEmitter()
    listener = new ObserverListener()
}