// code start 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter Even Numbers
let evenNumberArray = [];
for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  if (number % 2 == 0) {
    evenNumberArray.push(number);
  }
}
console.log(evenNumberArray);

// Filter Even Numbers
// Easy to understand code,clean code base
// Does not modify the original array – It creates a new array.
const newNumbers2 = numbers.filter((currentElement,index,arr) =>{
     return (currentElement % 2 == 0)
})

console.log(newNumbers2)