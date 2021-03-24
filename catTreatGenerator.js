const catTreats = [
    'Turkey',
    'Salmon',
    'Tuna',
    'Beef',
    'Cheese',
]

const catTreatGenerator = function(array) {
    const randomIndex = [Math.floor(Math.random() * array.length)];
    return array[randomIndex]
}
console.log(catTreatGenerator(catTreats))




