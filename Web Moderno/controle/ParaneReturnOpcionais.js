function area(l, a) {
    const area = l * a
    if (area > 20) {
        console.log(`Valor acima: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,2,6,6,5,5,8))
console.log(area(2,2))
console.log(area(5,5))
