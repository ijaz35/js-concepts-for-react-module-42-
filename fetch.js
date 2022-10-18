//1.JSON=> stringify, parse

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};
const studentStringify = JSON.stringify(student);
// console.log(studentStringify);

const studentParse = JSON.parse(studentStringify);
// console.log(studentParse);

//2. fetch()
function getItems() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}

//3.async await
/* const getItems = async () => {
    const url = `https://jsonplaceholder.typicode.com/todos/1`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
} */

//4.keys, values, entries
const keys = Object.keys(student);
// console.log(keys);
const values = Object.values(student);
// console.log(values);
const entries = Object.entries(student);
// console.log(entries);

//forEach() map()
const numbers = [23, 54, 67, 87, 23, 78];
// numbers.forEach(num => console.log(num));
const result = numbers.map(num => num * 2);
// console.log(result);

//add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
const newItem = { name: 'webcam', price: 10000, brand: 'KSS' };

//copy products array and then add a new item
const newProducts = [...products, newItem];
// console.log(newProducts);

//create a new array without one specific item 
// remove phone means create a new array without the phone

const remaining = products.filter(p => p.name !== 'watch');
console.log(remaining);

const remaining2 = newProducts.filter(p => p.name !== 'watch');
console.log(remaining2);


