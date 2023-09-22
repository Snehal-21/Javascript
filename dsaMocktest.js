//*Write a function in JavaScript called calculateSum that takes an array of numbers
//* as an argument and returns the sum of all the numbers in the array.
//* For example, if the input array is [1, 2, 3, 4, 5], the function should return 15.

// let array=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<array.length;i++){
//     sum+=array[i];
// }

// console.log(sum);


//*Write a JavaScript function called calculateFactorial that calculates the factorial of a number

// function fact(num) {
//     var sum = 1;
//     for (a = 1; a <= num; a++) {
//         sum = sum * a;
//     }
//     return sum;
// }
// var ans = fact(4);
// console.log("factorial is: " + ans);


//*Write a JavaScript function called isPrime that takes a positive integer as an argument and returns
//* true if it's a prime number, and false otherwise.

// function prime(n) {
//     if (n == 1) {
//         console.log('1is neither a prime nor a composite integer');
//     }
//     if(n==2){
//         console.log('2 is a prime number');
//     }
//     for(let i=3;i<n;i++){
//         if(n%i==0){
//             console.log(n,'not a prime number.');
//             return;
//         }else{
//             console.log(n,'prime number');
//             return;
//         }
//     }
// }
// prime(1);

//*Write a function in JavaScript called isPalindrome that takes a string as an argument and 
//*returns true if the string is a palindrome (reads the same forwards and backwards),
//* and false otherwise.

// function palindrome(str){
//     var newstr=str.toLowerCase();

//     var start=0;
//     var end=newstr.length-1;

//     while(start<=end){
//         if(newstr[start]!==newstr[end]){
//             console.log("not palindrome.");
//             return;
//         }
//         start++;
//         end--;
//     }
//     console.log(' palindrome');
//     return;
// }

// palindrome("madamdv");


//*Write a function in JavaScript called reverseArray that takes an array as an argument and returns
//* a new array with the elements in reverse order.
// let array=[1,2,3,4,5];
// let reverseArray=[];
// function reverse(array){
//     for(var i=array.length-1;i>=0;i--){
//         reverseArray.push(array[i]);
//     }

//     console.log(reverseArray);
//     return;
// }
// reverse(array);


//*Write a JavaScript function called sortNumbers that takes an array of numbers as an argument and returns a new array with the numbers 
//*sorted in ascending order.
// let array=[3,5,2,7,6];
// let sort=[];
// let start=array[0];
// // console.log(start);

// function sortNumbers(array){
//     for(let i=0;i<array.length;i++){
//         if(array[i]>array[i+1]){
//             let temp=array[i];
//             array[i]=array[i+1];
//             array[i+1]=temp;
//         }
//     }

//     console.log(array);

// }
// sortNumbers(array);


var array = [2, 5, 3, 4, 6];

function sort(array) {
    var pivot = array[0];
    var left = [];
    var right = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return [...sort(left), pivot, ...sort(right)];
}
var ans = sort(array);
console.log(ans);


//*For example, given the array [2, 4, 1, 3, 6, 7, 8], the missing number is 5, so the function should return 5.

// let array=[2,4,1,3,6,7,8];
// // let num=array[0];
// for(let i=0;i<array.length;i++){
//     if(array[i]>=array[i+1]){
//        let temp=array[i];
//         array[i]=array[i+1];
//         array[i+1]=temp;
//     }
// }
// // console.log(array);

// for(let j=3;j<array.length;j++){
//     if(array[j]!=array[j]+1){
//         console.log(array[j]+1);
//         return;
//     }
// }
