// JavaScript
// Assingment # 6

// Chap # 21-25

// Task # 1 

// var Fname = prompt("Enter your first name");
// var Lname = prompt("Enter your last name");
// alert("Welcome "+Fname+" "+Lname);

// TAsk # 2

// var MblModel = prompt("Enter you favorite mobile model");
// var MblLength = MblModel.length;
// document.writeln("My favorite mobile is: ".bold() +MblModel+"<br>" + "Length of string is: ".bold() +MblLength);

// Task # 3

// var pk = "Pakistani";
// var IndNum = pk.indexOf("n");
// alert("String: "+pk+"\nIndex of n is: "+IndNum);

// Task # 4

// var hellow = "Hello World";
// var IndNumber = hellow.lastIndexOf("l");
// alert("String: "+hellow+"\nIndex of last L is: "+IndNumber);

// Task # 5

// var pak = "Pakistani";
// var charInd = pak.charAt(3);
// alert("String: "+pak+"\nCharacter at index 3 is: "+charInd);

// Task # 6

// var FirstName = prompt("Enter your first name");
// var LastName = prompt("Enter your last name");
// var concatt = FirstName.concat(LastName);
// alert("Welcome "+concatt);

// Task # 7

// var city = "Hyderabad";
// var NewCity = city.replace("Hyder", "Islam");
// alert("City is: "+city+"\nUpdated City is: "+NewCity);

// Task # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var NewMessage = message.replace(/and/g, "&");
// document.writeln("Message is: ".bold()+"<br>"+message+"<br>"+"Updated Message is: ".bold()+"<br>"+NewMessage);

// TAsk # 9

// var str = "456";
// alert("The type of 456 is: "+typeof str);
// var num = Number(str);
// alert("Now The type of 456 is: "+typeof num);

// TAsk # 10

// var input = prompt("Enter some letters");
// var conv = input.toUpperCase();
// alert("The input is: "+input+"\nUpper case: "+conv);

// Task # 11

// var input1 = prompt("Enter some letters");
// alert("Title case: "+input1[0].toUpperCase() +  input1.slice(1));

// Task # 12

// var DotNum = "35.36";
// alert("Number: "+DotNum);
// DotNum = DotNum.replace(/\./g,"");
// alert("Result: "+DotNum);

// Task # 13

// var username_input = prompt("enter username")
// var regex = /^[A-Za-z0-9 ]+$/
// var isValid = regex.test(username_input);
//         if (!isValid) {
//             alert("Contains Special Characters.");
//         } else {
//             alert("Does not contain Special Characters.");
//         }

// Task # 14

// var ItemArr = ["cake", "biscuit", "cookie", "chips", "patty"]
// var que = prompt("Welcome to our bakery! Please enter the item you want. :)");
// que = que.toLowerCase();
// var find = ItemArr.includes(que);
// if (find == true){
//     alert("Yes "+que+ " is available at index: "+ ItemArr.indexOf(que));
// }
// else{
//     alert("Sorry! we dont have "+que);
// }

// Task # 15

// var inputt = prompt("enter password");
// var passw =  /^[A-Za-z]\w{6,100}$/;
// if(inputt.match(passw)) 
// { 
// alert('Valid Password')
// }
// else
// { 
// alert('Invalid password')
// }

// Task # 16

// var university = "universty of karachi"
// var uni_split = university.split("")
// for( var j = 0; j<university.length; j++){
//     document.writeln("<br>"+uni_split[j])
// }

// Task # 17

// var userInput = prompt("Enter some word");
// var lastAlpha = userInput.charAt(userInput.length-1);
// alert("Word: "+userInput+"\nLast alphabet: "+lastAlpha);

// Task # 18

// var occuranceMessage = "The quick brown for jumps over the lazy dog";
// occuranceMessage = occuranceMessage.toLowerCase();
// var occurNum = occuranceMessage.match(/the/g);
// alert("there are "+occurNum.length+" occurance(s) of word 'The'");

/*--------------------------------------------------------------------------*/

// Chap # 26-30

// Task # 1

// var usrInp = +prompt("enter any positive number");
// var roundOff = Math.round(usrInp);
// var NumFloor = Math.floor(usrInp);
// var NumCiel = Math.ceil(usrInp); 
// alert("Number: "+usrInp+"\nRound Off: "+roundOff+"\nFloor number: "+NumFloor+"\nCiel number: "+NumCiel);

// Task # 2

// var usrInp = +prompt("enter any negative number");
// var roundOff = Math.round(usrInp);
// var NumFloor = Math.floor(usrInp);
// var NumCiel = Math.ceil(usrInp); 
// alert("Number: "+usrInp+"\nRound Off: "+roundOff+"\nFloor number: "+NumFloor+"\nCiel number: "+NumCiel);

// Task # 3

// var UrIn = +prompt("Enter value");
// alert("The absolute value of "+UrIn+" is "+ Math.abs(UrIn));

// Task # 4

// var dice = Math.floor(Math.random()*6+1)
// alert("Dice value: "+dice);

// TAsk # 5 

// var val = Math.random();
// if ( val < 0.5){
//     alert("Heads");
// }
// else{
//     alert("Tails");
// }

// Task # 6 

// var randomNumber = Math.floor(Math.random() * 100);
// alert("Random number from 1-100 is: "+randomNumber);

// Task # 7

// var weight = prompt("Enter your weight in Kilograms");
// var ConvWeight = parseInt(weight);
// alert("The weight of user in kilograms is "+ConvWeight);

// Task # 8

// var secretNum =  Math.floor(Math.random() * 10);
// for(i = 0; i < 5; i++){
// var secretNumGuess = +prompt("Guess any number from 1 - 10\nYou have 5 tries :)");
// if(secretNum == secretNumGuess){
//     alert("Correct number");
// }
// else{
//     alert("Wrong");
// }
// }

/*--------------------------------------------------------------------------*/

// Chap # 31-34

// Task # 1

// var NewDate = new Date();
// document.writeln("Current date is ".bold()+"<br>"+NewDate);

// Task # 2

// var month = new Array();
//   month[0] = "January";
//   month[1] = "February";
//   month[2] = "March";
//   month[3] = "April";
//   month[4] = "May";
//   month[5] = "June";
//   month[6] = "July";
//   month[7] = "August";
//   month[8] = "September";
//   month[9] = "October";
//   month[10] = "November";
//   month[11] = "December";

//   var MyDate = new Date();
//   var MonthName = month[MyDate.getMonth()];
//   alert("Current month is "+MonthName);

// Task # 3

// var dayName = new Array();
// dayName[0] = "Sun";
// dayName[1] = "Mon";
// dayName[2] = "Tue";
// dayName[3] = "Wed";
// dayName[4] = "Thur";
// dayName[5] = "Fri";
// dayName[6] = "Sat";
//   var tdy = new Date();
//   var dayz = dayName[tdy.getDay()];
//   alert("today is "+dayz)

// Task # 4

// var DName = new Array();
// DName[0] = "Sun";
// DName[1] = "Mon";
// DName[2] = "Tue";
// DName[3] = "Wed";
// DName[4] = "Thur";
// DName[5] = "Fri";
// DName[6] = "Sat";
//   var today = new Date();
//   var din = DName[today.getDay()];
//   alert("today is "+din)
//   if(din == "Sat"){
//       alert("Today is fun Day!");
//   }
//   else if(din == "Sun"){
//     alert("Today is fun Day!");
// }
// else{
//     alert("Kaam pr jao aaj!");
// }

// Task # 5

// var t = new Date();
// var TodaysDate = t.getDate();
// if(TodaysDate < 15){
//     alert("Today's date is "+TodaysDate+"\nFirst 15 days of month");
// }
// else{
//     alert("Today's date is "+TodaysDate+"\nLast 15 days of month");    
// }

// Task # 6

// var CurDate = new Date();
// var milliSeconds = CurDate.getTime();
// var mins = Math.floor(milliSeconds / 60000);
// document.writeln("Current date is ".bold()+CurDate+"<br>"+"<br>"+"Milliseconds since midnight, Jan. 1,1970: ".bold()+milliSeconds+"<br>"+"<br>"+"Minutes since midnight, Jan. 1970: ".bold()+mins);

// Task # 7

// var AjKiDate = new Date();
// var hourz = AjKiDate.getHours();
// if(hourz > 12){
//     alert("Time is "+hourz+"\nIts P.M")
// }
// else{
//     alert("Time is "+hourz+"\nIts A.M")
// }

// Task # 8

// var LaterDay = new Date(new Date().getFullYear(), 11, 31);
// document.writeln("Last Day of this year is: ".bold()+LaterDay);

// Task # 9

// var date_1 = new Date('04/25/2020');
// var date_2 = new Date();
// var diff_Time = Math.abs(date_2 - date_1);
// var diff_Days = Math.ceil(diff_Time / (1000 * 60 * 60 * 24));
// alert(diff_Days + " days have passed since 1st Ramadan 2020");

// Task # 10

// var date1 = new Date();
// var date2 = new Date("Dec 05, 2015 20:15:16");
// var seconds = Math.abs(date1 - date2) / 1000;
// alert("From reference date: "+date2+"\n"+Math.ceil(seconds)+" seconds have passed away");

// TAsk # 11

// var presentDate = new Date();
// document.writeln("Current date is: ".bold()+presentDate);
// presentDate.setHours(presentDate.getHours() - 1);
// document.writeln("<br> One hour ago: ".bold()+presentDate);

// TAsk # 12

// var DateAgo = new Date();
// document.writeln("Current date is: ".bold()+DateAgo);
// DateAgo.setFullYear(DateAgo.getFullYear() - 100);
// document.writeln("<br> 100 years ago date was: ".bold()+DateAgo);

// Task # 13

// var My_Date = new Date();
// var CurrentAge = +prompt("enter age")
// My_Date.setFullYear(My_Date.getFullYear() - CurrentAge);
// var YearOfBirth = My_Date.getFullYear()
// document.writeln("<br> Your year of birth is: ".bold()+YearOfBirth);

// Task # 14

// var ConsumerName = prompt("Enter your name");
// var CurrentMonth = prompt("Enter current month");
// var NumOfUnits = +prompt("Enter number of units");
// var ChargesPerUnit = 16, LatePaymentCharges = 350, NetPayment = (NumOfUnits * ChargesPerUnit), Late_Payment = (NumOfUnits * ChargesPerUnit) + LatePaymentCharges;
// document.writeln("K-Electric Bill".bold()+"<br> Consumer Name: "+ConsumerName+"<br> Current Month: "+CurrentMonth+"<br> No. of Units: "+NumOfUnits+"<br> Per Unit Charges: "+ChargesPerUnit);
// document.writeln("<br><br> Net Payable Amount (Within Due Date): "+Math.round(NetPayment)+"<br> Gross Payable Amount (After Due Date): "+Math.round(Late_Payment)+"<br> Late Payment Charges: "+LatePaymentCharges);

/*--------------------------------------------------------------------------*/

// Chap # 35-38

// Task # 1

// function tellDateAndTime() {
//     var now = new Date();
//     document.writeln(now)
// }
// tellDateAndTime();

// Task # 2

// function NameGreeting(){
//     var First_Name = prompt("Enter your first name");
//     var Last_Name = prompt("Enter your last name");
//     alert("Welcome "+First_Name+" "+Last_Name);
// }
// NameGreeting();

// Task # 3

// function addition(First_Num,Second_Num,Result_Num){
//     First_Num = +prompt("enter first number");
//     Second_Num = +prompt("Enter second number");
//     Result_Num = First_Num + Second_Num
//     alert(Result_Num)
// }
// addition();

// Task # 4

// function calculator(Num_1, Num_2, Res_3, opt){
//     Num_1 = +prompt("Enter 1st operand")
//     Num_2 = +prompt("Enter 2nd operand")
//     opt = prompt("Enter operator")
//     if(opt === "+"){
//         Res_3 = Num_1 + Num_2
//         alert(Res_3)
//     }
//     else if(opt === "-"){
//         Res_3 = Num_1 - Num_2
//         alert(Res_3)
//     }
//     else if(opt === "*"){
//         Res_3 = Num_1 * Num_2
//         alert(Res_3)
//     }
//     else if(opt === "/"){
//         Res_3 = Num_1 / Num_2
//         alert(Res_3)
//     }
//     else{
//         alert("Invalid operator")
//     }
// }
// calculator();

// Task # 5

// function squaring(a){
//     a= +prompt("enter any num");
//     alert("Square of your number is "+a*a)
// }
// squaring();

// Task # 6

// function factorial(){
//     var input = +prompt("Enter the number for factorial");
//     var result = input;

// for(var i=1;i < input;i++){
//   result = i * result;
// }
// alert("The factorial of "+input+" is "+result);
// }
// factorial();

// Task # 7

// function counting(){
//     var startNum = +prompt("Enter starting num")
//     var endNum = +prompt("Enter ending num")
//     for(var j = startNum; j <= endNum; j++){
//         document.writeln(j+"<br>")
//     }
// }
// counting();

// Task # 8

// function findHypotenuse(base, per)
//     { 
//         base = +prompt("Enter value for base");
//         per = +prompt("Enter value for perpendicular");
//         var h = Math.sqrt((base * base) + (per * per)); 
//         alert("The value of hypotenuse is "+h) 
//     } 
// findHypotenuse();

// Task # 9

// function CalculateArea(height,widht,area){
//     height = +prompt("Enter value for Height")
//     widht = +prompt("Enter value for Widht")
//     area = height*widht;
//     alert("Area of rectangle is "+area);
// }
// CalculateArea();

// TAsk # 10

// function ReverseString(strOne, strTwo) {
//     strOne = prompt("enter word");
//     strTwo = strOne; 
// strOne =  strOne.split('').reverse().join('') 
// if (strTwo === strOne){
//     alert("Its a palindrome")
// }
// else{
//     alert("Its a Not palindrome")
// }
// } 
// ReverseString()

// Task # 11

// function first_letter_capital(letterOne)
// {
//  return letterOne.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// document.writeln(first_letter_capital('the quick brown fix'));

// TAsk # 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.writeln("The longest word is "+find_longest_word('Web Development Tutorial'));

// task # 13

// function character_counting(str_1, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str_1.length; position++) 
//  {
//     if (str_1.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(character_counting('w3resource.com', 'o'));

// TAsk # 14

// function calcCircumference(){
//     var radius = +prompt("Enter radius to calculate circumference")
//     var circum = (2 * 3.14 *radius);
//     alert("The circumference is "+circum);
// }
// function calcArea(){
//     var radius_1 = +prompt("Enter radius to calculate are of circle")
//     var area_1 = (3.14 *(radius_1*radius_1));
//     alert("The area is "+area_1);
// }
// calcCircumference();
// calcArea();