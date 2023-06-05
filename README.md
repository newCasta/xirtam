# Xirtam

Xirtam is a Deno library base on a class call Matrix that let you use it like if it where a matrix


## Installation

Use the class with the deno url

```ts
import { Matrix } from 'https://deno.land/x/xirtam@<tag_name>/mod.ts'
```
    
## Usage/Examples

```ts
import { Matrix } from 'https://deno.land/x/xirtam@<tag_name>/mod.ts'

type Tuple = [number, number]

const matrix = new Matrix<Tuple>([0, 1], [1, 2], [2, 3])

console.log(matrix.hasItem([0, 1])) // Expected: true
```


## License

[MIT](https://github.com/siCasta/xirtam/blob/main/LICENSE)

