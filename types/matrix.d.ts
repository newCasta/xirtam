/*! *************************************************************************
MIT License

Copyright (c) 2023 Juan Sebastian Castañeda Burbano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
************************************************************************** */

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
 * @extends Array
 */
export declare class Matrix<T> extends Array<MatrixItem<T>> {
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
    static compare<T>(value: MatrixItem<T>, ...items: MatrixType<T>): boolean
}
