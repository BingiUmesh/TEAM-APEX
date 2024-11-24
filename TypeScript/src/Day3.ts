// ----------------- Enum --------------------------
// enum seat{
//     AISLE='umesh',
//     MIDDLE=513,
//     WINDOW,
//     FOURTH=1000
// }
// const hcSeat=seat.WINDOW;

// ----------------- Interface --------------------------
// interface user{
//     readonly bdId:number,
//     email:string,
//     userId:number,
//     googleId ?:string,
//     strartTrail(val:string):string
// }
// interface user{
//     instaId:string
// }
// const umesh:user={
//     bdId:203265,
//     email:"gearpoint@gmail.com",
//     userId:2,
//     instaId:"bingi13",
//     strartTrail(val){
//         return val;
//     }
// }

//we can also perform inheritance in the interface
// interface person{
//     name:string,
//     id:number,
// }

// interface student extends person{
//     branch:string,
// }
// interface professor extends person{
//     subject:string
// }

// let stu:student={
//     name:"umesh",
//     id:513,
//     branch:"cse"
// }

//These is the way to implementtype script in production level

// ----------------- Classes --------------------------
// class User{
//     email:string
//     name:string
//     private city:string="delhi"
//     constructor(email:string,name:string)
//     {
//         this.email=email;
//         this.name=name
//     }
// }
// const user1=new User("umesh@gmail.com","umesh");
// user1.city="khammam";
//type modifiers in the classes
// 1.public (by default)
// 2.private(need to specify using the keyword private)
// 3.protected //it is accessible in own class and child class also

// -->professionals write the code in below format
// class User{
    
//     readonly city:string="delhi"
//     constructor(public email:string,public name:string){}
    // get getValues():{}{return {email:this.email,name:this.name}}
    // set setValues(city:string){this.city=city} //we don't define return type of setters


// }
// const user1=new User("umesh@gmail.com","umesh");
// console.log(user1.getValues);

// mostly we use getters and setters for private variable in the class

// ----------------- More about interface --------------------------
// These provides guildelines not the infromation
// interface TakePhoto{
//     cameraMode:string,
//     filter:string,
//     burst:number
// }

// interface stroy{
//     createStory():void;
// }

// class Instagram implements TakePhoto{
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//         public burst:number,
//     ){}
    
// }
// class Yotube implements TakePhoto,stroy{
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//         public burst:number,
//     ){}
//     createStory(): void {
//         console.log("video created sucessfullt");
//     }

// }

// ----------------- Abstact Class --------------------------
// interface and abstract class almost very similar
// abstract class TakePhoto{
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//     ){}
//     abstract getSepia():void
//     get ReelTime():number{
//         return 8;
//     }
// }

// class Instagram extends TakePhoto{
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//     ){
//         super(cameraMode,filter)
//     }
//     getSepia(): void {
//         console.log("implemented")
//     }
// }

// let user=new Instagram("potrait","normal");
// console.log(user.ReelTime);