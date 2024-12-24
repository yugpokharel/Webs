// Write a program using for loop to print Numbers from 1 to 10.
document.write("<p><b>1.Numbers from 1 to 10:</b></p>");
for (let i = 1; i <= 10; i++) {
    document.write(i + ","); 
}


// Write a program using while loop to sum of Numbers from 1 to 100.
let sum = 0;
let number = 1;
while (number <= 100) {
    sum += number; 
    number++;   
}

document.write("<p><b>2.Sum of numbers from 1 to 100:</b> " + sum + "</p>");


// Write a program using for loop to print all even numbers between 1 and 20.
document.write("<p><b>3.all even numbers between 1 and 20</b></p>");
for (let n = 2; n <= 20; n += 2){
document.write(n+",");
}

// Write a program using while loop to reverse the string (Softwarica)
let originalString = "Softwarica";
let reversedString = "";
let index = originalString.length - 1;

while (index >= 0) {
    reversedString += originalString[index];
    index--;
}

document.write("<p><b>4.Reversed String</b></p>" + reversedString);


// Write a program to find the largest number of Array [5, 8, 12, 3, 7]
let numbers = [5, 8, 12, 3, 7];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
document.write("<p><b>5.The largest number in the array is:</b></p> " + largest);


// Write a program using a for loop to print the multiplication table of a given number (e.g., 5).
let nm = 5;
document.write("<h3>6.Multiplication Table of " + nm + ":</h3>");
for (let i = 1; i <= 10; i++) {
    document.write(nm + " x " + i + " = " + (nm * i) + "<br>");
}


// Write a program using a while loop to count the number of digits in a given number.
let nn = 12345; 
let count = 0;

while (nn > 0) {
    nn = Math.floor(nn / 10);
    count++; 
}
console.log("7.Write a program using a while loop to count the number of digits in a given number: " + count);


// Write a program using a for loop to generate the first 10 numbers of the Fibonacci sequence.
let n = 10;
let a = 0, b = 1;

console.log("8.Fibonacci Sequence:");

for (let i = 1; i <= n; i++) {
    console.log(a); 
    let next = a + b; 
    a = b; 
    b = next; 
}


// Write a program using a while loop to calculate the sum of digits of a given number.
let nnn = 12345; 
let summ = 0;

while (nnn > 0) {
    summ += nnn % 10; 
    nnn = Math.floor(nnn / 10); 
}
console.log("9.Sum of digits: " + summ);



// Write a program using a for loop to count the number of vowels in a given string (e.g., "Softwarica").
let str = "Softwarica"; 
let cnt = 0;

str = str.toLowerCase();

let vowels = "aeiou";

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        cnt++;
    }
}
console.log("10.Number of vowels in '" + str + "': " + cnt);




// Write a program using a while loop to check if a given string is a palindrome (reads the same backward as forward).
let stt = "madam"; 
let isPalindrome = true;

stt = stt.toLowerCase();

let start = 0;
let end = stt.length - 1;

while (start < end) {
    if (stt[start] !== stt[end]) {
        isPalindrome = false;
        break;
    }
    start++;
    end--;
}

if (isPalindrome) {
    console.log("11." + stt + "' is a palindrome.");
} else {
    console.log("'" + stt + "' is not a palindrome.");
}


