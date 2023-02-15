"use strict"

// let heads = document.getElementsByTagName("h1");


// // console.log(heads);

// for (const item of heads) {
//     console.log(item)
// }




// let elem = document.getElementById("header")


// let elem = document.getElementsByClassName("header")


// let elem = document.querySelector("#header1");

// let elem = document.querySelectorAll("#header1");


// for (const iterator of elem) {
//     console.log(iterator)
// }


// let h1 = document.querySelector("#products .card-item2 h1:nth-child(2))





// let elems = document.querySelector("#products .card-item2 h1")

// for(let i=0; i<elems.length; i++){
//     console.log(elems[i]);
// }


// console.log(elems[0]);


// let a =document.querySelector("#products .card-item1 a");

// console.log(elem.innerText);

// let elemText =elem.innerText;


// if(elemText =="salam"){
//     console.log("Correct");
// }


// let elemText =elem.innerHTML;


// if(elemText =="salam"){
//     console.log("Correct");
// }


// elem.innerText ="Roya";

// console.log(a);

// a.innerText ="Roya"
// let element =document.querySelector("#products .card-item1 h1");

// element.style.color ="red";
// element.style.backgroundColor  ="yellow";
// element.style.position  ="relative";
// element.style.top  ="100px";

// element.className ="test"


// element.classList.add("active");

// element.classList.add("Roya");

// element.classList.remove("header");


let button = document.querySelector("#products .switch")

// button.onclick = function(){
//     alert("Clicked1")
// }

// button.onclick = function(){
//     alert("Clicked2")
// }

// button.addEventListener("click",function(){
//     alert("Clicked1")
// })

// button.addEventListener("click",function(){
//     alert("Clicked2")
// })


button.addEventListener("click", function () {
    this.style.backgroundColor ="red"
})