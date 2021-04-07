let a = +prompt("Physical");
let b = +prompt("chemistry");
let c = +prompt("Biological");
document.getElementById("Physical").innerHTML="Physical is :" +a;
document.getElementById("chemistry").innerHTML="Physical is :" +b;
document.getElementById("Biological").innerHTML="Physical is :" +c;

let Average = (a + b +c)/3;
document.getElementById("Average").innerHTML = "Average is :" + Average;
let Sum = a + b + c;
document.getElementById("Sum").innerHTML = "Sum is :" + Sum;