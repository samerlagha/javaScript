const reverseArray = array =>{

    if (!Array.isArray(array)) return null;
    return array.reverse();
}

const array=["samer", "lagha", "js"]; 

console.log(reverseArray(array));