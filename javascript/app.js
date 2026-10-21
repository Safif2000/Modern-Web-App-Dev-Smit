// <---- chapter:1 Alert assignment ------>

// q1:

// alert("hello world")

//q2:

// alert("Error! Please enter a valid password. ")

// q3:

// alert("Welcome to JS Land... \n Happy Coding!")

// q4:

//  alert("Welcome to JS Land")

//   alert("Happy Coding!")

// q5:

// alert("Hello... I can run JS through my web browser's console");

//q6:

//  alert("Welcome to my website!");

//q7: a,b,c,d mention in index.html file

//-----> chapter 1 ends here  <--------

//------> chapter 2 starts variables for strings ------>

// q1:

// var username;

//q2:

// var myName= "Syed Muhammad Afif";

//q3 a,b,c:

// var message;
// message="Hello World";
// alert(message)

// q4

// var name = "Syed Muhammad Afif";
// var age = "26 years old";
// var course = "Certified Mobile Application Development";

// alert(name);
// alert(age);
// alert(course);

//q5

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

//q6

// var email = "example@example.com";
// alert("My email address is " + email);

//q7

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

//q8

// document.write("Yah! I can write HTML content through JavaScript");

//q9

// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);
// document.write(design);

//------> chapter 2 ends here variables for strings <------

//------> chapter 3 starts variables for numbers ------>

// q1

// var age = "I am 26 years old";
// alert(age)

// q2

// var visits = 14;
// alert("You have visited this site " + visits + " times");

// q3

// var birthYear= 2000;
// document.write("My birthyear is ", birthYear)
// document.write("Data type of my declared var is number")

//q4

// var visitorName = "Afif";
// var productTitle = "T-shirt(s)";
// var quantity = 5;

// document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store.");

//------> chapter 3 ends here variables for numbers <------

//------> chapter 4 starts here  Variable names legal and illegal <------

// q1

// var a, b, c;

// console.log(a);
// console.log(b);
// console.log(c);

// q2

// 5 legal variable name

// var name = "Afif";

// var _age = 25;

// var $total = 100;

// var userScore1 = 95;

// var x = 1, y = 2, z = 3;

//    5  illegal variable name

// var 1user = "Afif";

// var first-name = "Afif";

// var user age = 25;

// var function = 10;

// var total#count = 50;

//q3 a,b,c,d,e

// document.write("<h1>Rules for naming JS variables</h1>");
//         document.write("<p>Variable names can only contain <b>numbers</b>, <b>letters</b>, <b>$</b> and <b>_</b>. For example <b>$my_1stVariable</b></p>");
//         document.write("<p>Variables must begin with a <b>letter</b>, <b>$</b> or <b>_</b>. For example <b>$name</b>, <b>_name</b> or <b>name</b></p>");
//         document.write("<p>Variable names are case <b>sensitive</b></p>");
//         document.write("<p>Variable names should not be JS <b>keywords</b></p>");

//------> chapter 4  end here Variable names legal and illegal <------

// ---->chapter 5 math expression<----

// q1,q2

// var a=3;
// var b=5;
// var res= a+b;
// document.write("sum of " + a + " and " + b + " is " + res);

// var a=5;
// var b=3;
// var res= a-b;

// document.write( res);

// var a=5;
// var b=3;
// var res= a*b;
// document.write(res);

// var a=5;
// var b=3;
// var res= a/b;
// document.write(res);

// var a=5;
// var b=3;
// var res= a%b;
// document.write(res);

//q3 a,b,c,d,e,f,g,h,i,j,k,l

// var num;

// document.write("Value after variable declaration is " + num + "<br>");

// num = 5;

// document.write("Initial value: " + num + "<br>");

// num++;

// document.write("Value after increment is: " + num + "<br>");

// num = num + 7;

// document.write("Value after addition is: " + num + "<br>");

// num--;

// document.write("Value after decrement is: " + num + "<br>");

// var remainder = num % 3;

// document.write("The remainder is: " + remainder + "<br>");

// q4

// var movie_ticket=600;

// var total=movie_ticket*5;

// document.write("Total cost to buy 5 tickets to a movie is" + total);

// console.log(total);

// q5
// var num = 4;

//         document.write("Table of " + num + "<br>");
//         document.write(num + "x1=" + (num * 1) + "<br>");
//         document.write(num + "x2=" + (num * 2) + "<br>");
//         document.write(num + "x3=" + (num * 3) + "<br>");
//         document.write(num + "x4=" + (num * 4) + "<br>");
//         document.write(num + "x5=" + (num * 5) + "<br>");
//         document.write(num + "x6=" + (num * 6) + "<br>");
//         document.write(num + "x7=" + (num * 7) + "<br>");
//         document.write(num + "x8=" + (num * 8) + "<br>");
//         document.write(num + "x9=" + (num * 9) + "<br>");
//         document.write(num + "x10=" + (num * 10) + "<br>");

// q6  a,b,c,d

// Celsius to Fahrenheit
// var celsiusTemp = 25;
// var fahrenheitResult = (celsiusTemp * 9) / 5 + 32;
// document.write(celsiusTemp + "°C is " + fahrenheitResult + "°F<br>");

// Fahrenheit to Celsius
// var fahrenheitTemp = 77;
// var celsiusResult = ((fahrenheitTemp - 32) * 5) / 9;
// document.write(fahrenheitTemp + "°F is " + celsiusResult + "°C");


// q7

// var item1Price = 650;
// var item2Price = 100;
// var item1Qty = 3;
// var item2Qty = 7;
// var shippingCharges = 100;

// var totalCost = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;

// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is " + item1Price + "<br>");
// document.write("Quantity of item 1 is " + item1Qty + "<br>");
// document.write("Price of item 2 is " + item2Price + "<br>");
// document.write("Quantity of item 2 is " + item2Qty + "<br>");
// document.write("Shipping Charges " + shippingCharges + "<br><br>");
// document.write("Total cost of your order is " + totalCost);


// q8

// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%");


// q9

// var totalPKR = (10 * 104.80) + (25 * 28);

// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR: " + totalPKR);


// q10

// var initialNum = 5;
// var result = ((initialNum + 5) * 10) / 2;



// q11

// var currentYear = 2016;
// var birthYear = 1992;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// document.write("<h1>Age Calculator</h1>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("They are either " + age2 + " or " + age1 + " years old.");

// q12

// var radius = 20;
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;

// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);



// q13
// var favSnack = "chocolate chip";
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;

// var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favourite Snack: " + favSnack + "<br>");
// document.write("Current age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of snacks per day: " + amountPerDay + "<br>");
// document.write("You will need " + totalNeeded + " " + favSnack + " to last you until the ripe old age of " + maxAge);

// ---->chapter 5 ends here math expression<----


// ---->chapter 6 starts here math expression<----
// q1

// var a = 10;

// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("................................................<br><br>");

// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");



// q2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result);



