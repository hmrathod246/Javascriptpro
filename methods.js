//validation calculate use
//string methods
//length()
//trim()
//touppercase
//tolowercase
//includes
//indexof()
//slice()
//substring()
//replace()
//concat()
//split()

//length
// let str =" hello pvm world"
// console.log(str)
// console.log(str.length)
//trim
//ltrim OR rtrim use email copy in login page use
// let trimText=str.trim()
// console.log("trim",trimText.length)

//uppercase

// console.log("toUppercase",str.toUpperCase())
//lowewcase
// console.log("tolowercase",str.toLowerCase())
//includes
//particular word find use
// console.log("includes",str.includes("pvm"))
//indesof
// console.log("index of",str.indexOf("world"))
//slice
// console.log("slice",str.slice(2,7))
//substring not allow nagative -
// console.log("substring",str.substring(2,7))
//replace
// console.log("repalce",str.replace("world","hansa"))
//concat
// let extratext="- HELLO JS";
// console.log("concat",str.concat(extratext))
//split
//make string array
// console.log("split",str.split(" "));
//array methods
//push
//pop
// unshift
// shift
// concat
// includes
// indexof
// Splice
// join
// delete
// Map
// filter
// find
//foreach
//sort
//reverse
//flat

// let arr=["one","two","three","four"]
// console.log("default array",arr)
// console.log("length",arr.length)
//push work end of aaray
//console.log("push",arr.push("new add element"))
// arr.push("new add elemet")
// console.log("array after push",arr)
//pop
// arr.pop();
// console.log("array ater pop",arr)
//unshift begining of array use
// arr.unshift("first element")
// console.log("array after unshift",arr)
//shift
// arr.shift()
// console.log("array aftre use shift",arr)
//concat
// let newArr=["str1","str2"];
// let mixedArr=arr.concat(newArr)
// console.log("defalut array after concat",arr)
// console.log("array after concat",mixedArr)
//includes
// console.log("includes",arr.includes("three"))
//indexof edit delete use 
// console.log("indexof",arr.indexOf("three"))
//slice
// console.log("slice",arr.slice(2,5))
//splice
// console.log("splice",arr.splice(2,5))
// console.log("old array",arr)
//join category string to read data into file then use 
// console.log("join",arr.join(", "))
//delete
// delete arr[5]
// console.log(arr)

// console.log("array iteration method")
// let numbers =[1,2,3,4,5]
//map
// console.log("map",numbers.map(num=>num*2))//syntax num as i >> for
// console.log("after map ld array",numbers)
//filter
// console.log("filter",numbers.filter(num=>num>2))//for and if combination then use
// console.log("after filter ld array",numbers)
//foreach
// console.log("foreac")
// numbers.forEach(num=>console.log(num))//phonebook add delete contact inshort each element iteartion
//sort assending or desending order use
// let num=[3,7,9,6,2]
// console.log("sort",num.sort())
//reverse
// console.log("reverse",num.reverse())
let nestedArray=[1,2,[3,4],[5,6]]
console.log("default nested array",nestedArray)
let flatArray=nestedArray.flat()
console.log("flat array",flatArray)