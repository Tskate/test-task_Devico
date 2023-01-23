const bar = (n) => {
    const matrix = Array(n).fill(Array(n).fill(0))
   return matrix.map((row, i) => row.map((colElem, j) => {
        if (i === j || i + j === n - 1) return 2
        if (j > i && i + j < n - 1 || j < i && i + j > n - 1) return 1
        return colElem
    }))
}

console.log(bar(5))
/*[
[2,1,1,1,2],
[0,2,1,2,0],
[0,0,2,0,0],
[0,2,1,2,0],
[2,1,1,1,2],
] */

console.log(bar(4))
/*[
[2,1,1,2],
[0,2,2,0],
[0,2,2,0],
[2,1,1,2],
]*/