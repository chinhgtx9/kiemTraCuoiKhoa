// Prints help message to the console
// Returns a string
let input =  ['BINH', 'HUNG', 'PHUOC', 'CAO','KHANH','BINH', 'HUNG', 'PHUOC', 'CAO','KHANH'];
function allLongestStrings(inputArray) {
    let maxLength = [];
    let array = [];
    for(let i = 0; i < inputArray.length; i++) {
        array.push(inputArray[i].length);
    }
    // console.log(array);
    // console.log(Math.max.apply( Math, array ));
    for(value of inputArray) {
       if(value.length == Math.max.apply( Math, array)){
           maxLength.push(value);
       }
    }
    return maxLength;
}
console.log(allLongestStrings(input));