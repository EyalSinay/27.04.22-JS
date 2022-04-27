// Question 1:
// In your own words what will this point to and why ? (Note
// this is the global scope)
// console.log(this);
// window


// Question 2:
// a.In your own words what will this point to and why.
// b.How can you fix this code.
// const myObj = {
//     name: "Timmy",
//     greet: () => {
//         console.log(`Hello ${this.name}`);
//     },
// };
// myObj.greet();
// window object, because greet is an arrow function. to fix it we need to change it to function declaration.


// Question 3:
// In your own words what will this point to and why ?
// const myFuncDec = function () {
//     console.log(this);
// };
// myFuncDec();
// to the window object again, because myFuncDec is a function and not an object.


// Question 4:
// In your own words what will this point to and why ?
// const myFuncArrow = () => {
//     console.log(this);
// };
// myFuncArrow();
// to the window object, because myFuncArrow is an arrow function.



// Question 5:
// a.In your own words what will this point to and why.
// b.How can you fix this code.
document.querySelector(".element").addEventListener(() => {
    console.log(this);
});
// to the window object, because myFuncArrow is an arrow function.
// to fix it we can use function declaration, or to use event.target instead this.