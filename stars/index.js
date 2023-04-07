const numberElement = document.getElementById('number');
const button = document.getElementById('button');
const resElement = document.getElementById('res');

console.log(number);
console.log(button);

const square = (numb) => numb * numb;

button.addEventListener('click',() => {
    const number = numberElement.value; 
    const result = square(number);
    resElement.setAttribute('value',result);
    // resElement.value = console.log(result);
    console.log(result);
})
