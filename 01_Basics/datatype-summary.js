// Primitive

// 7 Types :- Number , String , Boolean , Null , Undefined , BigInt , Symbol

const rollNo=33

const name="ani"

const attendence=true

const back=null

let clsses=undefined

let amount=100000000000n  //Bigint
let id=Symbol("123")
let accountID=Symbol("123")  // symbol converts values into unique ids

console.log(id===accountID); // o/p as false

// Reference (Non Primitive)

// Array , Objects , Functions

const heroes=["nana","aappa","Hobo"]

let myOBJ={
    name:"ani",
    age:23
}

const myFunction= function(){
    console.log("hi");
}

console.log(typeof accountID);

console.log(heroes);
