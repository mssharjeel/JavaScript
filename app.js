// Chapter 1
// 2. 
alert("Error! Please enter a valid password.")

// 3.
alert("Welcome to JS Land..\n Happy Coding!");

// 4.
alert("Welcome to JS Land..")
alert("Happy Coding! \n Prevent this page from additional dialogs.")

// Chapter 2
var username;
var myname= "M.Sharjeel";
var message;
message = "Hello World";
alert(message);

// 4.
var name = "Jhone Doe";
const age = 15;
var quali = "Certified Mobile App Development";
alert(name);
alert(age+" years old");
alert(quali);

// 5.
var a = "PIZZA\nPIZZ\nPIZ\nP\nP"
alert(a);

// 6.
var email = "sharjeelkhan_us@hotmail.com";
alert("My email address is "+email);

// 7.
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);

// 8.
document.write("Yah! I can write HTML content through JavaScript.");

// 9.
var design="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
alert(design);

// Chapter 3
// 1.
var age= 21;
alert(age);

// 3.
var birthYear = 1999;
document.write("My birth year is "+birthYear+ "\nData type of mt declared variable is number")

// 4.
var name = prompt("Enter your name please")
var product = prompt("Enter your product title")
var quantity = prompt("How many products do u want to order?")

document.write(name+ " ordered "+quantity+ " " +product+ " on XYZ Clothing store.");

// Chapter 4

var num, dollar, underscore;
num = "number";
dollar = "$";
underscore = "_";
var let= "letter";
var sense = "sensitive";
var key = "keyword";
document.write("Rules for naming JS variables <br><br>");

document.write("Variable names can only contain " +num+ "," +dollar+ " and" +underscore+ ".For example $my_1stVariable. <br> Variables must begin with a "+let+ "," +dollar+ " or" +underscore+ ".For example $name, _name or name <br>Variable names are case "+sense +"<br>Variable names should not be JS "+key);


// Chapter 5
// 1.
var a = 2;
var b = 6;
var sum= a+b;
document.write("Sum of "+a +" and " +b +" is "+sum +"<br>");

// 2.
var sub = b-a;
var mul = a*b;
var div = b/a;
var mod = b%a;
document.write("Subtraction is "+sub +"<br>Multiplication is "+mul +"<br> division is " +div+ "<br> Modulus is " +mod);


// 3.
var v = 3;
document.write("Value after variable declaration is: "+v)
var value = 5;
document.write("<br>Initial value: "+value)
value++;
document.write("<br>Value after increment is: "+value)
value = value + 7;
document.write("<br>Value after addition is: "+value)
value--;
document.write("<br> Value after decrement is: "+value)
value = value%3;
document.write("<br>The remainder is : "+value)

// 4.
var cost_of_ticket = 600;
var total_tickets = 600*5;
document.write("<br>Total cost to buy 5 tickets to a movie is "+total_tickets+"PKR");

// 5.
var n = 2;
document.write("Table of "+n+"<br>");
for(var i = 1; i<=10; i++){
    document.write(n+"x"+i+"="+n*i+"<br>");
}

// 6.
var cel = 35;
var c_cel= ((cel*9/5)+32);
var feh = 70;
var c_feh = ((feh-32)*5/9);
document.write("<br>"+cel+"C is "+c_cel+"F");
document.write("<br>"+feh+"F is "+c_feh+"C");

// 7.
var item1= 650;
var q1= 3;
var price1= item1*q1;
var item2 = 200;
var q2 = 7;
var price2= item2*q2;
var charges= 100;
var total_cost = price1+price2+charges;
document.write("Price of item 1 "+item1+"<br>quantity of item 1 "+q1+"<br>Price of item 2 "+item2+"<br>Quantity of item 2 "+q2+"<br>Shipping charges "+charges+"<br>Total cost of ur order is "+total_cost);

// 8.
var total = 850;
var obt = 714;
var per = ((850/714)*100);
document.write("Percentage: "+per);

// 9.
var us_dollar = 104.80;
var dollars_we_have = 10;
var total_us = dollars_we_have*us_dollar;
var saudi_riyal = 28;
var riyal_we_have = 25;
var total_riyal = saudi_riyal*riyal_we_have;
document.write("Total Currency in PKR "+(total_riyal+total_us));

// 10.
var num = 10;
var cal = num+10*10/2;
document.write("Total: "+cal);

// 11.
var current= 2020;
var bith_year= 2000;
document.write("Current Year: "+current+"<br>Birth Year: "+bith_year+"<br>Your Age: "+(current-bith_year));


// 12.
var rad = 2;
var pi = 3.142;
document.write("Radius of circle: "+rad+"<br>The circumferrence is: "+(2*pi*rad)+"<br>The area is: "+(pi*rad*rad));


// 13.
var snack = "Chocolate";
var age = 21;
var max_age = 60;
var remain_years=max_age-age;
var per_day = 2;
document.write("You will need "+(per_day*remain_years)+"Chocolate to last you until the ripe old age of 60");


Chapter 6-9
var a = 10;
++a;
document.write("Result:<br>The value of a is: "+a+"<br>..........................<br>");
document.write("The value of ++a is: "+a+"<br>Now the value of a is: "+a);
document.write("<br>The value of a++ is: "+(a++)+"<br>Now the value of a is: "+a);
document.write("<br>The value of --a is: "+(--a)+"<br>Now the value of a is: "+a);
document.write("<br>The value of a-- is: "+(a--)+"<br>Now the value of a is: "+a);

// 2.
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("a is: "+a+"<br>b is: "+b+"<br>Result is: "+result);

// 3.
var namee = prompt("Enter ur name:");

// 5.
var nmbr = +prompt("Input a number pls: ");
if(nmbr>0)
for(var i=1; i<=10; i++){
    document.write(nmbr+"x"+i+"="+nmbr*i+"<br>")
}
else{
    for(var j=1; j<=10; j++){
        document.write("5x"+j+"="+5*j+"<br>")
    }
}

// Chapter 9-11
// 1.
var city = prompt("Enter Your city name: ");
city.toLowerCase()
if(city==="karachi"){
    document.write("Welcome to city of lights")
}

// 2.
var gender = prompt("Input gender: ")
gender.toLowerCase();
if(gender === "male"){
    document.write("Good Morning Sir")
}
else if(gender==="female"){
    document.write("Good Morning Ma'am")
}

// 3.
var signal_color = prompt("input color of road traffic signal:");
signal_color.toLowerCase();
if(signal_color === "red"){
    alert("Must Stop")
}
else if(signal_color === "yellow"){
    alert("Ready to move")
}
else if(signal_color === "green"){
    alert("Move now")
}
else{
    alert("Stay anyway")
}

// 4.
var fuel_in_car = +prompt("input remaining fuel in car:");
if(fuel_in_car < 0.25){
    alert("Please refill the fuel in your car")
}

// 5.
// a)
var a =4;
if(++a === 5){
    alert("given condition for variable a is true")
}

// b)
var b = 82;
if(b++ === 83){
    alert("given condition for variable b is true")
}

// c)
var c = 12;
if(c++ === 13){
    alert("condition 1 is true")
}
if(c === 13){
    alert("condition 2 is true")
}
if(++c < 14){
    alert("condition 3 is true")
}
if(c === 14){
    alert("condition 4 is true")
}

// d)
var materialCost = 20000;
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}

// e)
if (true){ 
    alert("True"); 
} 
if (false){ 
    alert("False");
}

// f)
if("car" < "cat"){ 
    alert("car is smaller than cat");
}

// 6.
var total_marks = 300;
var marks_obt = +prompt("Input the total marks: ");
var per = ((marks_obt/total_marks)*100);
if(marks_obt >= 80){
    document.write("Total Marks: "+total_marks+ "<br>Marks obtained: "+marks_obt+ "<br>Percentage: "+per+ "<br>Grade: A-one <br>Remarks: Excellent")
}
else if(marks_obt >= 70){
    document.write("Total Marks: "+total_marks+ "<br>Marks obtained: "+marks_obt+ "<br>Percentage: "+per+ "<br>Grade: A <br>Remarks: Good")
}
else if(marks_obt >=60){
    document.write("Total Marks: "+total_marks+ "<br>Marks obtained: "+marks_obt+ "<br>Percentage: "+per+ "<br>Grade: B <br>Remarks: U need to imporve")
}
else{
    document.write("Total Marks: "+total_marks+ "<br>Marks obtained: "+marks_obt+ "<br>Percentage: "+per+ "<br>Grade: Fail <br>Remarks: Sorry")
}

// 7.
var sec_num = 6;
var user = +prompt("guess the secret number: ")
if(user === sec_num){
    alert("Bingo! Correct answer")
}
else if(user+1 === sec_num){
    alert("Close enough to the correct answer");
}

// Chapter 12-13
// 2.
var int1 = +prompt("Enter interger: ");
var int2 = +prompt("Enter interger: ");
if(int1.length > int2.length){
    document.write("Integer 1 is larger.")
}
if(int2.length> int1.length){
    document.write("Integer 2 is larger")
}
else{
    document.write("Both are equal in length")
}

// 3.
var a = +prompt("Input a integer: ")
if(a>0){
    document.write("Positive")
}
else if(a<0){
    document.write("Negative")
}
else{
    document.write("Zero")
}


// 4.
var vov = prompt("Input a character: ")
vov.toLowerCase();
if(vov === "a" || vov ==="i" || vov === "o" || vov ==="u" || vov === "e"){
    document.write("Vovels");
}
else{
    document.write("False")
}

// 5.
var c_pass = "hey";
var pass = prompt("Enter password");
if(pass === c_pass){
    document.write("Correct! The password you entered matches the original password")
}
else if(pass === ""){
    document.write("Please enter your password");
}
else{
    document.write("Incorrect password");
}

// 6.
var greeting;
var hour = 13; 
if (hour < 18){ 
     greeting = "Good day";
} 
else{
    greeting = "Good evening"; 
}

// chapter 14-16
// 7.
var arr =["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
for(var i =0; i< arr.length; i++){
    document.write(arr[i] +"<br>");
}

// 10.
var array = [320, 230, 480, 120];
document.write("Scores of student:"+array);
document.write("Orderd: " +array.sort());

// 11.
var cities = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
var cities1 = cities.slice(2,4);
document.write(cities1);

// 12.
var str = ["This", "is", "my", "cat"];
str.join();
document.write(str);

// 13.
var device = ["Keyboard","Mouse","Printer", "Monitor"]
for(var j=0; j<4; j++){
    document.write("Out: "+device.shift());
}

// 14.
var device1 = ["Keyboard","Mouse","Printer", "Monitor"]
for(var j=0; j<4; j++){
    document.write("Out: "+device1.pop()+"<br>");
}

// Chapter 17-20
// 2.
for(var n=1; n<=10; n++){
    document.write(n+"<br")
}

// 4.
var numm = +prompt("Enter a number to show its muptiplication table: ")
var len = +prompt("Enter length multiplicatiopn table:")

document.write("Multiplication table of "+numm+ "<br>Length "+len+ "<br>")
for(var s = 1; s<=len; s++){
    document.write(numm+" x "+ s+ " = "+numm*s+"<br>")
}

// 5.
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var f=0; f<fruits.length; f++){
    document.write("Element at index "+f+" is "+fruits[f]+"<br>");
}

// 7.
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("What do u want to order sir/Ma'am?");
for(var a=0; a<A.length; a++){
    if(search === A[a]){
        alert(search+" is available at index "+a+" in our bakery");
    }
}

// 8.
var B = [24, 53, 78, 91, 12];
alert("Largest numnber is "+Math.max.apply(null, B));

// 9.
var C = = [24, 53, 78, 91, 12]
alert("Samllest number is "+Math.min.apply(null, C));

