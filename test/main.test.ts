import { assertEquals } from 'assertEquals'
import { Matrix } from '../mod.ts'

Deno.test('Matrix has item', () => {
    const matrix = new Matrix([1], [2], [3])

    assertEquals(matrix.hasItem([4]), false)
})

Deno.test('compare two arrays', () => {
    const arr1 = [1, 2]
    const arr2 = [1, 2]
    const result = Matrix.compare(arr1, arr2)

    assertEquals(result, true)
})

Deno.test('compare many arrays', () => {
    const arr1 = [1, 3]
    const arr2 = [1, 3]
    const arr3 = [1, 3]
    const result = Matrix.compareMany(arr1, arr2, arr3)

    assertEquals(result, true)
})

Deno.test('matrix property returns an array', () => {
    const matrix = new Matrix([1], [2], [3])
    const array = [[1], [2], [3]]
    const bool = JSON.stringify(matrix.matrix) === JSON.stringify(array)

    assertEquals(bool, true)
})

Deno.test('matrix property returns array with object Date', () => {
    const matrix = new Matrix([new Date()], [new Date()], [new Date()])
    const array = [[new Date()], [new Date()], [new Date()]]
    const bool = JSON.stringify(matrix.matrix) === JSON.stringify(array)

    assertEquals(bool, true)
})
