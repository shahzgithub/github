//chapter 21 (CHANGING CASE)
//Q1
// var alert = prompt("Enter your city name");
// var allLower = userInput.toLowerCase();
// var userInput = ["KARACHI","LAHORE","ISLAMABAD","PESHAWAR"];

// for( var i = 0;userInput; i++) {
//     if (userInput = userInput)

// } else  userInput + userInput

// console.log("match");
//Q2
x = x.toLowerCase();

//Q3
y = y.toUpperCase();

//Q4
var originalString = "YourOriginalString"; 
var lowerCaseString = originalString.toLowerCase();

//Q5
var myArray = ["Element1", "Element2", "Element3"]; 
var newArrayElement = myArray[2].toLowerCase();

//Q6
var yourString = "YourString"; 
var upperCaseString = yourString.toUpperCase();
alert(upperCaseString);

//Q7
var cityName = "kaRacHi";
var titleCaseCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
console.log(titleCaseCityName); 

//chapter 22-25
//Q1
var sameWords = "captain";
var slicedWords = sameWords.slice(2, 4); 

//Q2
var str = "example";
var characterCount = str.length; 

//Q3
var animal = "elephant";
var seg = animal.slice(1, 5); 

//Q4
var yourString = "YourString"; 
var characterCount2 = yourString.length; 

//Q5
var yourString2 = "AnotherString"; 
var characterCount3 = yourString2.length; 
var slicedString = yourString2.slice(1, -3);

//Q6
var text = "To be or not to be.";
var indx = text.indexOf("be");

//Q7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

//Q8
var text = "Find the words to go, go, go!";
var lastIndexOfGo = text.lastIndexOf("go");
var indx = text.indexOf("go", lastIndexOfGo);

///Q9
if (yourString[indexNum] !== undefined) {
}

//Q10
var str = "abcde";
var characterAtIndex2 = str.charAt(2); 

//Q11
var text = "This is a long text with more than 10 characters.";
var cha = text.charAt(9); 

//Q12
var str = "YourString";
var x = str.charAt(str.length - 1); 

//Q13
var input = "YourInput";
var cha = input.charAt(4); 

//Q14
if (yourString.charAt(2) === 'YourCharacter') {
}

//Q15
var yourString = "YourString";
var characterArray = [];

for (var i = 0; i < yourString.length; i++) {
    characterArray.push(yourString.charAt(i));
}

//Q16
var str = "Your string with 1 occurrence of 1.";
var newStr = str.replace("1", "one");

//Q17
var y = x.replace(/a/g, "z");

//chapter 26 (Rounding number) 
//Q1
var roundedNumber = Math.round(yourNumber);

//Q2
var origNum = 5.3;
var roundNum = Math.ceil(origNum);

//Q3
var origNum = 5.7;
var roundNum = Math.floor(origNum);

//Q4
var yourNumber = 6.8;
var roundedNumber = Math.round(yourNumber);

//Q5
var value = 0.5;
var roundedValue = Math.round(value);

//chapter 27 (Randam numbers)
//Q1
var randomNumber = Math.floor(Math.random() * 50) + 1;

//Q2
var randomVariable = Math.random();

//Q3
var diceRoll = Math.floor(Math.random() * 6) + 1;

//Q4
var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";

//chapter 28-29 (Converting strings)
//Q1
var str = "123";
var integerNumber = parseInt(str, 10);

//Q2
function stringToInteger(str) {
    return parseInt(str, 10);
}

var integerNumber = stringToInteger("123");

//Q3
var str = "3.14";
var floatingPointNumber = parseFloat(str);

//Q4
var str = "123";
if (!isNaN(str)) {
    var number = parseFloat(str);
} else {
 console.log("Invalid number");
}

//Q5
var number = 42;
var strNumber = String(number); // Using the String() constructor

//Q6
function numberToString(num) {
    return num.toString();
}

var strNumber = numberToString(42);

//Q7
var decimalString = "3.14";
var integerNumber = parseInt(decimalString, 10);

//chapter 30 (Controlling the length of decimals)
//Q1
var num = 3.141592653589793;
var newNum = num.toFixed(4).toString();

//Q2
var yourNumber = 12.3456;
yourNumber = parseFloat(yourNumber.toFixed(2));

//Q3
if (num.toFixed(2).toString().length > 4) {
    // Your code here
}

//Q4
var yourNumber = 123.456789;
var roundedNumber = yourNumber.toFixed(2).toString();
alert(roundedNumber);



































































