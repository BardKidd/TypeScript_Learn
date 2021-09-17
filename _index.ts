let oobj = {
  prop: "Hello",
  child: {
    prop1: 123,
    prop2: false,
  },
};

let obj1 = { ...oobj };
let obj2 = { ...obj1, goodbye: "掰掰" };
let obj3 = Object.assign(obj2, {
  gg: "掰掰喽",
});

console.log(obj3);
