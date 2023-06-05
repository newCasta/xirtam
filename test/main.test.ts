import { assertEquals } from 'assertEquals'
import { Matrix } from '../mod.ts'

Deno.test('Matrix has item', () => {
    const matrix = new Matrix([1], [2], [3])

    assertEquals(matrix.hasItem([4]), false)
})

Deno.test('Compare two arrays', () => {
    const arr1 = [1, 2]
    const arr2 = [1, 3]
    const result = Matrix.compare(arr1, arr2)

    assertEquals(result, false)
})

Deno.test('Compare many arrays', () => {
    const arr1 = [1, 2]
    const arr2 = [1, 3]
    const arr3 = [1, 4]
    const result = Matrix.compareMany(arr1, arr2, arr3)

    assertEquals(result, false)
})
