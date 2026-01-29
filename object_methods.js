//collection of any type of data
// const person={
//     name:'testing',
//     age:24,
//     hobbies:['cricket','dance'],
//     greet:function()
//     {
//         console.log("hello")
//     }
// }
//access value from object
// console.log(person.name)
// console.log(person['name'])
//adding and modifying the data of obj
// person.job="software devloper"
// person.salary=60000
// delete person.salary
// console.log(person)


// //nested object
// const person1={
//     name:'hmrathod',
//     age:30,
//     address:
//     {
//         city:'keshod',
//         pincode:32220,
//         street:"123 main st."
//     }
// }
// console.log(person1.address)
// console.log(person1?.address?.city)//error handle ? >>safe side no error console exection stop 
// console.log(Object.keys(person1))//header format use
// console.log(Object.values(person1))
// //object entries
// console.log(Object.entries(person1))
// const user = {
//     name: "user",
//     role: "admin",
//     designation: "devloper",
//     age: 24,
//     address:
//     {
//         city: "junagadh",
//         zipcode: '362001',
//         street: "123 main st"
//     }

// }
// const{name,age,role}=user
// console.log(name,age,role)
//reanem object property
// const{name:profileName,age:profileage}=user
// console.log(profileName,profileage)
// const { name, age, role, state = "gujrat" } = user
// console.log(name, age, role, state)

//spread
// const array=[1,2,3]
// const moreElements=[...array,4,5,6]
// console.log(moreElements)
//copy
// const origianalArray=[1,2,3]
// const copiedArray = [...origianalArray]
// console.log(copiedArray)
//merge
// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const mergedArray=[...arr1,...arr2]
// console.log(mergedArray)

//spread opt in obj as it is perfoorn and allow to new add
// const user1={
//     name:"user1",
//     city:"junagadh"
// }
// console.log(user1)
// const newObj={
//     ...user1,
//     role:"react devloper",

// }
// console.log(newObj)

//copy obj
const user2={
    name:"hansa",
    city:"ksd"
}
const user3={
    age:"14",
    pincode:"362245",
    city:"maliya"
}
const user4={...user2,...user3}
console.log(user4)