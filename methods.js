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
let str =" hello pvm world"
console.log(str)
console.log(str.length)
//trim
//ltrim OR rtrim use email copy in login page use
let trimText=str.trim()
console.log("trim",trimText.length)

//uppercase

console.log("toUppercase",str.toUpperCase())
//lowewcase
console.log("tolowercase",str.toLowerCase())
//includes
//particular word find use
console.log("includes",str.includes("pvm"))
//indesof
console.log("index of",str.indexOf("world"))
//slice
console.log("slice",str.slice(2,7))
//substring not allow nagative -
console.log("substring",str.substring(2,7))
//replace
console.log("repalce",str.replace("world","hansa"))
