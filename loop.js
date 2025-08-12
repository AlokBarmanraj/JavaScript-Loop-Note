//----------JavaScript Loop-----------//


let car = ['BMW', 'TOYTA', 'Audi', 'Maserati', 'Cadillac', 'Honda', 'Ferrari', 'Lamborghini'];
car.push('Dodge');     //নতুন করে অ্যারেতে আইটেম অ্যাড//

console.log(car[0]);
console.log(car[6]);         //আগে আমরা  এই ভাবে নিয়েছি । তবে এই ভাবে নিলে যদি কোন ডাটা ইন এবং আউট করি তখন সমস্যা  হতে পারে । তবে আমরা এই ভাবে না করে {For loop} ব্যবহার করে করতে পারি সব গুলো এক সাথে দেখানোর জন্য//


//For Loop// ?Arry নিয়ে কাজ করতে হয় //
for (let start =0; start<7; start++) {
    console.log(car);
};       //এখানে সব মান গুলোকে 7 বার করে দেখাচ্ছে । এভাবে না দেখাতে চাইলে //

for (let start =0; start<7; start++) {
    console.log(car[start]);
};       //এখানে সব মান গুলোকে 7 বার করে দেখাচ্ছে না । শুধু মান গুলোকে সিরিয়ালে দেখাচ্ছে //

for (let start =0; start<car.length; start++) {
    console.log(car[start]);
};      //নতুন করে অ্যারেতে আইটেম অ্যাড করলে এবং অ্যারের সব আইটেম দেখতে চাইলে (start<7) স্টাটিক নাম্বার না দেখিয়ে ডাইনমিক নাম্বার (start<car.length) দেখাতে হবে //



//For In Loop // ?Object নিয়ে কাজ করতে হয়//
let person ={
    name: 'Alok',
    age : 21,
    city: 'Rajshahi',
    country: 'Bangladesh'      //For In Loop এর মধ্যে মান যোগ করা যায় //

};

for (let personName in person){
    console.log(person[personName]);
};              //person শুধু মান দেখতে চাইলে //

for (let personName in person){
    console.log(personName + ': ' + person[personName]);
};             //name: Alok, age: 21 , country: Bangladesh  মান দেখতে চাইলে //

for (let personName in person){
    let capitalLetter = personName.charAt(0).toUpperCase() + personName.slice(1);
    console.log(capitalLetter + ': ' + person[personName]);
};             //Name: Alok, Age: 21, Country: Bangladesh  এই ভাবে মানের প্রথম অক্ষর বড় হাতের দেখতে চাইলে //



//For-Each Loop // For Loop এর পরিবর্তে For-Each Loop ব্যবহার করতে পারি //
let cars = ['BMW', 'TOYTA', 'Audi', 'Maserati', 'Cadillac', 'Honda', 'Ferrari', 'Lamborghini'];
cars.push('Dodge');  //নতুন করে অ্যারেতে আইটেম অ্যাড//

cars.forEach(function(all){
    console.log(all);
});    



//For Of loop //
let cars1 = ['BMW', 'TOYTA', 'Audi', 'Maserati', 'Cadillac', 'Honda', 'Ferrari', 'Lamborghini'];
cars1.push('Dodge');  //নতুন করে অ্যারেতে আইটেম অ্যাড//

for (let great of cars1){
    console.log(great);
};




//While loop //
let num = 0;
while (num<10) {
    console.log(num);
    num++;           //এখানে While loop এর মধ্যে (num++;) must be দিতে হবে । না দিলে কম্পিউটার slow হয়ে যাবে । শুধু slow না এক সময় কম্পিউটার কাজ করা বন্ধ করে দিবে । এই (num++;) না দিলে যেই সাইটে কাজ করা হবে সেই সাইট slow হয়ে যাবে //
};