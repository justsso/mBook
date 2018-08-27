var a = {
    name: '123',
    xiaoa: {
        arr: ['x','y','z']
    }
}
var b = 'b'

var sum = Object.assign({}, a,b)
console.log(sum)