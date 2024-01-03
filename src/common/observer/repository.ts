import { ModelSchema, ModelSchemaOptions } from '../repository/index.js'
import { EventModelArgs } from './model.js'

export class ObserverRepository extends ModelSchema<EventModelArgs> {
    constructor(options?: ModelSchemaOptions) {
        super('_ObserverEvents', options)
    }
}
