pdf = new jsPDF(); // pull up the jsPDF library

let button = document.querySelector("button");
let article = document.querySelector("article").textContent;


button.addEventListener("click", printPDF);

function printPDF()
{
  pdf.text(10, 10, article);
  pdf.save('article of the year');
};