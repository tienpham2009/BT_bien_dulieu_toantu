let a = +prompt("Celsius is :")
let b = ((a*9)+288)/5;
document.getElementById("Celsius").innerHTML = "Celsius is :" +a;
document.getElementById("Fahrenheit").innerHTML = "Fahrenheit is :" +b;