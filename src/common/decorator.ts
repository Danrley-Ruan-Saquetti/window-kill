export function ClassDecorator(constructor: any) { }
export function AttributeDecorator(target: any, key: string) { }
export function MethodDecorator(target: any, key: string, descriptor: PropertyDescriptor) { }
export function ParameterDecorator(target: any, propertyKey?: string | symbol, parameterIndex?: number) { }

export type ClassDecoratorHandler = typeof ClassDecorator
export type AttributeDecoratorHandler = typeof AttributeDecorator
export type MethodDecoratorHandler = typeof MethodDecorator
export type ParameterDecoratorHandler = typeof ParameterDecorator

export class Decorator {
    private constructor() { }

    static Class = ClassDecorator
    static Attribute = AttributeDecorator
    static Method = MethodDecorator
    static Parameter = ParameterDecorator

    static Create = {
        Class: (...handlers: ClassDecoratorHandler[]) => {
            return (constructor: any) => {
                handlers.map(handler => handler(constructor))

                return Decorator.Class(constructor)
            }
        },
        Attribute: (...handlers: AttributeDecoratorHandler[]) => {
            return (target: any, key: string) => {
                handlers.map(handler => handler(target, key))

                return Decorator.Attribute(target, key)
            }
        },
        Method: (...handlers: MethodDecoratorHandler[]) => {
            return (target: any, key: string, descriptor: PropertyDescriptor) => {
                handlers.map(handler => handler(target, key, descriptor))

                return Decorator.Method(target, key, descriptor)
            }
        },
        Parameter: (...handlers: ParameterDecoratorHandler[]) => {
            return (target: any, propertyKey?: string | symbol, parameterIndex?: number) => {
                handlers.map(handler => handler(target, propertyKey, parameterIndex))

                return Decorator.Parameter(target, propertyKey, parameterIndex)
            }
        },
    }
}