import {
    NormalizeMatrixItem,
    MatrixType,
    HasItemCallback
} from '../types/matrix.d.ts'

function SetClassNativeCode(): ClassDecorator {
    return function (target) {
        target.toString = function () {
            return `${target.name} { [native code] }`
        }
    }
}

function SetFuncNativeCode(): MethodDecorator {
    return function (_, property, descriptor) {
        if (descriptor.value) {
            descriptor.value.toString = function () {
                return `function ${property as string} () { [native code] }`
            }
        }
    }
}

@SetClassNativeCode()
export class Matrix<T> extends Array<NormalizeMatrixItem<T>> {
    @SetFuncNativeCode()
    static compare<T>(
        value: NormalizeMatrixItem<T>,
        item: NormalizeMatrixItem<T>
    ) {
        return value.every((v, i) => v === item[i])
    }

    @SetFuncNativeCode()
    static compareMany<T>(
        value: NormalizeMatrixItem<T>,
        ...items: MatrixType<T>
    ) {
        return items.every(e => value.every((v, i) => v === e[i]))
    }

    constructor(...arr: MatrixType<T>) {
        for (const item of arr) {
            if (!Array.isArray(item)) {
                throw new Error('Each item needs to be an array')
            }
        }

        super(...arr)
    }

    @SetFuncNativeCode()
    hasItem(predicate: NormalizeMatrixItem<T> | HasItemCallback<T>) {
        if (typeof predicate === 'function') {
            let i = 0

            for (const item of this) {
                if (predicate(item, i, this)) return true

                i++
            }

            return false
        }

        for (const item of predicate) {
            if (typeof item !== 'object' || typeof item !== 'function') {
                return this.some(e => {
                    if (e.length === predicate.length) {
                        return predicate.every((v, i) => v === e[i])
                    } else false
                })
            }
        }

        return false
    }
}
