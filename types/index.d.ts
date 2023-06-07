export type NormalizeMatrixItem<T> = [T] extends [Array<unknown>] ? T : T[]
export type MatrixItem<T> = NormalizeMatrixItem<T>
export type MatrixType<T> = Array<MatrixItem<T>>

type MatrixCallback<T> = (
    value: NormalizeMatrixItem<T>,
    index: number,
    obj: MatrixType<T>
) => unknown

export type HasItemCallback<T> = MatrixCallback<T>

/**
 * Class representing a Matrix
 */
export class Matrix<T> {
    /**
     * Create a new Matrix
     * @param arr - The items you want to put into the Matrix
     */
    constructor(...arr: MatrixType<T>)

    /**
     * Gets the Matrix in an Array
     */
    get matrix(): MatrixType<T>

    /**
     * Gets a boolean if an item exists
     * @param item The Matrix item you want to know if it exists
     */
    hasItem(item: MatrixItem<T>): boolean

    /**
     * Gets a boolean if an item exists
     * @param predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found,
     * hasItem immediately returns a boolean
     */
    hasItem(predicate: HasItemCallback<T>): boolean

    /**
     * Gets a boolean if the value and the item match
     * @param value The value to compare
     * @param item The Matrix item to compare
     */
    static compare<T>(value: MatrixItem<T>, item: MatrixItem<T>): boolean

    /**
     * Gets a boolean if the value and all the items match
     * @param value The value to compare
     * @param items The Matrix items to compare
     */
    static compareMany<T>(
        value: MatrixItem<T>,
        ...items: MatrixType<T>
    ): boolean
}
