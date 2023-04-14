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

for(var a=0;a<studentlist.length;a++){
    if(studentlist[a]=="anu" || studentlist[a]=="snehal"){
        console.log("swaraj or snehal is in our data")
    }
}