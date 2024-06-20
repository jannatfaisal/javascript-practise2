// alert("jannatfaisal")

// automatically declared
//    x=30;
//    y=20;
//   u = x - y;
// document.getElementById("demo").innerHTML =
// "The Value of Z is:   "+ u;

// using var

// var a=30;
// var b=40;
// var c=30;
// var d=10
// var f=a-b+c+d;

// document.getElementById("head").innerHTML =
// "The answer is: " +f;

// using const

// const e=110;
// const f=20;
// const d=e-f;

// document.getElementById("hh").innerHTML =
// "The  is: " -d; 


// document.getElementByconsole("h").innerHTML= "hello jannat"
// console.log="hellojannat"


// Arithmetic Operators Example

// let a = 3; // a ko 3 ke barabar set karte hain.
// let x = (100 + 50) * a; // Yahan, 100 aur 50 ko add kar ke phir a ke saath multiply kiya jata hai.
// console.log(x)

// Assignment

// let x = 10;
// x += 5;
// console.log(x)


// comparison

// let text1="a"
// let text2="b"
// let result =text1 <  text2;
// console.log(result)

////"<" ek comparison operator hai jo do values ko compare karta hai aur batata hai ke left side wali value right side wali value se choti hai ya nahi.

// Detail:

// Isko "Less Than" ya "Chhota Hai" kehte hain.
// Agar left side wali value right side wali value se choti hai, toh "<" true (ya 1) ko represent karega.
// Agar left side wali value right side wali value se badi ya equal hai, toh "<" false (ya 0) ko represent karega.
// Iska istemal conditional statements mein, jaise "if" aur "while" mein hota hai, jahan humein kisi condition ko check karna hota hai.



// let text1 = "20";
// let text2 = "5";
// let result = text1 > text2;
// console.log(result)

// ">" ek comparison operator hai jo do values ko compare karta hai aur batata hai ke left side wali value right side wali value se badi hai ya nahi.

// Detail:
// - Isko "Greater Than" ya "Bada Hai" kehte hain.
// - Agar left side wali value right side wali value se badi hai, toh ">" true (ya 1) ko represent karega.
// - Agar left side wali value right side wali value se choti ya equal hai, toh ">" false (ya 0) ko represent karega.
// - Iska istemal conditional statements mein, jaise "if" aur "while" mein hota hai, jahan humein kisi condition ko check karna hota hai.


// concatenate

// let text1="jannat";
// let text2="faisal";
// let text3 ="is";
// let text4 ="a";
// let text5 ="Web";
// let text6="developer"
// let result =   text1 +  "  " +text2+ " " +text3 +"   " +  text4+   "  " +text5+"   "+text6+" "

// console.log(result);

/* <p>The assignment operator += can concatenate strings.</p> */

// let text1="what a very";
// text1+="nice day";
// console.log(text1)


//  text1="Web";
//  text1+="developer";
// console.log(text1);


// Adding Strings and Numbers
// Adding two numbers, will return the sum, but adding a number and a string will return a string:


// let x=10+10;
// let y ="5"+5;
// let z= "hello" +5;
// console.log(x+y+z);


// let d =(5*2)+(10-3);
// console.log(d); //17

// let c = 6+(4 * 3) - 5;
// console.log(c); //13

// let y= (9-2) * 3+8 ;
// console.log(y); //29

// let a= 7+ (6/2)- (4*2);
// console.log(a); //2

// let b= (10 - 2) * (5 - 1) / 2;
// console.log(b); //16

// let e =4 * (8 - 3) + 2;
// console.log(e); //22

// let f= (12 / 4) * (6 - 2) + 5;
// console.log(f); //17

// let g = 3 * (7 - 4) + (6 / 2);
// console.log(g); //12

// let h=(9 + 3) - (5 * 2) + 4;
// console.log(h); //6

// let i=(20 / 4) * (2 + 3);
// console.log(i); //25


//javascript chp 1,2,3

// alert("hello jannat faisal, you are 20 years old");


// var firstName="Ameen";
// var LastName="Ameen";
// var age=20;

// alert("hello" + firstName+" " + lastName + ", You are " + age+ "Years old");


// chp1 Q=1

// var firstName="jannat";

// // Q=2

// var lastName="faisal";

// // Q=3

// var age=20;

// Q=4 print message

// alert("Hello" + firstName +" " +lastName+", You are "+age+" years old");

// console.log('
//     var firstName ="jannat";
//     var lastName ="faisal";
//     var age=20;

//     alert("Hello" + firstName +" " +lastName+", You are "+age+" years old");

// ');


// chp 4 5 6

// alert("variable b:6");



// var a = 2;
// var b = a++ + ++8 - --8+8--;
// alert("variable a: " + a);
// alert("variable b: " + b);

// prompt chp9

// var spec = prompt("Your species?", "human");


// prompt("what is your name?", "jannat");

//  var question = "Your species?";
// var defaultAnswer = "human";
//  var spec = prompt(question, defaultAnswer);

//  var q="what's your age";
//  var a="";
//  var print=prompt(q,a);


// if statement 

// var x = prompt("Where does the Pope live?");
//  if (x === "Vatican") {
//  alert("Correct!");
//  }

// var age = 18;

// if (age >= 18) {
//     console.log(17); // Agar age 18 ya usse zyada hai, ye print hoga.
// }






// Umar ka input lein
// var umar = prompt("Aapki umar kya hai?");

// // Umar ko integer mein convert karein
// umar = parseInt(umar);

// // Agar umar 18 ya usse zyada hai
// if (umar >= 18) {
//     alert("true."); // Agar umar 18 ya usse zyada hai, ye print hoga.
// } else {
//     alert("false."); // Agar umar 18 se kam hai, ye print hoga.
// }



// var jannat =prompt("what's your age");
//  jannat =parseInt(jannat);
//   if(jannat >= 18){

//   alert("true."); 
// }else{
//     alert("false.");
//   }


// var dream=prompt("what is your dream");
//  dream= dream

// if  ("web development") {
//   alert("wow");

// }
// else{
//   alert("awww");
// }




// Prompt the user to enter their dream
// var dream = prompt("What is your dream?");

// // Convert the input to lowercase for case-insensitive comparison
// dream = dream.toLowerCase();

// // Check if the dream is "web development"
// if (dream === 'web development') {
//     // If the dream is "web development"
//     console.log('Great choice! Web development is amazing!');
// } else {
//     // If the dream is not "web development"
//     alert('aww');
// }


// var dream = prompt ("what is your dream?");
//  dream=dream

//  if (dream== "web development") {

//   alert("Great choice! Web development is amazing");

//  }
//  else{
//   alert("awww");
//  }



// IF ELSE STATEMENT 


// var a=prompt("what is your name");

// if (a== "jannat") {
// alert("nice name");
// }
// else{
//   alert("awww")
// }

// var dream=prompt("what is your dream");

// if (dream== "web development") {

//   alert("wow nice choice");

// }else{


//   alert("no scope");}



// ELSE IF MULTIPLE CONDITIONS KE LIYE USE HOTA HE 


// var condition= prompt("Agar mujy kamyabi chaiye tou me kiya karongi?");

// if (condition=== "parhongi acha sa") {
//   console.log("tou kamyab ho jao gi.");

// } 

// else if
//   (condition=== "roz parhongi"){
// console.log("tou roz kamyab ho gi insha allah"); 
// }

// else if
// (condition=== "practise achi karongi"){
// console.log("tou aur kamyab ho gi");
// }

// else {
//   console.log("tou kuch na ho paye ga tumse");
// }


// var conditions=("Agar mujy kamyabi chaiye tou me kiya karongi?");

// if (conditions=>("parhongi acha sa")) {

//   alert(" tou kamyab ho jao gi.");

// }else if(conditions=>("practise achi karongi."));

// {

// alert("tou aur kamyab ho gi");
// }



// && end operator 

// var a= 14;
// var b= 20

// if (a>=14 && b>=24) {
//   document.write(false);
// }
// else{
//   document.write(true)
// }





// var religion= prompt("what is your religion?");

// var age= prompt("what is your age?");

// if (religion=="muslim") {
//   alert("ok ap admition le sakte");
// }else if(age>=19 )
// alert("le skate hein");

// else{
//   alert("no sorry");
// }

// nested if 

// var age= prompt("apki age  kiya he?");
// var hasvotercard=prompt("kiya apke pass voter card he?");

// if (age>=15) {


//   if (hasvotercard=="yes") {
//     document.write("ok")

//   }
//   else{
//     document.write("no")
//   }

// }
// else{
//   document.write("nh de skate");
// }


// logical oprators


// if ((age >64 || age> 30 && age>17) || resident"u.s") {

// }


// arrays

// empty declare
// let myArray = [];

// console.log(myArray);

// Initial values ke sath array declare karna:

// let fruits = ["apple", "banana", "mango"];
// console.log(fruits);

// Array ke elements ko access karna:
// Array ke elements ko access karne ke liye index ka use hota hai. Index zero se start hota hai.

// let firstFruit = fruits[0];  // "apple"
// let secondFruit = fruits[1]; // "banana"
// let thirdfruit = fruits[2];  //mango


// console.log(firstFruit, secondFruit, thirdfruit);

// Array mein naya element add karna:

// Array mein naya element push method se add kiya ja sakta hai.

// fruits.push("orange");

// console.log(fruits);


// Array ke elements ko modify karna:
// Aap array ke kisi bhi element ko uske index ke zariye modify kar sakte hain.

// fruits[1] = "kiwi";  // "banana" ki jagah "kiwi" ho jayega

// console.log(fruits);

// Summary:
// JavaScript mein array ek useful tool hai jo humein ordered collection of items ko store karne
//  aur manage karne mein madad karta hai.Iska basic syntax asaan aur simple hai, 
//  aur array ke methods aur properties isko powerful aur flexible banate hain.


// array practise

// var fav_things=["nature","sea-side","red-rose","flowers","perfumes"];

// console.log(fav_things);

// index
//  console.log(fav_things[2]);

//  multiple data types 

// var data_types=[1,"fish",11,"dec",]

// console.log(data_types);

// methods

// pop last element delete karay ga

// console.log(fav_things.pop());

// push last me element add karay ga 

// console.log(fav_things.push("love"));

// shift first element dlt karay ga
// console.log(data_types.shift());

// unshift firts per element add kar dega

// console.log(data_types.unshift("hey"));
//  splice se beech ke shuru ke kisi bhi element ko dlt kar sakte hein index ke zarye 
// dlt kar ke uss jag kiya add karwana he wo bhi add karwa skate hein
// console.log(fav_things.splice(1,1, "gajre"));

// var name=["jannat","hani","atiqa","aniqa","laiba","iraj","aisha"];

// var nayarray= name.slice["hani","atiqa"]

// document.write( nayarray);


// for loop

// let queen=["jannat"];

// `for` loop ka basic syntax:
// for (let i = 0; i < 100; i++) {
//     console.log(queen ); // Yahan 'Aapka Naam' ko apne desired naam se replace karein
// }

// let statement=["jannat love mamma"];
// for(let i=10; i < 1000;i++){
//     console.log(statement);
// }


// let person=[" ahmed"];

// for(let i= 0; i < 3000;i++){
//     console.log(person);
// }


//  string ke har character ko alg alg print karay ga 
// let myString = "Hello";

// for (let i = 0; i < myString.length; i++) {
//     console.log(myString[i]);
// }

// let myString = ["Hello"];
// let newString = "";

// for (let i = 0; i < myString.length; i++) {
//     newString += myString[i];
// }

// console.log(newString);


// conactenate kar ke dega bina kisi character ko alg kiye
// let person=["jannat"];
// let string='';

// for (let i = 0; i < person.length; i++) {
//     string += person[i];

//     console.log(string);

// }

// multidimentional array 

// let multiarray=[
//     ["hello","world"],
//     ["how","are","you"]
// ];

// console.log(multiarray);

// 19
// for loops:
// Flags, Booleans, array length,
// and loopus interruptus





// var citytocheck=prompt("eneter the cleanist city");
// var cleanistcity=["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var matchfound= "no";

// for(let i=0; i <= 4;i++){
//     if (citytocheck=== cleanistcity [i]) {
//         matchfound="yes"

//         alert("one of the cleanist city");


//     }
// }



// if (matchfound==="no") {
//     alert("its not in the list");
// }


// let name=['jannat','hanifa','ariba','areeba','ayesha','aisha'];

// let isfound= false;

// name to search for

// let targetname="jannat";

// for (let i = 0; i < name.length; i++) {
//    if (name[i] == targetname) {
// set the flag to true if the name is found
// isfound=true;
// break the loop as we found the number 
//     break;
//    }    
// }

// // output the result 

// if (isfound) {
//     console.log("the name" + targetname + "is found in the array.");

// } else{
//   console.log  ("the name" + targetname + "is  not found in the array.");
// }

// Array of numbers
// let numbers = [1, 3, 5, 7, 9, 11];

// Flag to indicate if the number is found
// let isFound = false;

// Number to search for
// let target = 7;

// For loop to iterate through the array
// for (let i = 0; i < numbers.length; i++) {
//     // Check if the current number is the target number
//     if (numbers[i] === target) {
//         // Set the flag to true if the number is found
//         isFound = true;
//         // Break the loop as we found the number
//         break;
//     }
// }

// Output the result
// if (isFound) {
//     console.log("The number " + target + " is found in the array.");
// } else {
//     console.log("The number " + target + " is not found in the array.");
// }

// nested loop


// for (var i = 0; i < 2; i++) {       // Outer loop
//     for (var j = 0; j < 3; j++) {   // Inner loop
//         console.log("i: " + i + ", j: " + j);
//     }
// }


//  for (var i = 2; i < 11; i++) {   // Outer loop for rows
    //  for (var j = 1; j < 11; j++) {       // Inner loop for columns
    //    var result = i * j;
    //    console.log(i + " * " + j + " * " + result);

    // console.log(i);


    // }


    // nested loop


//     for(var i= 2; i< 16; i++){
//         for (var j= 1;j<11; j++){
            
//           for (var k = 12; k< 14; k++)  
//             {


//               for(var l= 11; l< 16; l++){
//  var result1= i*j*k*l;

//  console.log(i+ " x " + j + " x " + k + l+ " x "+ " = " + result);

//     }
// }
// }
// }


// console.log("----------------------"); // Separate rows for clarity
// }

// var fruits = ["Apple", "Banana", "Cherry"];
// var colors = ["Red", "Yellow", "Green"];

// for (var i = 0; i < fruits.length; i++) {       // Outer loop for fruits
//     for (var j = 0; j < colors.length; j++) {   // Inner loop for colors
//         console.log(fruits[i] + " is " + colors[j]);
//     }
// }

// Fruits array containing objects with name and color properties


// const fruits=[
//     {name:'mango', color:'yellow'},
//     {name:"cherry", color:'red'},
//     {name:'mellon',color:'white'}
// ];
// Nested loops to iterate through each fruit and check its properties
// for(let i=0;i< fruits.length; i++){
//     const fruit=fruits[i];
//     console.log("name:",fruit.name);
//     console.log("color:",fruit.color);


// If the fruit is red, print "Cherry"

// if(fruit.color==='red'){
//     console.log("cherry");
// }

// If the fruit is yellow, print "Banana" or "Mango"
//  if (fruit.color==='yellow') {
//     if(fruit.name ==='banana'){
//     console.log("banana");
//  }else if(fruit.name==='mango'){
//     console.log("mango");
//  }}
// }


// const details=[
//     {Name: 'jannat'},
//     {Last_Name:'Muhammad_Faisal'},
//     {profession:"Web Developer"},
//     {Age:"20"}

// ];




// for(let i=0; i< details.length; i++){
//     const detail=details [i];
//     console.log("Name:",detail.Name);
//     console.log("Last_Name:",detail.Last_Name);
//     console.log("Profession:",detail.profession);
//     console.log("Age:",detail.Age);

// // array ke har object se condition ko exract karna

//     if (detail.Name) Name = detail.Name;
//     if (detail.Last_Name) Last_Name = detail.Last_Name;
//      if (detail.profession) profession = detail.profession;
//      if (detail.Age) Age = detail.Age;
//  }


//     if(detail.Name==="jannat"){
//         console.log("Muhammad_Faisal");
//     }

//     if(details.Last_Name==="Muhammad_Faisal"){
//         console.log("jannat");
//     }

//     if(details.Age==="20"){
//         console.log("20");
//     }

//     else if(details.profession==="Web Developer"){
//         console.log("web developer");
//     }

// };


// const details = [
//     {Name: 'jannat'},
//     {Last_Name: 'Muhammad_Faisal'},
//     {profession: 'Web Developer'},
//     {Age: '20'}
// ];

// let Name, Last_Name, profession, Age;

// Array ke har object se properties extract karna
// for (let i = 0; i < details.length; i++) {
//     const detail = details[i];
//     if (detail.Name) Name = detail.Name;
//     if (detail.Last_Name) Last_Name = detail.Last_Name;
//     if (detail.profession) profession = detail.profession;
//     if (detail.Age) Age = detail.Age;
// }


// // multiple unfamiliar operators

// var user={
//     name:'jannat',
//     age:20,
//     isverified:false
// };

// increment age
// user.age++;

// check if user is an adult 

// var isadult= (user.age>=18)? "adult":"minor";

// set default name if name is null or  undefined

// var displayName=user.name?? "guest";

// console.log("User's Age",user.age);
// console.log(" is User's Adult",isadult);
// console.log("display name",displayName);

// // Properties ko print karna
// console.log("Name:", Name);
// console.log("Last_Name:", Last_Name);
// console.log("Profession:", profession);
// console.log("Age:", Age);

// Conditions ko check karna
// if (Name === "jannat") {
//     console.log("Muhammad_Faisal");
// }

// if (Last_Name === "Muhammad_Faisal") {
//     console.log("jannat");
// }

// if (Age === "20") {
//     console.log("20");
// }

// if (profession === "Web Developer") {
//     console.log("web developer");
// }


// Fruits array containing objects with name and color properties
// const fruits = [
//     { name: 'cherry', color: 'red' },
//     { name: 'banana', color: 'yellow' },
//     { name: 'mango', color: 'yellow' }
//   ];

// Nested loops to iterate through each fruit and check its properties
//   for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
// console.log("Name:", fruit.name);
// console.log("Color:", fruit.color);

// // If the fruit is red, print "Cherry"
// if (fruit.color === 'red') {
//   console.log("Cherry");
// }

// If the fruit is yellow, print "Banana" or "Mango"
//     if (fruit.color === 'yellow') {
//       if (fruit.name === 'banana') {
//         console.log("Banana");
//       } else if (fruit.name === 'mango') {
//         console.log("Mango");
//       }
//     }
//   }

// var nums=[[1,2,3], [4,5,6],[7,8,6]];
//   console.log("example W/ Number/n:new line i enter here ");
// //   console.log('the array data :',JSON.stringify (nums) );
// for(var i=0;i< nums.length;i++){
//     for(var j=0;j<nums[i].length; j++){
//         let helpfullabel='nums[${i}[${j}]'
//         let value =nums[i][j]
//         console.log(helpfullabel,'value='+ value);
//     }
// }





// Original: https://repl.it/@justsml/nested-loop-visualizations
// var nums = [[1,2,3], [4,5,6], [7,8,9]];

// console.log('Example w/ Numbers:\n');
// console.log('The array data: ', JSON.stringify(nums));

// for (var i=0; i < nums.length; i++) {
//   // Main/"top" array - accessing via "arr[i]"
//   for (var j=0; j < nums[i].length; j++) {
//     // here we loop through the "child" arrays
//     let helpfulLabel = `nums[${i}][${j}]`
//     let value = nums[i][j]
//     console.log(helpfulLabel, 'Value=' + value);
//   }
// }

// console.log('\nExample w/ String Data:\n');
// var letters = [['a', 'b', 'c'], ['d', 'e', 'f'], ['x', 'y', 'z']];
// console.log('The array data: ', JSON.stringify(letters));

// for (var i=0; i < letters.length; i++) {
//   for (var j=0; j < letters[i].length; j++) {
//     let helpfulLabel = `letters[${i}][${j}]`
//     let value = letters[i][j]
//     console.log(helpfulLabel, 'Value=' + value);
//   }
// }

// chapter 22

// String Ki Length Measure Karna
// String ki length ko measure karne ke liye hum.
// length property ka istemal karte hain.
// Ye humein string me mojood characters ki total taadaad batata hai.

// let exampleString = "Hello, World!";
// let lengthOfString = exampleString.length;
// console.log("String ki length: " + lengthOfString); // Output: String ki length: 13

// Explanation:

// exampleString ek string hai jisme "Hello, World!" stored hai.
// .length property se humein is string ke characters ki total taadaad milti hai, jo yahan 13 hai.
// String Ke Parts Extract Karna
// String ke specific hisson ko extract karne ke liye hum do methods ka istemal kar sakte hain: substring() aur slice().

// 1. substring() Method
// substring() method do parameters leta hai: start index aur end index(optional).Ye start index se shuru kar ke end index se pehle tak ke characters ko extract karta hai


// let exampleString = "Hello, World!";
// let partOfString = exampleString.substring(6, 12);
// console.log("Extracted part: " + partOfString); // Output: Extracted part: Hello


//Bilkul, main is chapter ko Roman Urdu mein explain karta hoon.

// ### Strings: Finding a Character at a Location

// Aapka maqsad yeh hai ke kisi string (lafz) mein ek specific character ko dhoondna aur usay kisi variable mein save karna. Yeh strings ke operations ko samajhne ke liye zaroori hota hai.

// ### Pehla Example: Pehla Character Dhoondhna

// Aapne user ka first name input liya hai aur usay variable `firstName` mein assign kiya hai. Ab aapko uska pehla character nikalna hai.

// #### Tareeqa 1:
// ```javascript
// var firstChar = firstName.slice(0, 1);
// ```
// - `slice(0, 1)` method use karke aap pehla character nikal sakte hain. Yeh method string ka substring (chhota hissa) return karti hai jo start hota hai index 0 se aur end hota hai index 1 se pehle.

// #### Tareeqa 2:
// ```javascript
// var firstChar = firstName.charAt(0);
// ```
// - `charAt(0)` method directly pehla character return karti hai jo index 0 pe hota hai.

// ### Dosra Example: Akhri Character Dhoondhna

// Agar aapko string ka akhri character nikalna hai, to aap yeh tareeqa use kar sakte hain:
// ```javascript
// var lastChar = name.charAt(name.length - 1);
// ```
// - `charAt(name.length - 1)` method use karke aap akhri character nikal sakte hain. `name.length - 1` akhri character ka index hota hai kyunke index 0 se shuru hota hai.

// ### Tisra Example: Specific Character Dhoondhna

// Agar aapko string mein koi specific character (jaise exclamation point `!`) dhoondhna hai, to aap loop use kar sakte hain:
// ```javascript
for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
        alert("Exclamation point found!");
        break;
    }
}
// ```
// - **Line 1**: `for` loop shuru hota hai jo 0 se lekar string ki length tak chalta hai.
// - **Line 2**: `if` condition check karti hai ke kya current character `!` hai.
// - **Line 3**: Agar `!` mil jaaye, to alert box show hota hai "Exclamation point found!" message ke sath.
// - **Line 4**: `break` statement loop ko turant rok deti hai agar `!` mil jaaye.

// ### Summary
// Is chapter mein, aapne sikha ke kaise strings ke andar characters ko dhoondh sakte hain aur unko manipulate (tabdeel) kar sakte hain. Yeh methods aur techniques aapko strings ke sath kaam karne mein madad denge.







// PRACTISE CHAPTER 1

// alert("hey jannat");


// practise chapter 2






















