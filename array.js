// var array=[1,2,3,4,5,6,7,8,9,0]; //defines array
// console.log(array);
// console.log("lenght of array is :  "+array.length); //shows length of array
// array.push("snehal","navale"); //add element at last
// console.log(array);
// array.pop();  //remove element from last
// console.log(array);
// array.shift(); //remove element from start
// console.log(array);
// array.unshift("start","aaaa","bbb"); //add element at start
// console.log(array);


var studentlist = ["snehal", "anu", "mayuri", "madhuri", "punam", "swaraj"];
// console.log(studentlist);
// console.log(studentlist.length)
// for(var a=0; a<studentlist.length;a++){
//     console.log(studentlist[a],a)
// }

// for(var a=0;a<studentlist.length;a++){
//     if(studentlist[a]=="punam"){
//         console.log("student is in our data");
//     }
// }

// var flagforstudent=false;
// for(var a=0;a<studentlist.length;a++){
//     if(studentlist[a]=="krishnan"){
//         flagforstudent==true;
//         console.log("krishnan is in our data");
//     }
// }
// if(flagforstudent==false){
//     console.log("krishanan is not in our data");
// }

// for(var a=0;a<studentlist.length;a++){
//     if(studentlist[a]=="anu" || studentlist[a]=="snehal"){
//         console.log("swaraj or snehal is in our data")
//     }
// }

// var fruits=["mango","banana","grapes","watermelon","pine apple","orange"]
// if(fruits.includes("add")){ //check if specific elemnt is present in an array or not
//     console.log("present")
// }
// else{
//     console.log("absent")
// }

// fruits.splice(4); //remove an element from a specific index
// console.log(fruits)

// var copyarr=fruits.slice();  //to copy an array
// console.log(copyarr)

// fruits.sort(); //sorts an array
// console.log(fruits)

// console.log(fruits)
// fruits.push="wood apple";
// console.log(fruits);
// console.log(fruits.length);
// var flag=false;
// for(i=0;i<fruits.length;i++){
//     if(fruits[i]=="orange"){
//         flag=true;
//     }
// }
// if(flag==false){
//     console.log("orange is not in our Array");
// }
// else{
//     console.log("orange is in our Array");
// }

// function findmax(arr){
// // console.log(arr)
// console.log("length of array is: "+arr.length)
// var max=arr[0];
// // if(arr[1]>max){
// //     max=arr[1];
// // }
// for(a=1;a<arr.length;a++){
//     if(arr[a]>max){
//             max=arr[a];
//         }
// }
// return max;
// }
// var arr=[6544,32323,54,6,87];
// console.log("greter number is: "+findmax(arr))


// function findmin(arr){
//     // console.log(arr)
//     // console.log(arr.length)
//     var min=arr[0];
//     // if(arr[1]>max){
//     //     max=arr[1];
//     // }
//     for(a=1;a<arr.length;a++){
//         if(arr[a]<min){
//                 min=arr[a];
//             }
//     }
//     return min;
//     }
//     var arr=[6544,32323,54,6,87];
//     console.log("smallest number is: "+findmin(arr))

// function popup(){
//     console.log("successful")
// alert("clicked succesfully");

// }


// var array=[34,45,65,23,10,676,34,39,66];
// var target=66;
// var flag;
// for(var i=0;i<array.length;i++){
//     if(array[i]==target){
//         flag=true;
//     }
//     else{
//         flag=false;
//     }
// }
// if(flag){
//     console.log("found")
// }
// else{
//     console.log("not found")
// }


// var start=5799;
// var end=78659;
// var sum=0;
// for(var i=start;i<end;i=i+3){
//     sum=sum+i;
// }
// console.log(sum)

// var number=19;
// var index;
// var array=[3,5,79,45,0,-67,23,77,19,78,12];
// for(var i=0;i<array.length;i++){
//     if(array[i]==number){
//         index=i;
//     }
// }
// console.log(index);
// for(var i=0;i<=10;i++){
//     console.log(index*i)
// }


// var array=[35,45,567,78,89,34,67,87,34,78,89];
// var object={};
// for(var i=0;i<array.length;i++){
//     object[i]=array[i]
//     }
//     console.log(object)


// var name="a";
// var a=2;
// var b=3;
// var c=0;
// function add(name,a,b){
//     c=a+b;
//     console.log(name,"=",c);
// }
// add(name,a,b);


// function add(name,arr){
//     var name="a";
//     var arr=[2,4,6,9,11,13];
//     var sum=0;
//     for(var i=0;i<arr.length;i=i+2){
//         sum=sum+arr[i];
//     }
//     console.log(`name=${sum}`);
//     console.log(typeof(`name=${sum}`));
// }
// add(name,arr);

// function x(...a){
//     // var sum=0;
//     for(var i=0;i<a.length;i++){
//         if(a[i]%2==0){
//             console.log(a[i]);
//         }
//     }
//     console.log(a);
// }
// x(1,2,3,4,5,6,7,8,9,3,45);

// function miss(...a){
//     for(var i=0;i<a.length;i++){
//         if(a[i]==a[i+1]){
//             return 0;
//         }
//         else{

//         }
//     }
// }
// miss(1,2,4,6);

// function odd(...x){
//     for(var i=0;i<x.length;i++){
//         if(x[i]%2!==0 && x[i]%5==0){
//             console.log(x[i]);
//         }
//     }
// }
// odd(1,2,3,4,5,6,7,8,9,10,15,20,25);

// function prime(number){
//     if(number <=1){
//         console.log("0 and 1 are not prime numbers!")
//     }
//     for(var i=2;i<=number;i++){
//         if(number%i==0){
//             console.log(number,"is not a prime number!");
//             return;
//         }
//         else{
//             console.log(number,"is a prime number!")
//             return;
//         }
//     }
   
// }
// prime(61);


// function prime(number){
//     if(number<=1){
//         console.log("0 and 1 are not prime numbers!")
//     }
//     for(var i=2;i<=number;i++){
//         if(number%i==0){
//             console.log(number,"is not a prime number!");
//             return
//         }else{
//             console.log(number,"is a prime number");
//             return
//         }
//     }
// }
// prime(61);

// var array=[];
// var row=5;
// var col=3;
// var h=0;
// for(var i=0;i<row;i++){
//     array[i]=[];
//     for(var j=0;j<col;j++){
//         array[i][j]=h++;
//     }
// }
// console.log(array);

// var array=[[1,2,3],[4,5,6],[7,8,9]];
// for (var i=0;i<array.length;i++){
//     for (var j=0;j<array[i].length;j++){
//         console.log(array[2][1]);
//         return;
//     }
// }

// var a=4;
// var b=5;
// var array=new Array(a);
// h=0;
// for(var i=0;i<a;i++){
//     array[i]=new Array(b);
// }
// console.log(array);

let n=5;
let songs=[1,1,2,2,4];
let singerCount={};

for(var i=0;i<songs.length;i++){
    const singer=songs[i];
    if(singerCount[singer]){
        singerCount[singer]++;
    }else{
        singerCount[singer]=1;
    }

}
let maxfrequency=0;
for(let singer in singerCount){
    if(singerCount[singer]>maxfrequency){
        maxfrequency=singerCount[singer];
    }
}
console.log(maxfrequency)