// Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Ali', lastName = 'Siddiqui', country = 'India', city = 'Hyderabad', age = 21, isMarried = false, year = 2001;
console.log(typeof age, typeof firstName, typeof isMarried) // Output: number string boolean

// 2. Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10) // Output: false, because '10' is a string and 10 is a number

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10) // Output: false, because parseInt converts any datatype into an integer, here '9.8' will convert into 9.8 != 10

/**
 * 4. Boolean value is either true or false.

  i. Write three JavaScript statement which provide truthy value.
 ii. Write three JavaScript statement which provide falsy value.
 
*/

// 3 statements provides truthy value
console.log(Boolean(10)) // Output: true
console.log(Boolean(`!!'hello'`), Boolean([])) // Output: true true
console.log(Boolean(-5), Boolean(true)) // Output: true true

// 3 statements provides falsy value
console.log(Boolean('')) // Output: false
console.log(Boolean(null), Boolean(NaN)) // Output: false false
console.log(Boolean(undefined), Boolean(0)) // Output: false false

/**
 * 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

    i. 4 > 3
   ii. 4 >= 3
  iii. 4 < 3
   iv. 4 <= 3
    v. 4 == 4
   vi. 4 === 4
  vii. 4 != 4
 viii. 4 !== 4
   ix. 4 != '4'
    x. 4 == '4'
   xi. 4 === '4'
  xii. Find the length of python and jargon and make a falsy comparison statement.
*/

// i. 4 > 3 is true because 4 is greater than 3
console.log(4 > 3) // Output: true

// ii. 4 >= 3 is true as 4 is greater number than 3
console.log(4 >= 3) // Output: true

// iii. 4 < 3 gives false because 4 is not lesser than 3, it is greater than 3
console.log(4 < 3) // Output: false

// iv. 4 <= 3 is false value as it is not lesser than 3
console.log(4 <= 3) // Output: false

// v. 4 == 4 is true as 4 is equal to 4
console.log(4 == 4) // Output: true

// vi. 4 === 4 is true because 4 is strictly equal to 4
console.log(4 === 4) // Output: true

// vii. 4 != 4 is false because 4 is equal to 4
console.log(4 != 4) // Output: false

// viii. 4 !== 4 is again false because 4 is strictly equal to 4, so it cannot be unequal to its own number
console.log(4 !== 4) // Output: false

// ix. 4 != '4' is false because it performs type conversion before comparing the values, then as 4 and 4 is true but there is not equal operator, so it returns false as an output
console.log(4 != '4') // Output: false

// x. 4 == '4' is true because it performs type conversion before comparing the values
console.log(4 == '4') // Output: true

// xi. 4 === '4' is false because unlike == operator, === operator does not perform type conversion and requires both the tyope and value to be the same for the comparison to be true.
console.log(4 === '4') // Output: false

// xii. Find the length of python and jargon and make a falsy comparison statement. Ans: false. Because Though the length of two strings are equal as it has not equal to operator in betwwen of two strings (!=), so it returns false as both has same length.
console.log('python'.length != 'jargon'.length) // Output: false

/**
 * 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

    i. 4 > 3 && 10 < 12
   ii. 4 > 3 && 10 > 12
  iii. 4 > 3 || 10 < 12
   iv. 4 > 3 || 10 > 12
    v. !(4 > 3)
   vi. !(4 < 3)
  vii. !(false)
 viii. !(4 > 3 && 10 < 12)
   ix. !(4 > 3 && 10 > 12)
    x. !(4 === '4')
   xi. There is no 'on' in both dragon and python
*/

// i. 4 > 3 && 10 < 12 returns true as both the conditions are true i.e, 4 is greater than 3 and 10 is lesser than 12
console.log(4 > 3 && 10 < 12) // Output: true

// ii. 4 > 3 && 10 > 12 returns false because only one is true and another condition is false.
console.log(4 > 3 && 10 > 12) // Output: false

// iii. 4 > 3 || 10 < 12 returns true. It should be any one of the condition should be true
console.log(4 > 3 || 10 < 12) // true

// iv. 4 > 3 || 10 > 12 returns true because in the two conditions one of the condition should be true to be considered as true
console.log(4 > 3 || 10 > 12) // true

// v. !(4 > 3) returns false as 4 is greater than 3 but ! operator negates this value, so result: false
console.log(!(4 > 3)) // Output: false

// vi. !(4 < 3) returns true as 3 is not greater than 4, so it will result in false but ! operator negates the value, so the output turns into true
console.log(!(4 < 3)) // Output: true

// vii. !(false) returns true as the boolean value of false is value but ! operator negates the value, so it will return true
console.log(!(false)) // true

// viii. !(4 > 3 && 10 < 12) returns false as the condition gives the output as true but ! operator negates the value, so it's false
console.log(!(4 > 3 && 10 < 12)) // Output: false

// ix. !(4 > 3 && 10 > 12) gives the output as true as the conditional output gives false but ! operator negates the value, so it give true as output
console.log(!(4 > 3 && 10 > 12)) // Output: true

// x. !(4 === '4') gives the output as true. the strictly equal to operator does not performs any type coersion and checks both the type and the value to bebtrue, so it is false but the ! operator negates the value, so the output is true.
console.log(!(4 === '4')) // Output: true

// xi. There is no 'on' in both dragon and python Ans: it gives false as an output because 'on' contains in both 'dragon' and 'python' but if we don't want to be the result false, then simply put the ! operator before the both strings, this will give the output as false.
console.log(!('dragon'.includes('on')) && !('python'.includes('on'))) // Output: false

/**
 * 7. Use the Date object to do the following activities

   i. What is the year today?
  ii. What is the month today as a number?
 iii. What is the date today?
  iv. What is the day today as a number?
   v. What is the hours now?
  vi. What is the minutes now?
 vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

// i. What is the year today?
const now = new Date
console.log(now.getFullYear()) // Output: 2023
// ii. month
console.log(now.getMonth()) // Output: 1
// iii. date
console.log(now.getDate()) // Output: 19
// iv. day
console.log(now.getDay()) // Output: 0
// v. hours
console.log(now.getHours()) // Output: 21
// vi. minutes
console.log(now.getMinutes()) // Output: 35
// vii. seconds elapsed from jan 1, 1970 to now
console.log(now.getTime()) // Output: 1676822750582

/****************************************************************************************************************************** */

// Exercises: Level 2

/**
 * 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h). 
 * Enter base: 20
 * Enter height: 10
 * The area of the triangle is 100
 */

let base = prompt('Enter Base:'), height = prompt('Enter Height:'), area = 0.5 * base * height
console.log('The area of a triangle is ' + area) // Output: The area of a triangle is 100

/**
 * 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
 * Enter side a: 5
 * Enter side b: 4
 * Enter side c: 3
 * The perimeter of the triangle is 12
*/

let a = parseInt(prompt('Enter side a:')), b = parseInt(prompt('Enter side b:')), c = parseInt(prompt('Enter side c:'))
let perimeter = a + b + c
console.log('The perimeter of a triangle is: ', perimeter) // Output: The perimeter of a triangle is:  12

/**
 * 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
 */

let length = parseInt(prompt('Enter the length of a rectangle:')), width = parseInt(prompt('Enter the width of a rectangle:')) //length = 5, breadth = 3
let recArea = length * width
let recPerim = 2 * (length + width)

console.log(`The area of a rectangle is ${recArea} and perimeter is ${recPerim}`) // Output: The area of a rectangle is 15 and perimeter is 16

/**
 * 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
 */

let radius = parseInt(prompt('Enter the radius of a circle:')) // 5
let pi = 3.14
let arCirc = pi * radius * radius
let cirCirc = 2 * pi * radius

console.log(`The area of a circle is ${arCirc} and perimeter is ${cirCirc}`) // Output: The area of a circle is 78.5 and perimeter is 31.400000000000002

/**
 * 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
 */
let equation = 'y = 2x - 2', slope = 2, xInt = -2/slope, yInt = -2
console.log(`Slope: ${slope}, x-intercept: (${xInt},0), y-intercept: (0,${yInt})`) // Output: Slope: 2, x-intercept: (-1,0), y-intercept: (0,-2)

/**
 * 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
 */
let x1 = 2, y1 = 2, x2 = 6, y2 = 10, slopePt = (y2 - y1)/(x2 - x1)
console.log(`The slope (m) is ${slopePt}`) // Output: The slope (m) is 2

/**
 * 7. Compare the slope of above two questions.
 */

if(slope < slopePt){
  console.log(`${slope} is lesser than ${slopePt}`)
} else if(slope > slopePt) {
  console.log(`${slope} is greater than ${slopePt}`)
} else {
  console.log(`${slope} is equal to ${slopePt}`)
}

// Output: 2 is equal to 2

/**
 * 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
 */

function calculateY(x) {
  let y = x * x + 6 * x + 9;
  return y;
}

// Calculate y for different values of x
console.log(calculateY(-4)); // Output: 1
console.log(calculateY(-3)); // Output: 0
console.log(calculateY(-2)); // Output: 1
console.log(calculateY(-1)); // Output: 4
console.log(calculateY(0)); // Output: 9
console.log(calculateY(1)); // Output: 16

// Verify that the value of x when y is 0 is -3
let x = -10;
while (x != 0) {
  x += 0.001;
}
console.log(x); // Output: -3.0000000000008726
console.log(calculateY(-3)); // Output: 0

/**
 * 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
 * 
 * Enter hours: 40
 * Enter rate per hour: 28
 * Your weekly earning is 1120
 */

let hrs = prompt('Enter hours:'), ratePerHour = prompt('Enter rate per hour:'), totEarn = hrs * ratePerHour
console.log('Your weekly earning is:', totEarn) // Your weekly earning is: 1120

/**
 * 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
 */

let yourName = prompt('Enter your name')
yourName.length > 7
? console.log(`Your name '${yourName}' is longer`)
: console.log(`Your name '${yourName}' is short`)
// Your name 'Ali' is short

/**
 * 11. Compare your first name length and your family name length and you should get this output.
 * let firstName = 'Asabeneh'
 * let lastName = 'Yetayeh'
 * Output: Your first name, Asabeneh is longer than your family name, Yetayeh
 */

let fName = 'Ali', lName = 'Siddiqui'
fName.length > lName.length
? console.log(`Your first name, ${fName} is longer than your family name, ${lName}.`)
: console.log(`Your first name, ${fName} is shorter than your family name, ${lName}.`) // Output: Your first name, Ali is shorter than your family name, Siddiqui

/**
 * 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
 * let myAge = 250
 * let yourAge = 25
 * Output: I am 225 years older than you.
 */

let myAge = 250, yourAge = 25, sumAge = myAge - yourAge
console.log(`I am ${sumAge} years older than you.`) // Output: I am 225 years older than you.

/**
 * 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
 * 
 * Enter birth year: 1995
 * You are 25. You are old enough to drive

 * Enter birth year: 2005
 * You are 15. You will be allowed to drive after 3 years.
 */

let birthYear = prompt('Enter your birth year:')
const nowDate = new Date()
const difAge = now.getFullYear() - birthYear
const lessAge = 18 - difAge

difAge > 18

? console.log(`You are ${difAge}. You are old enough to drive.`)
: console.log(`You are ${difAge}. You will be allowed to drive after ${lessAge} years.`) // Output: You are 15. You will be allowed to drive after 3 years.

/**
 * 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
 * Enter number of years you live: 100
 * You lived 3153600000 seconds.
 */

let nowAge = prompt('Enter number of years you live:') // 21
let secondsPerYear = 365.25 * 24 * 60 * 60
let totalSeconds = nowAge * secondsPerYear
let secondsIn100Years = 100 * secondsPerYear
let secondsLeft = secondsIn100Years - totalSeconds

console.log(`A person can live for ${totalSeconds.toLocaleString()} seconds.`)
console.log(`Assuming you live for 100 years. You have ${secondsLeft.toLocaleString()} seconds left to live.`)

/**
 * A person can live for 66,27,09,600 seconds. 
 * Assuming you live for 100 years. You have 2,49,30,50,400 seconds left to live.
*/

/**
 * 15. Create a human readable time format using the Date time object

 * YYYY-MM-DD HH:mm
 * DD-MM-YYYY HH:mm
 * DD/MM/YYYY HH:mm
*/

const nowTime = new Date()
console.log(`${nowTime.getFullYear()}-${(nowTime.getMonth() + 1).toString().padStart(2,'0')}-${(nowTime.getDate().toString().padStart(2,'0'))} ${(nowTime.getHours().toString().padStart(2,'0'))}:${(nowTime.getMinutes().toString().padStart(2,'0'))}`)
console.log(`${(nowTime.getDate().toString().padStart(2, '0'))}-${(nowTime.getMonth() + 1).toString().padStart(2,'0')}-${nowTime.getFullYear()} ${(nowTime.getHours().toString().padStart(2,'0'))}:${(nowTime.getMinutes().toString().padStart(2,'0'))}`)
console.log(`${(nowTime.getDate().toString().padStart(2, '0'))}/${(nowTime.getMonth() + 1).toString().padStart(2,'0')}/${nowTime.getFullYear()} ${(nowTime.getHours().toString().padStart(2,'0'))}:${(nowTime.getMinutes().toString().padStart(2,'0'))}`)

/**
 * Output: 
 * 2023-02-22 01:10
 * 22-02-2023 01:10
 * 22/02/2023 01:10
*/
// You can also do it by just using console.log() without declaring any variable:
// console.log(`${new Date().getFullYear()}-${new Date().getMonth() + 1).toString().padString(2, '0')}-${(new Date().toString().padStart(2, '0'))} ${(new Date().toString().padStart(2, '0'))}:${(new Date().toString().padString(2, '0'))}`)

// or

// const nowTime = new Date();
const nowYear = nowTime.getFullYear();
const month = (nowTime.getMonth() + 1).toString().padStart(2, '0');
const day = nowTime.getDate().toString().padStart(2, '0');
const hour = nowTime.getHours().toString().padStart(2, '0');
const minute = nowTime.getMinutes().toString().padStart(2, '0');

console.log(`${nowYear}-${month}-${day} ${hour}:${minute}`);
console.log(`${day}-${month}-${nowYear} ${hour}:${minute}`);
console.log(`${day}/${month}/${nowYear} ${hour}:${minute}`);

/**
 * 2023-02-22 01:10
 * 22-02-2023 01:10
 * 22/02/2023 01:10
*/

// Exercise: Level 3

/* 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

console.log(`${nowYear}-${month}-${day} ${hour}:${minute}`); // Output: 2023-02-22 01:10