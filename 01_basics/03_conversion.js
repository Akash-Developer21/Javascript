let name = "21"
console.log(name);

//conversion of this string into number 

let numbername = Number(name)
console.log(numbername)
console.log(typeof numbername)
//output
// 21
// 21
// number 

let value = "21aa"
console.log(value);

//conversion of this string into number 

let valueinnumber = Number(value)
console.log(valueinnumber)
console.log(typeof valueinnumber)
//output
//21aa
//NaN
//number

//similarly we change string into number and vise versa 



// now we check for boolean 

let isloggedin = true
console.log(isloggedin)
//convert into number 
let isloggedininnumber = Number(isloggedin)
console.log(isloggedininnumber)
console.log(typeof isloggedininnumber)

//output
//true
//NaN
//number
//similarly we can convert number in boolean 

// "" => false
// "Akash" => true


// ***************************CONVERSIONS*********************************** //

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**2)

console.log( "2" + 2 )  // 22
console.log( "2"+ 2 + 2)  // 222
console.log( 2 + "2") // 22
console.log( 2 + 2 +"2") // 42
//JavaScript left-to-right chalta hai is liye jab ham pahale string dete hai to vo string jaisa treat karta hai 
// or jab pahale numbers hota hai to operation perform kar ke uske baad string ke sath deal karta hai

let num = 3
let negnum = -num
console.log(negnum) // -3

let nam1 = "piyo"
let nam2 = " Amuldoodh"
let nam3 = nam1 + nam2
console.log(nam3) // piyo Amuldoodh


let gamecounter = 100 
//console.log(gamecounter++) // 100
gamecounter++ // or can be written as ++gamecounter
console.log(gamecounter) //101 

// prefix and postfix

//prefix =>
// Agar ++ variable ke pehle lagjaye (++x), to pehle value 1 se increase hoti hai aur phir wahi nayi value return hoti hai.

//postfix =>
//Agar ++ variable ke baad lagaya jaye (x++), to pehle current value return hoti hai, aur uske baad value 1 se increase hoti hai.    