//১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?
const birthYear = 1990;
let age = 33;
age = 40;

//২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, ===, !==, >=. <=) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে 

//২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else-if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো 
const numberArray = [11, 2, 33, 45, 67, 43, 21, 12, 34, 23];

for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] <= 10) {
        // console.log('it belongs to 1 to 10');
    }
    else if (numberArray[i] <= 20) {
        // console.log('it belongs to 11 to 20');
    }
    else if (numberArray[i] <= 30) {
        // console.log('it belongs to 21 to 30');
    }
    else {
        // console.log('it belongs to 31 to 50');
    }
}
//৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো?
const array = [12, 33, 44, 55, 66, 77, 88, 90];
// console.log(array.length);
// console.log(array.indexOf(33));
// console.log(array.includes(44));
array.push(555);
array.push(555);
array.push(555);
// console.log(array);
array.pop();
// console.log(array);

//৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো।  
let i = 1;
while (i <= 10) {
    // console.log(i);
    i++;
}
for (let x = 0; x <= 10; x++) {
    // console.log(x);
}
//৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। 
function adder(x, y) {
    return x + y;
}
const result = adder(2, 3);
// console.log(result);

//৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়। 
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
}
bird.weight = 23;
bird['weight'] = 33;
const kg = 'weight';
bird[kg] = 44;
console.log(bird.weight);


