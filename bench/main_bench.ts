import { Matrix } from '../mod.ts'

Deno.bench('Matrix has item', () => {
    const matrix = new Matrix([1], [2], [3])

    matrix.hasItem([1])
})

Deno.bench('Compare two arrays', () => {
    const arr1 = [1, 2]
    const arr2 = [1, 2]

    Matrix.compare(arr1, arr2)
})

Deno.bench('Compare many arrays', () => {
    const arr1 = [1, 2]
    const arr2 = [1, 2]
    const arr3 = [1, 2]

    Matrix.compareMany(arr1, arr2, arr3)
})
