const withoutDuplicates1 = (elements = undefined) => elements.filter((item,index)=>elements.indexOf(item) === index);

let arrayEjemplo = ["amigo","amigo",1,1,"amogus","amogus"];

console.log(withoutDuplicates1(arrayEjemplo));