/*datatypes are manly categorized in two types primitive and non primitive based on how data should be store on memory*/

//Primitive datatypes
/* 7 types - String,Number , Boolean, null, undefined, Symbol, BigInt

These all datatypes are also called call by value means  original reference of memory should not be provided only copy shouldbe provided or all changes done in copy not in original

*/


/*Reference (NoN Primitive)
Arrays, Objects, Functions

in these reference provided
*/
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;

const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3456543556678 n;

// javascript is dynamically typed languageee

const heros = ["shaktiman", "naagraj", "doga"]; // array

const myObj = {
    name: "sakshi",
    ag: 22,
}
const myfunction = function() {
    console.log("Hello World");
}

// how to identify datatype



console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myfunction);
// ****************************************
//Stack(Primitive) , Heap(Non- Primitive)

let myYoutubename = "sakshihanwatdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "sakshi2gamil.com"

console.log(userOne.email);
console.log(userTwo.email);