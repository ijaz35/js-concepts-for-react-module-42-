const number = [32, 45];
// const firstNum= number[0];
// console.log(firstNum);

//array destructuring
// const [age, taka] = number;
// console.log(age, taka);

//we can create an array by using function
function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(22, 222));

//Destructuring array by using function
const [kms, mms] = boxify(22, 220);
// console.log(kms, mms);

//destructuring array from object
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};
const [firstMovie, secondMovie] = student.movies;
// console.log(firstMovie, secondMovie);

//Object destructuring
const { college, age } = { college: 'ct', age: 17 };
// console.log(college, age);

const { studentName, id, height } = {
    studentName: 'romij khan',
    id: 119,
    height: '5 feet 7inch',
    homeTown: 'KHULNA'
};
// console.log(studentName, id, height);


const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
};

const { address, weight } = employee.specification;
console.log(address, weight);

const { brand } = employee?.specification?.watch;
// console.log( brand);


