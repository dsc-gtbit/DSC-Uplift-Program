const div1 = document.getElementById("docs");
const div2 = document.getElementById("docs1");

// div1.onclick = () => {
//   alert();
// };

// div1.onclick = clickFunction;

// div1.addEventListener("click", clickFunction);
// div1.addEventListener("click", () => {

// });
div1.addEventListener("click", function () {
  div2.innerHTML = "<b>Hey</b>";
});


// console.log(div1)

const v1 = {
  a: "b"
}

function clickFunction() {
  alert("Hola!")
}

// {
//   html: {
//     head: {
//       link: {
//         href: "./main.css"
//       }
//     },
//     body: {
//       div: {
//         classname: "button",
//         id: "docs"
//       }
//     }
//   }
// }