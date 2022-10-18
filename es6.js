const bird = {
    birdName: 'eagle',
    color: 'black & white',
    height: 15,
    weight: 10,
    food: ['fish', ' meat', 'frog', 'snake'],
    children: {
        firstSon: 'eddi',
        secondSon: 'steeve',
        daughter: 'chen',
    }
};
// template string
const info = `Today I saw an ${bird.birdName} which color is ${bird.color}. It eats ${bird.food[3]} has three children and her daughter name is ${bird.children.daughter}`;
// console.log(info);

const numberArray = [11, 22, 33, 55, 66, 77];
const newArray = [...numberArray, 888];

numberArray.push(449);
numberArray.push(449);
numberArray.push(449);
// console.log(...numberArray);
// console.log(newArray);

//৩.১. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে। 
const return9 = () => 9;
// console.log(return9());

//৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে। 
const multiply = (num) => num * 12;
// console.log(multiply(12));

//৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

const twoParameter = (x, y) => (x + y) % 4;
// console.log(twoParameter(2, 2));

//৩.৪ একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
const doMath = (x, y) => {
    const num1 = x + 5;
    const num2 = y + 5;
    return num1 * num2;

}
// console.log(doMath(3, 2));

//৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
const { name, age } = { name: 'alu', age: 14 };
// console.log(name, age);
const { name1, age1 } = { id: 12, name1: 'aluu', salary: 3400, age1: 24 };
console.log(name1, age1);





