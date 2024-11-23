// console.log("Hello Type Script");
//all the types in the type script are lowercase

// ----------------- Functions --------------------------
// function add(num:number){ //implemented explicitly that parameter should be only of number type 
//     return num+2;
// }

// let sumValue=add(3);

//for multile parameters
// function signUp(id:number,name:string,email:string){
//     if(id>0)
//         return true
//     else
//         return "Invalid Id"
// }

// -->the function can return any type of value to stop that
// function signUp(id:number,name:string,email:string):boolean|string{
//     if(id>0)
//         return true
//     else
//         return "Invalid Id"
// }

// -->to intialize default values in func
// function mul(a:number,b=0):number{
//     return a+b;
// }

//-->How to implement these things in arrow function
// const getHello=(val:string):string=>{
//     return "Hello "+val;
// }

// -->we can also implement these function rules in callbacks also
// const heros=["umesh","mohan","raj"];
// heros.map((hero:string):string=>{
//     return `Hello ${hero}`;
// });

// //-->if function is nor returning any thing then the retun type should be void
// function consoleError(errmsg:string):void{
//     console.log(errmsg);
// }


// ----------------- Objects --------------------------
// function createUser({ name, isPaid }: { name: string; isPaid: boolean }){
   
// }
// let newUser={name:"umesh",isPaid:false,email:"bingi@gmail.com"}
// createUser(newUser);

// ----------------- TypeAlias --------------------------

// type User={
    // name:string,
    // email:string,
    // isActive:boolean
// }


// ----------------- Readonly, ?(optinaol)  --------------------------

// type User={
//     readonly _id:string,
//     name:string,
//     email:string,
//     isActive:boolean,
//     creditCardDetails?:number
// }

// let myUser={
//     _id:"125",
//     name:"umesh",
//     email:"h@h.com",
//     isActive:false
// }

// ----------------- Arrays --------------------------

// const superHero:string[]=[];
// superHero.push("UmeshBingi");

// const rollNo:Array<number>=[];
// rollNo.push(513);

// type user={
//     name:string
//     isActive:boolean
// }

// const allUsers:user[]=[];
// allUsers.push({name:"umesh",isActive:true});

// console.log(allUsers);

// const model:number[][]=[
//     [255,255,255],
//     [0,2,2]
// ]

// ----------------- Union --------------------------
// type user={
//     name:string,
//     id:number
// }
// type Admin={
//     userName:string,
//     id:number
// }

// let bingi:{}|user|Admin={};

// bingi={name:"umesh",id:203265};
// bingi={userName:"sai",id:203265};


// function DB(id:string|number){
//     if(typeof id==="string")
//         console.log(id);
// }

// const data1:number[]=[1,2,3]
// const data2:String[]=["1","2","3"]
// const data:(string|number)[]=[1,2,"3"]; //these is the eay to group the strings and numbers into array
