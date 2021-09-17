const button = document.querySelector("button")! as HTMLElement;
const input1 = document.getElementById("num1")! as HTMLInputElement; // 使用驚嘆號表示這個是 HTML 的 input 標籤，確保必定有值，而非 falsy。
const input2 = document.getElementById("num2")! as HTMLInputElement;
const answer = document.getElementById("calcAnswer")! as HTMLElement;

// 告訴該參數他的型別為 number。
function add(num1: number, num2: number) {
  return num1 + num2;
}

// 單純使用以下程式碼，還是不行。因為 input1.value 等值還是字串。
// button.addEventListener("click", function () {
//   console.log(add(input1.value, input2.value));
// });
// 所以在前面加上 + 號就能確保他是數值。
button.addEventListener("click", function () {
  answer.innerHTML = add(+input1.value, +input2.value);
  console.log(add(+input1.value, +input2.value));
});

// 可使用 tsc 編譯。假如畫面上還有錯誤，雖然會編譯成功，但還是會跳出錯誤訊息。
