// 1.target
// function getTargetIndex(target,...array){
//     for(let i=0;i<array.length;i++){
//         for(let j=array.length-1;j>i;j--){
//             if(array[i]+array[j]==target){
//                 return [i,j]
//             }
//             if(array[i]+array[j]!=target){
//                 return "Target not found.";
//             }
//         }
//     }
// }

// console.log(getTargetIndex(1,2,7,11,15));

// 3.Palindrome

// function palindrome(num) {
//     if (num < 0) {
//         return false;
//     }

//     let original = num;
//     let reversed = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         reversed = reversed * 10 + digit;
//         num = Math.floor(num / 10);
//     }

//     if (original == reversed) {
//         return true;
//     } else {
//         return false;
//     }

// }
// console.log(palindrome(1211));

