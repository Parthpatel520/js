let x = 5,
  y;
x **= 3;
document.getElementById("demo").innerHTML = "Cube is - " + x;

let a = "20";
let b = 25;
if (a != b) {
  document.write("A & B are same<br>");
} else {
  document.write("A & B are not same<br>");
}

if (a === b) {
  document.write("A & B type are same<br>");
} else {
  document.write("A & B type not are same<br>");
}

document.write("Type of var a : "+typeof(a)+"<br>");
document.write("Type of var b : "+typeof(b)+"<br>");

let age =20;
(age>=18)?document.write("u r eligible"):document.write("u r not eligible");