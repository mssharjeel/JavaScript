// JavaScript

// Chap # 49-52

// Task # 1

// function DataShow(){
//     var em = document.getElementById("MyEmail")
//     var nam = document.getElementById("MyName")
//     var num = document.getElementById("MyNumber")
//     document.write("Your Name: "+nam.value+"<br>Your Number: "+num.value+"<br>Your E-mail: "+ em.value);
// }

// Task # 2

// function ReadMore(){
//     var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nam reiciendis incidunt ab, quisquam modi quo aut necessitatibus sapiente sint voluptate explicabo dolorem, ipsa voluptatum ipsam harum. Aspernatur, recusandae et?"
//     document.getElementById("MyParagraph").innerHTML = text;
// }

// Task # 3

// var rIndex,
// table = document.getElementById("table");


// function checkEmptyInput()
// {
// var isEmpty = false,
//     Sno = document.getElementById("Sno").value,
//     fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;

// if(Sno === ""){
//     alert("Sno cammot be empty");
//     isEmpty = true;
// }
// else if(fname === ""){
//     alert("First Name Connot Be Empty");
//     isEmpty = true;
// }
// else if(lname === ""){
//     alert("Last Name Connot Be Empty");
//     isEmpty = true;
// }
// else if(age === ""){
//     alert("Age Connot Be Empty");
//     isEmpty = true;
// }
// return isEmpty;
// }


// function addHtmlTableRow()
// {

// if(!checkEmptyInput()){
// var newRow = table.insertRow(table.length),
//     cell0 = newRow.insertCell(0),
//     cell1 = newRow.insertCell(1),
//     cell2 = newRow.insertCell(2),
//     cell3 = newRow.insertCell(3),
//     Sno = document.getElementById("Sno").value,
//     fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;

// cell0.innerHTML = Sno;
// cell1.innerHTML = fname;
// cell2.innerHTML = lname;
// cell3.innerHTML = age;

// selectedRowToInput();
// }
// }


// function selectedRowToInput()
// {

// for(var i = 1; i < table.rows.length; i++)
// {
//     table.rows[i].onclick = function()
//     {

//         rIndex = this.rowIndex;
//       document.getElementById("Sno").value = this.cells[0].innerHTMLl;
//       document.getElementById("fname").value = this.cells[1].innerHTML;
//       document.getElementById("lname").value = this.cells[2].innerHTML;
//       document.getElementById("age").value = this.cells[3].innerHTML;
//     };
// }
// }
// selectedRowToInput();

// function editHtmlTbleSelectedRow()
// {
// var Sno = document.getElementById("Sno").value,
//     fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;
// if(!checkEmptyInput()){
// table.rows[rIndex].cells[0].innerHTML = Sno;
// table.rows[rIndex].cells[1].innerHTML = fname;
// table.rows[rIndex].cells[2].innerHTML = lname;
// table.rows[rIndex].cells[3].innerHTML = age;
// }
// }

// function removeSelectedRow()
// {
// table.deleteRow(rIndex);

// document.getElementById("Sno").value = "";
// document.getElementById("fname").value = "";
// document.getElementById("lname").value = "";
// document.getElementById("age").value = "";
// }