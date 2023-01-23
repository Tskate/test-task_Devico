const foo = (obj) => {
    typeof obj.left === 'object' ? foo(obj.left) : obj.left === 1 ? obj.left = 0 : obj.left = 1
    typeof obj.right === 'object' ? foo(obj.right) : obj.right === 1 ? obj.right = 0 : obj.right = 1

}

const d = {
    left: {
        left: {
            left: 1,
            right:
                {
                    left: 0,
                    right: 1,
                },
        },
        right: {
            left: 0,
            right: 1,
        },
    },
    right: 1,
}
foo(d)
console.log(JSON.stringify(d))
