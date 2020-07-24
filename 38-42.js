// JavaScript

// Chap # 38-42

// Task # 1 

// function raised(a,b){
//     a = +prompt("Enter value of A");
//     b = +prompt("Enter value of B");
//     var c = Math.pow(a,b);
//     alert("The value of a: "+a+" raised to b: "+b+" is: "+c);
// }
// raised();

// TAsk # 2

// function CheckLeapYear(){
//     var yearEntry = prompt("Enter any year");
//     if( (0 == yearEntry % 4) && (0 != yearEntry % 100) || (0 == yearEntry % 400) )
//     {
//         alert(yearEntry+" is a leap year");  
//     }
//     else
//     {
//         alert(yearEntry+" is not a leap year");  
//     }
// }
// CheckLeapYear();

// Task # 3

// function AreaOfTrianlge(){
// var side1 = +prompt("enter value of first side of triangle");
// var side2 = +prompt("enter value of second side of triangle");
// var side3 = +prompt("enter value of third side of triangle");

// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// alert("Area of trianle is: "+area);
// }
// AreaOfTrianlge();

// Task # 4

// function mainFuntion(mainResult1,mainResult2){
//     var marks1 = +prompt("Enter marks for 1st Subject");
//     var marks2 = +prompt("Enter marks for 2nd Subject");
//     var marks3 = +prompt("Enter marks for 3rd Subject");

//         function average(avg){
//             avg = (marks1+marks2+marks3)/3
//             return avg
//         }
//         function percentage(perr){
//             perr = ((marks1+marks2+marks3)/300)*100;
//             return perr
//         }
//         mainResult1 = average();
//         mainResult2 = percentage();
//         alert("Average of marks is: "+mainResult1+"\n"+"Percentage is: "+ mainResult2+"%")
// }
// mainFuntion();

// Task # 5

// var NewArrayOne = ["a","b","c","d","e"];
// alert("Array: "+NewArrayOne)
// var i = 0;
// do {
//   if(NewArrayOne === "c"){
//       alert(NewArrayOne.length);
//   }
// }
// while (i < NewArrayOne.length);

// Task # 6

// function removeVowels(){
//     var strOne = ["apple","banana","grapes","incognito","universe"];                          

//    string = strOne.map(x=>x.replace( /[aeiou]/g, '' ));              

//   alert(string);
// }
// removeVowels();

// Task # 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
    
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
//     return count
//   }
//   alert("Occurance of vowels: "+findOccurrences());

// TAsk # 8

// var distance = +prompt("Enter distance between two cities in KM");
// function ConvertToMeter(){
//     var meter = distance*1000;
//     return meter
// }
// function ConvertToFeet(){
//     var feet = distance*3281;
//     return feet
// }function ConvertToInches(){
//     var inches = distance*39370
//     return inches
// }function ConvertToCentiMeter(){
//     var cm = distance*100000
//     return cm
// }
// alert(distance+"KM into meter is: "+ConvertToMeter());
// alert(distance+"KM into feet is: "+ConvertToFeet());
// alert(distance+"KM into inches is: "+ConvertToInches());
// alert(distance+"KM into centimeter is: "+ConvertToCentiMeter());

// Task # 9


// function CalculateOvertime(){
//     var WorkTime = +prompt("enter your complete working time in hours")
//     var pay = 1000;
//     alert("Your initial pay was: "+pay)
//     if (WorkTime > 40){
//         for(i = 41; i <= WorkTime; i++){
//             pay += 12;
//         }
//         alert("After over time, your pay is: "+pay);
//     }
//     else{
//         alert("no overtime");
//     }
// }
// CalculateOvertime()

// Task # 10

// function notes(){
//     var withdraw = +prompt("enter amount you want to withdraw")
//     var hundred = withdraw/100;
//     var fifty = ((withdraw % 100) / 50);
//     var ten = (((withdraw % 100) % 50) / 10);
//     alert("Your amount is: "+withdraw+"\nYou'll have "+Math.floor(hundred)+" note(s) of hundred\n"+Math.floor(fifty)+" note(s) of fifty\n"+"And "+Math.floor(ten)+" note(s) of ten");
// }
// notes()

// ---END---