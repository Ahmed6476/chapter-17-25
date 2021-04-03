// "Chapter no 17-20"

// Answer no 1
// var Arr=[[],[],[]];

// // Answer no 2
// var Matrix = [["0123"],[1012],[2101]];
// document.write(Matrix[0] + "<br>" + Matrix[1] + "<br>" + Matrix[2] );

// Answer no 3
// var a = 1;
// for(a; a<=10; a++)
// {
//     document.write(a + "<br>");
// }

// Answer no 4
// var Number = prompt("Enter a number to show its multiplication");
// var Length = prompt("Enter a Length of multiplication you want");
// document.write("Multiplication table of " + Number + "<br>");
// document.write("Length " + Length + "<br>" + "<br>");
// for(a=1; a<=Length; a++)
// {

//      document.write(Number + "x" + a + "=" + (Number*a) + "<br>");
//  }

// Answer no 5
// var fruits = ["apple","banana","mango","orange","strawbery"];
//  for (var i=0; i<fruits.length; i++){
//      document.write(fruits[i] + "<br>");
//      }
//      document.write("<br>");
// document.write("Element at index 0 is " + fruits[0] +"<br>")
// document.write("Element at index 1 is " + fruits[1] +"<br>")
// document.write("Element at index 2 is " + fruits[2] +"<br>")
// document.write("Element at index 3 is " + fruits[3] +"<br>")
// document.write("Element at index 4 is " + fruits[4] +"<br>")

// Answer no 6
// var counting = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var reverse_counting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// var series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
// document.write("Counting:".bold() + "<br>" + "<br>" + counting + "<br>"+ "<br>");
// document.write("Reverse Counting:".bold() + "<br>" + "<br>" + reverse_counting + "<br>"+ "<br>");
// document.write("Even:".bold() + "<br>" + "<br>" + even + "<br>"+ "<br>");
// document.write("Odd:".bold() + "<br>" + "<br>" + odd + "<br>"+ "<br>");
// document.write("Series:".bold() + "<br>"+ "<br>");
// for(var i=0; i<series.length; i++)
// {
//     document.write( series[i] + ",");
// }

// Answer no 7
// var A = ["cake", "apple", "pie", "cookie", "chips", "patties"];
// var B = prompt("Welcome to ABC Bakery what do you want");
// for(var i=0; i<A.length; i++)
// {
//     if(B === A[i])
//     {
//         alert(B + " is avaliable at index " + A.indexOf(B) + " in our bakery");
//     }
//     else(B !== A[i])
//     {
//         alert("We are sorry " + B + " is not available in our bakery" );
//     }
// }

// Answer no 8
// var A = [24, 53, 78, 91, 12]
// document.write("Array items: " + A + "<br>");
// document.write("The largest number is " + Math.max(...A));

// Answer no 9
// A = [24, 53, 78, 91, 12]
// document.write("Array items: " + A + "<br>");
// document.write("The smallest number is " + Math.min(...A));

// Answer no 10
// var a = 5;
// for(var b=1; b<=20; b++)
// {
//     document.write(a*b + ",");
// }

// "Chapter no 21-25"

// Answer no 1
// var first = prompt("First name");
// var last = prompt("Last name");
// var full_name = first + last;
// alert(full_name);

// Answer no 2
// var favorite = prompt("My Favorite phone is: ");
// var Length = favorite.length;
// document.write("My favorite phone is: " + favorite + "<br>");
// document.write("Length of string: " + Length)

// Answer no 3
// var a = "Pakistani";
// var b = a.indexOf('n');
// document.write("String: " + a + "<br>");
// document.write("Index Of 'n': " + b);

// Answer no 4
// var a="Hello World";
// var b=a.lastIndexOf('l')
// document.write("String :"+" " + a +"<br>")
// document.write("Last index of 'l' is:" +" " + b)

// Answer no 5
// var a = "Pakistani";
// var b = a.charAt(3);
// document.write("String: " + a + "<br>");
// document.write("Character at index 3: " + b);

// Answer no 6
// var first = prompt("First name");
// var last = prompt("Last name");
// var full_name = first.concat(last);
// alert(full_name);

// Answer no 7
// var text="Hyderabad"
// document.write("City: " + text + "<br>");
// for (var i = 0; i < text.length; i++) 
// {
//     if (text.slice(i, 5) === "Hyder") 
//     {
//     text = text.slice(0, i) + "Islam" + text.slice(i + 5);
//     }
// }
// document.write("After replacement: " + text)

// Answer no 8
// var text = "Ali and Sami are best friends. They play cricket and footbal togrther";
// for (var i = 0; i < text.length; i++) 
// {
//     if (text.slice(i, i + 3) === "and")
//     {
//     text = text.slice(0, i) + "&" + text.slice(i + 3);
//     }
// }
// document.write(text);


// Answer no 9
// var text="472"
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === "472") {
//     text = text.slice(0, i) + 472 + text.slice(i + 3);
//     }
// }
// document.write("Value :" + text + "<br>" +"Type : string" + "<br>")
// document.write("Value :" + text + "<br>" +"Type :Number")

// Answer no 10
// var a = prompt("Enter the value")
// var b = a.toUpperCase()
// document.write("User input :" + " " + a + "<br>")
// document.write("Upper case :" + " " + b)


// Answer no 11
// var a = prompt("Enter the value");
// var b = a.charAt(0).toUpperCase() + a.slice(1);
// document.write("User input :" + a +"<br>");
// document.write("Tittle Case :" + " " + b)


// Answer no 12
// var text = "35.56";
// document.write("Number :" + text + "<br>" );
// for (var i = 0; i < text.length; i++) 
// {
//     if (text.slice(i, i + 5) === "35.56")
//     {
//             text = text.slice(0, i) + "3556" + text.slice(i + 5);
//     }
// }
// document.write("Result :" + text);
