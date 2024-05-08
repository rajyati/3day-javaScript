
//*---------------------------------------------------
//* Interview Question: Count Occurrence Of Character 
//*---------------------------------------------------



//? write a function called count +- char that takes two parameters : a string and a character to count. the function should return the number of time specified character appears in the string 

const countChar=(word , char) => {

    word = word.toLowerCase();

    char = char.toLowerCase();

totalCount = word.split("").reduce((accum, curChar) => {
    if(curChar==char){
        accum++;
    }
   return accum;
}, 0)
    console.log(totalCount);
   // return totalCount;
};

console.log(countChar("MissIssippi","I")); //output :4



//todo Constraints:
//? The function should be case - sensitive 
//? the function should handle both lowercase and uppercase characters
//? the character parameters can be any printable ASCII character (the function should accept any character that is of the ASCII character set and is printable).


