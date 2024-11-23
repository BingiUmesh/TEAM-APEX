
// ----------------- BASICS--------------------------
// let sales=123_456_789; //let sales:number=123_456_789;
// let str="umesh"; //let str:string="umesh";
// let bool=true; //let bool:boolean=true;


// ----------------- ANY--------------------------
// let a; //type is of any try to reduce using these.
// a=20;
// console.log(a);
// a="umesh";
// console.log(a);

// function render(value:any)//here if you need to make the parameter of any type explicitly do these
// {
//     console.log(value);
// }


// ----------------- ARRAY--------------------------
let nums=[1,2,3];//number:number[]=[1,2,3];
let temp=[];//type is any so explicitly we need to change the type
//any array can contain mix of different types
// temp:number[]=[];


// ----------------- ENUM --------------------------
const enum size{small=1,medium,large};
let lrSize:size=size.large;
// console.log(lrSize);

// ----------------- FUNCTIONS --------------------------
function hello(value:string):void{
    console.log("Hello ",value);
}//function with parameters and return type


function sum(a:number,b=10):number{
    return a+b;
}
//default value to b
// --> for optional we use ? i.e, b?:number


// ----------------- OBJECTS --------------------------
let employee:{
    id:number,
    firstName:string,
    lastName?:string
}={id:1,firstName:"umesh"};
employee.lastName="bingi";
console.log(employee);
