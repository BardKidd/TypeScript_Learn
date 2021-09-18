var button = document.querySelector("button");
var input1 = document.getElementById("num1"); // 使用驚嘆號表示這個是 HTML 的 input 標籤，確保必定有值，而非 falsy。
var input2 = document.getElementById("num2");
var answer = document.getElementById("calcAnswer");
var infinity = Infinity;
var unu = undefined; // void 變數只能賦予 null 或 undefined
var u = undefined;
var n = null;
// 告訴該參數他的型別為 number。
function add(num1, num2) {
    if (typeof num1 === "string") {
        throw new Error("\u76EE\u524D\u503C\u662F: " + answer + "\uFF0C\u578B\u5225\u70BA: " + typeof answer);
        // console.log(msg);
    }
    return num1 + num2;
}
// 單純使用以下程式碼，還是不行。因為 input1.value 等值還是字串。
// button.addEventListener("click", function () {
//   console.log(add(input1.value, input2.value));
// });
// 所以在前面加上 + 號就能確保他是數值。
button.addEventListener("click", function () {
    answer.innerHTML = add(+input1.value, +input2.value).toString();
    alertName();
});
// 可使用 tsc 編譯。假如畫面上還有錯誤，雖然會編譯成功，但還是會跳出錯誤訊息。
// void 是空值的概念，用來表示沒有任何回傳值的函式。
function alertName() {
    alert("My name is Yukino");
}
// let createBoolean: boolean = new Boolean(1)
// let createBoolean: boolean = Boolean(1);
// console.log(createBoolean);
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;
// console.log(hexLiteral, binaryLiteral, octalLiteral);
// let u: undefined;
// let num: number = u;
// let isString = 'one';
// isString = 1; // 會報錯。
// let union: string | number;
// union = 'one';
// union = 1;
// function getLearn(something:(string|number)):number {
//   return something.length
// }
function getLearn2(something) {
    return something.toString();
}
var getL = getLearn2("SSS");
console.log(getL);
