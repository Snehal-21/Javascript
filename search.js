// //binary search

// var array=[5,12,15,20,25,30,35];
// let low=0;
// let high=array.length-1;
// // console.log(high,"high")
// let target=30;
// let mid;

// while(low<=high){
//     mid=(low+high)/2;
//     console.log(mid,"mid")
//     if(target==array[mid]){
//         console.log(array[mid])
//         return;
//     }else if(target>array[mid]){
//         low=mid+1;
//     }else{
//         high=mid-1;
//     }
// }
// console.log(array[mid])


//bubble sort

var a = [10, 12, 3, 4, 6];

// for(var i=0;i<a.length;i++){
//     if(a[i]>a[i+1]){
//         let temp=a[i];
//         a[i]=a[i+1];
//         a[i+1]=temp;
//     }
// }
// console.log(a,"sorted array");



//bubble sort

// function sortingTest(array) {
//     let test = array;
//     for (i = 0; i < test.length; i++) {
//         for (let j = 0; j < (test.length - i - 1); j++) {
//             if (test[j] > test[j + 1]) {
//                 let temp = test[j];
//                 test[j] = test[j + 1];
//                 test[j + 1] = temp;
//             }
//         }
//     }
//     return test;
// }


// var answer = sortingTest(a);
// console.log(answer);


// insertion sort
// let arr = [12,11,13,5,6];
// let n = arr.length;
// function insertionSort(arr, n){
//     let i, key, j;

//     for(i=1;i<n;i++){
//         key = arr[i];
//         j = i-1;

//         while(j >= 0 && arr[j] > key){
//             arr[j+1] = arr[j];
//             j = j-1;
//         }
//         arr[j+1] = key;
//     }

//     return arr;
// }

// let answer = insertionSort(arr, n);
// console.log(answer);







//selection sort
// var array=[10,5,4,20,15,8,13,9,11];


//     function sort(array){
//         if(array.length<=1){
//             return array;
//         }

//         var num=array[0];
//         var left=[];
//         var right=[];
//         for(var i=1;i<array.length;i++){
//             if(array[i]<num){
//                 left.push(array[i]);
//             }
//             else{
//                 right.push(array[i]);
//             }
//         }
//         return [...sort(left),num, ...sort(right)]
// }
// var maxarray=sort(array);
// console.log(maxarray);

