// console.log("Hello Type Script");
//all the types in the type script are lowercase
// ----------------- Functions --------------------------
function add(num) {
    return num + 2;
}
var sumValue = add(3);
//for multile parameters
// function signUp(id:number,name:string,email:string){
//     if(id>0)
//         return true
//     else
//         return "Invalid Id"
// }
// -->the function can return any type of value to stop that
function signUp(id, name, email) {
    if (id > 0)
        return true;
    else
        return "Invalid Id";
}
// -->to intialize default values in func
function mul(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
//-->How to implement these things in arrow function
var getHello = function (val) {
    return "Hello " + val;
};
// -->we can also implement these function rules in callbacks also
var heros = ["umesh", "mohan", "raj"];
heros.map(function (hero) {
    return "Hello ".concat(hero);
});
