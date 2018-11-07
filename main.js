import { multiply, multiplyWithx } from './lib.js';
console.log(multiply(5,5)); // 25
console.log(multiplyWithx(6)); // 12

document.getElementById("btnA").addEventListener("click", function(){
    document.getElementById("multiplyA-B").innerHTML = "<b>" + multiply(5,5) + "</b>";
});

document.getElementById("btnB").addEventListener("click", function(){
    document.getElementById("multiplyX-Y").innerHTML = "<b>" + multiplyWithx(6) + "</b>";
});

// function sembarang1(){
//     const a = document.getElementById('hasil1');
//     return a.innerHTML = multiply(5,5);
// }

// function sembarang2(){
//     const b = document.getElementById('hasil2')
//     return b.innerHTML = multiplyWithx(6);
// }