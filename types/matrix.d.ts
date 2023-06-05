export type NormalizeMatrixItem<T> = [T] extends [Array<unknown>] ? T : T[]

export type MatrixType<T> = Array<NormalizeMatrixItem<T>>

type MatrixCallback<T> = (
    value: NormalizeMatrixItem<T>,
    index: number,
    obj: MatrixType<T>
) => unknown

export type HasItemCallback<T> = MatrixCallback<T>
