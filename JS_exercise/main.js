// Exercise 1
// In your JavaScript file create a variable called myName with your name as the value.
//  Put your name inside string quotes, e.g., "my name".
//  Then add a line of code to print the variable name to the console after the previous message.

// Save your JavaScript file in your editor. Reload the HTML page in your browser.
//  You should see your name printed. If not, investigate and fix it.

var myName = "June";
console.log(myName);


// Exercise 2
// Create a variable called age with a number that is your age. Do not use string quotes for numbers.

// Add a line to print that variable in the console. Save the file and reload the page.
//  You should see your name and your age.

var myAge = 100;
console.log(myAge);

// Exercise 3
// Create a variable called juliaAge with a value 32. 
//  Create another variable called ageDiff and set it to an expression 
// that calculates your age minus Julias's age. Print the value of ageDiff.
//  Save the file and reload the page. You should see your age and the age difference.
//   If you are younger than Julia, you should see a negative number.

var juliaAge = 32;
var ageDiff = myAge - juliaAge;
console.log(ageDiff);

// Exercise 4
// Write a conditional that compares the variable with your age with the number 21.
//  It should print either "You are older than 21" or "You are not older than 21", appropriately,
//   depending on your age. Save your JavaScript file and reload the page.
//    Make sure you see the correct message.
//     Try changing your age in the JavaScript file to make sure the other message prints when it should.

if (myAge < 21){
    console.log("You are not older than 21");
}else{
    console.log("You are older than 21");
}


// Exercise 5
// Write a conditional that compares your age with Julia's age.
//  This conditional will need to test if you are older, younger, or the same age, and print,
//   appropriately, either "Julia is older than you",
//    Julia is younger than you", or "You have the same age as Julia".

if (myAge > juliaAge){
    console.log("Julia is younger than you");
} else if (myAge == juliaAge){
    console.log("You have the same age as Julia");
} else{
    console.log("You are younger than Julia");
}


// Sorting an Array

// Exercise 1
// Create an array with all the names of your class (including mentors). Sort the array alphabetically.
//  Then print the first element of the array in the console. On the next line,
//   print the last element of the array in the console. On the next line,
//    print all the elements of the array in the console (use a "for" loop).
//     Save the file and reload the page.
//      You should see the first element of the sorted array, the last element of the sorted array,
//       and a list of all the elements in order in the array in the console.

var myClass = [ "Bbc",  "Iij" , "Eef", "Ffg", "Dde", "Ggh", "Aab", "Hhi", "Ccd"];
myClass.sort();
console.log(myClass[0]);
console.log(myClass[myClass.length - 1]);
for (let i = 0; i < myClass.length; i++){
    console.log(myClass[i]);
}



var myNums = [33,7, 100, -1, 0, 2]
myNums.sort();
console.log(myNums);


// Looping over an Array

// Exercise 2
// Create an array with all the ages of the students in your class.
//  Iterate the array using a while loop, and then print every age in the console.
//   Add a conditional inside the while loop to only print even numbers.
//    Write again a loop but use a "for" loop instead of a "while" loop.
//     Save your changes to your JavaScript file. Reload the HTML page in your browser.
//      You should see every age printed, then only the even numbers printed.
//       If not, investigate and fix it.

var classAges = [100, 27, 23, 40, 35, 25, 35, 33, 29];

var i = 0;
while(i < classAges.length){
    if(classAges[i]%2 ==0){
        console.log(classAges[i]);
    }
    i++;
}

for(let i=0; i < classAges.length ; i++){
    if (classAges[i] % 2 == 0){
        console.log(classAges[i]);
    }
}

// Functions that use Arrays
// For the following exercises, you cannot sort your array.
//  Be sure your solution works for any array that it is passed!

// Exercise 3
// Write a function that receives an array as a parameter and prints the lowest number in the array
//  to the console. Save the changes to your JavaScript file. Reload the HTML page in your browser.
//   You should see the lowest number in the array printed in the console. If not, investigate and fix it.

var arr = [111,1,11111,11,1111];
function lowest(arr){
    var smallest = arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest = arr[i];
        }
    }
    console.log(smallest);    
}
    
console.log("My smallest number is...");
lowest(arr);

// Exercise 4
// Write a function that receives an array as a parameter and prints the biggest number in the array
//  to the console. Save the changes to your JavaScript file. Reload the HTML page in your browser.
//   You should see the biggest number in the array printed in the console. If not, investigate and fix it.

var myArray = [300,44,55555,1,111,100000];

function biggestNum(arr){
    var biggest = myArray[0];
    for(var i=1;i<arr.length;i++){
        if(biggest < arr[i]){
            biggest = arr[i];
        }
    }
    console.log(biggest);
}
console.log("My biggest number is...");
biggestNum(myArray);



// Exercise 5
// Write a function that receives two parameters, an array, and an index.
//  The function will print the value of the element at the given position (one-based) to the console.
//   For example, given the following array and index, the function will print '6'.
// var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
//  var index = 1;
//   Save the changes to your JavaScript file and check your browser console.
//    You should see the number at the correct index printed in the console. If not, investigate and fix it.

var someArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
function printElement(arr, index){
    console.log(arr[index]);
}
console.log("Let's print out element of my index");
printElement(someArray, 16);



// Exercise 6
// Write a function that receives an array and only prints the values that repeat.

// For example, given the following array and index, the function will print '6,23,33,100'.

// var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

// Save the changes to your JavaScript file. Reload the HTML page in your browser.
//  You should see an array of the repeated numbers printed in the console. If not, investigate and fix it.

// Tip: this is considered by many students the most difficult exercise,
//  therefore dedicate max. an hour to find a solution and if you can't leave it for tomorrow.
//   Most of the time we need to take breaks and we will be able to see problems
//    from different angles with a fresh mind.

var longArray = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function findTwins(arr){
    for(var i=0; i < arr.length; i++){
        var myNum = arr[i];
        for(var j=i+1; j< arr.length; j++){
            if(myNum === arr[j]){
                console.log("same in index", i," and ", j);
                console.log(myNum);
            }
        }

    }
}


findTwins(longArray);
//BUT sorting at the first time takes less computing


// Exercise 7
// Write a simple JavaScript function to join all elements of the following array into a string.
// myColor = ["Red", "Green", "White", "Black"];
// Save the changes to your JavaScript file. Reload the HTML page in your browser.
//  You should see the following in your console:
// "Red", "Green", "White", "Black"

var myString = "";
var myColor = ["Red", "Green", "White", "Black"];
function makeString(arr){
    for(var i=0;i<arr.length;i++){
        myString = myString +" "+ arr[i];
    }
    console.log(myString);
}
makeString(myColor);
//or just
console.log(myColor.join())




// JavaScript String
// Exercise 1
// Write a JavaScript function that reverses a number.
//  For example, if x = 32443 then the output should be 34423. Save your JavaScript file and reload the page.
//  Make sure you see the correct output. If not, investigate and fix it.

var x = "324435";
var myNewString = "";
function reverseString(str){
    for(var i=str.length-1 ; 0<i ; i--){
        myNewString = myNewString+str[i];
    }
    console.log(myNewString);
}
reverseString(x);

// Exercise 2
// Write a JavaScript function that returns a string in alphabetical order.
//  For example, if x = 'webmaster' then the output should be 'abeemrstw'.
//   Punctuation and numbers aren't passed in the string. Save your JavaScript file and reload the page.
//    Make sure you see the correct output. If not, investigate and fix it.

var x = 'webmaster';
var newArray = [];
function change(str){
    for(var i=0; i < str.length ; i++){
        newArray.push(str[i]);
    }
    newArray =  newArray.sort().join("").toString();  
    console.log(newArray);
}
change(x);

// Exercise 3
// Write a JavaScript function that converts the first letter of every word to uppercase.
//  For example, if x = "prince of persia" then the output should be "Prince Of Persia". 
//  Save your JavaScript file and reload the page. Make sure you see the correct output.
//   If not, investigate and fix it.

var x = "prince of persia";
var newString = "";
function upper(str){
    var arr = str.split(" ");
    

}

// Exercise 4
// Write a JavaScript function that finds the longest word in a phrase. For example, 
// if x = "Web Development Tutorial", then the output should be "Development".
//  Save your JavaScript file and reload the page. Make sure you see the correct output.
//   If not, investigate and fix it.

var x = "Web Development Tutorial";
function findWord(str){
    var mew = str.split(" ");
    var numOfWords = mew.length;
    



}