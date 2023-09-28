// Use camel Case as needed

/** Question 1
 * initialise the variable x to the value of 0
 * console log the variable x with a preincrement. Write a single line comment as to what that output will be
 * console log the variable x with a postincrement. Write a single line comment as to what that output will be
 * console log the variable x. Write a single line comment as to what that output will be
 */

var x = 0;
console.log(++x); //1
console.log(x++); //1
console.log(x); //2




/** Question 2
 * initialise the variable y to the value of 10
 * console log the variable y with a postdecrement. Write a single line comment as to what that output will be
 * console log the variable y with a predecrement. Write a single line comment as to what that output will be
 */
var y = 10;
console.log(y--); // 10
console.log(--y); // 8





/** Question 3
 * initialise the variable z to the value of 50
 * decrement the variable z by 5
 * increment the variable z by 1
 * decrement the variable z by 14
 * console log the variable z
 */
var z = 50;
console.log(z-=5);//45
console.log(z+=1);//46
console.log(z-=14); //31
console.log(z); //31




/** Question 4
 * initialise the variable `bag one` to the value of 10
 * increment bag one by 2
 * initialise the variable `bag two` to the value of 12
 * decrement bag two by 2
 * initialise total to the average of bag one and bag two
 * console log the total. Write a single line comment as to what will be displayed
 */
var bagOne = 10;
bagOne += 2;
var bagTwo = 12;
bagTwo -= 2;

var total = (bagOne + bagTwo)/2;
console.log(total); // = 11




/** Question 5
 * initialise the variable `container one` to the value of 50
 * increment container one by 5
 * initialise the variable `container two` to the value of 20
 * decrement container two by 10
 * initialise total to the average of container one and container two
 * console log the total. Write a single line comment as to what will be displayed
 */
var containerOne = 50;
containerOne += 5;

var containerTwo = 20;
containerTwo -= 10;

var total = (containerOne + containerTwo) / 2;
console.log(total);  
//32.5




/** Question 6
 * initialise the variable `litre one` to the value of 1.5
 * initialise the variable `litre two` to the value of 2
 * initialise the variable `litre three` to the value of 5.5
 * initialise total to the average of litre one, litre two and litre three
 * console log the total. Write a single line comment as to what will be displayed
 */
var litreOne = 1.5;
var litreTwo = 2;
var litreThree = 5.5;

var total = (litreOne + litreTwo + litreThree)/3;
console.log(total); // = 3




/** Question 7
 * initialise the variable `centimeter one` to the value of 6
 * initialise the variable `centimeter two` to the value of 3
 * initialise the variable `centimeter three` to the value of 8
 * initialise total to the average of centimeter one, centimeter two and centimeter three
 * console log the total and only show 2 decimal places using the .toFixed method. Write a single line comment as to what will be displayed
 */
var centimeterOne = 6;
var centimeterTwo = 3;
var centimeterThree = 8;
var total = (centimeterOne + centimeterTwo + centimeterThree) /3;
console.log(total.toFixed(2)); //5.67




/** Question 8
 * initialise the variable `fan level one` to the value of 8
 * initialise the variable `fan level two` to the value of 4
 * initialise the variable `fan level three` to the value of 14
 * initialise total to the average of fan level one, fan level two and fan level three
 * console log the total to 3 decimal place. Write a single line comment as to what will be displayed
 */
var fanLevelOne = 8;
var fanLevelTwo = 4;
var fanLevelThree = 14;

var total = (fanLevelOne + fanLevelTwo + fanLevelThree)/3;
console.log(total.toFixed(3)); // 8.667




/** Question 9
 * initialise the variable `case one` to the value of 10
 * initialise the variable `case two` to the value of 30
 * initialise the variable `case three` to the value of 35
 * initialise total to the average of case one, case two and case three
 * console log the total and round the total to 1 decimal places. Write a single line comment as to what will be displayed
 */
var caseOne = 10;
var caseTwo = 30;
var caseThree = 35;
var total = (caseOne + caseTwo + caseThree) / 3;
console.log(total.toFixed(1)); //25.0


/** Question 10
 * initialise the variable `guitar strings` to the value of 6
 * initialise the variable `violin strings` to the value of 4
 * initialise total to the average of guitar strings and violin strings
 * console log the total and round the total to 1 decimal place
 */
var guitarStrings = 6;
var violinStrings = 4;

var total = (guitarStrings + violinStrings)/2;
console.log(total.toFixed(1)); // 5.0



/** Question 11
 * initialise the variable `box one` to the value of 3
 * initialise the variable `box two` to the value of 4
 * initialise the variable `box three` to the value of 6
 * initialise the variable `box four` to the value of 9
 * initialise total to the average of all the boxes
 * console log the total. Write a single line comment as to what will be displayed
 */
var boxOne = 3;
var boxTwo = 4;
var boxThree = 6;
var boxFour = 9;
var total = (boxOne + boxTwo + boxThree + boxFour) / 4;
console.log(total); //5.5




// Question 12 - write your own arithmatic question with incrementing + answer

/** Initialise the variable `timbit box one` to the value of 7, using camel casing
* Increment timbit box one by 1
* Initialise the variable `timbit box two` to the value of 9
* Decrement timbit box two by 4
* Initialise `total timbits` to the added value of timbit box one and timbit box two
* Console log the total and round to 2 decimal places. Write a single line comment as to what will be displayed
*/
var timbitBoxOne = 7;
timbitBoxOne++;
var timbitBoxTwo = 9;
timbitBoxTwo -= 4;

var totalTimbits = timbitBoxOne+timbitBoxTwo;
console.log(totalTimbits.toFixed(2)); // 13.00



// Question 13 - write your own averaging question + answer

/**
 * initialized variable 'container one' to the value of 3
 * initialized variable 'container two' to the value of 7
 * initialized variable 'container three' to the value of 5
 * initialized total to average of all containers
 * console log total containers
 * write single line comment
 */
var containerOne = 3;
var containerTwo = 7;
var containerthree = 5;
var total = (containerOne + containerTwo + containerthree) / 3;
console.log(total); //5


// Question 14 - write your own averaging question + answer

/** Initialise the variable `hot tea` to the value of 12, use camel casing
 * Initialise the variable `warm tea` to the value of 6
 * Initialise the variable `cold tea` to the value of 4
 * Initialise total to the average of hot tea, warm tea, and cold tea
 * Console log the total to 3 decimal place. Write a single line comment as to what will be displayed
 */
var hotTea = 12;
var warmTea = 6;
var coldTea = 4;

var total = (hotTea + warmTea + coldTea)/3;
console.log(total.toFixed(3)); //7.333
