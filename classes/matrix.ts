import {
    NormalizeMatrixItem,
    MatrixType,
    HasItemCallback
} from '../types/matrix.d.ts'

export class Matrix<T> extends Array<NormalizeMatrixItem<T>> {
    static compare<T>(
        value: NormalizeMatrixItem<T>,
        item: NormalizeMatrixItem<T>
    ) {
        return value.every((v, i) => v === item[i])
    }

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

    get matrix() {
        return Array(...this)
    }

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
