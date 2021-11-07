// const myFirstvar = 1

// const myFunc = () => {
//     console.log(myFirstvar)
// }

// myFunc()
// console.log("Hello World123")
// const test = 5
// console.log('test: ', test);

const isRequired = () => {
    throw new Error('param is required')
}
const print = (num = isRequired()) => {
    console.log(`printing ${num}`)
}
print(2)
print()
