// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let result = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        result += array[i];
    }
}
console.log(result);

let positive = array.filter(elem => (elem > 0));
console.log(positive.length);


// Знайти мінімальний елемент масиву та його порядковий номер.

let min = Math.min(...array);
console.log(min);
console.log(array.indexOf(min));

// Знайти максимальний елемент масиву та його порядковий номер.
let max = Math.max(...array);
console.log(max);
console.log(array.indexOf(max));

// Визначити кількість негативних елементів.
let negative = array.filter(elem => (elem < 0));
console.log(negative.length);

// Знайти кількість непарних позитивних елементів.
let positiveOdd = positive.filter(elem => (elem % 2 != 0));
console.log(positiveOdd.length);

// Знайти кількість парних позитивних елементів.
let positiveEven = positive.filter(elem => (elem % 2 == 0));
console.log(positiveEven.length);

//  Знайти суму парних позитивних елементів.
let sumPositiveEven = 0;
for (const i of positiveEven) {
    sumPositiveEven += i;
}
console.log(sumPositiveEven);

// Знайти суму непарних позитивних елементів.
let sumPositiveOdd = 0;
for (const i of positiveOdd) {
    sumPositiveOdd += i
}
console.log(sumPositiveOdd);

// Знайти добуток позитивних елементів.
let prodPositive = 1;
for (const i of positive) {
    prodPositive *= i
}
console.log(prodPositive);

// Знайти найбільший серед елементів масиву, остальні обнулити.
let maxElementIndex = array.indexOf(max);
for (let i = 0; i < array.length; i++) {
    if (i != maxElementIndex) {
        array[i] = 0;
    }
}
console.log(array);