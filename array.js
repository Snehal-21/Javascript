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


var studentlist=["snehal","anu","mayuri","madhuri","punam","swaraj"];
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


function findmin(arr){
    // console.log(arr)
    // console.log(arr.length)
    var min=arr[0];
    // if(arr[1]>max){
    //     max=arr[1];
    // }
    for(a=1;a<arr.length;a++){
        if(arr[a]<min){
                min=arr[a];
            }
    }
    return min;
    }
    var arr=[6544,32323,54,6,87];
    console.log("smallest number is: "+findmin(arr))

// function popup(){
//     console.log("successful")
// alert("clicked succesfully");

// }