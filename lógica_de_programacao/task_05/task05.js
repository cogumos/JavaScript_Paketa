const sumNumbers = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = i + sum
    }
    return sum
}
console.log(sumNumbers())
