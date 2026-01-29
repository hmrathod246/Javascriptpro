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


//nested object
const person1={
    name:'hmrathod',
    age:30,
    address:
    {
        city:'keshod',
        pincode:32220,
        street:"123 main st."
    }
}
console.log(person1.address)
console.log(person1?.address?.city)//error handle ? >>safe side no error console exection stop 
console.log(Object.keys(person1))//header format use
console.log(Object.values(person1))
//object entries
console.log(Object.entries(person1))