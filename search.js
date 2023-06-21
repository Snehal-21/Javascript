// //binary search

// var array=[5,12,15,20,25,30,35];
// let low=0;
// let high=array.length-1;
// // console.log(high,"high")
// let target=12;
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

var a=[5,2,3,4,6];

for(var i=0;i<a.length;i++){
    if(a[i]>a[i+1]){
        let temp=a[i];
        a[i]=a[i+1];
        a[i+1]=temp;
    }
}
console.log(a,"sorted array")