
// //first
// var array=[34,45,23,5,676,32,34];
// var target=66;
// var start=0;
// var n=array.length
// var end=n-1;


// while(start<end){
//     var sum=array[start]+array[end];
//     if(sum==target){
//         console.log(array[start],array[end])
//         return true;
        
//     }

//     if(sum<target){
//         start=start+1;

//     }
//     else{
//         end=end-1;
//     }
// }
// // return false;
// console.log("false")
// // console.log(sum)



// //second
// var start=5768;
// var end=78656;
// var sum=0;
// for(var i=start;i<=end;i++){
//     if(i%2==0){
//         sum+=i;
//     }
// }
// console.log(sum)


// //third

// var array=[3,5,79,45,0,-67,23,77,19,78,12]
// var target=19;
// var flag=false;
// for(var i=0;i<array.length;i++){
//     if(array[i]==target){
//       flag=true;
//     }
    
// }
// if(flag){
//     console.log("found")
// }
// else{
//     console.log("not found")
// }

//fourth

// var array=[34,45,567,78,89,34,67,87,34,78,89];
// // var empty=[];
// var object={};
// for(var i=0;i<array.length;i++){
   
//     object[i]=array[i];
// }
// console.log(object);


// var array=[1,2,3,4,5,6,7,8,10];
// function missingnum(array){
//     for(var i=0;i<array.length-1;i++){
//         if(array[i]+1!=array[i+1]){
//             return array[i]+1;
//         }
//     }
// }
// console.log(missingnum(array));

// var arr=[1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,20]
// var num=[];
// function miss(arr){
//     for(var i=0;i<arr.length-1;i++){
//         if(arr[i]+1!=arr[i+1]){
//             num.push(arr[i]+1);
//         }
//     }
//     return(num)
// }
// console.log(miss(arr))


// var arr=[1,2,3,4,5,6,7,7,8,9,9,10];
// var value={};
// var multiple_value=[]
// function same(arr){
//     for(var i=0;i<arr.length;i++){
//         if(value[arr[i]]){
//             multiple_value.push(arr[i]);
           
//         }
//         else{
//             value[arr[i]]=arr[i];
//         }
        
//     }
//     return(multiple_value)
// }
// console.log(same(arr))

// var array=[1,2,4,6,50]
// function minmax(array){
//     for(var i=0;i<array.length;i++){
//         var max=array[0];
//         var min=array[0];
//         if(array[i]>max){
//             max=array[i];
//         }
//         else if(array[i]<min){
//             min=array[i]
//         }
//     }
//     return {
//         "max":max,
//         "min":min
//     };
// }
// console.log(minmax(array))


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
// var min=maxarray[0];
// var maxnum=maxarray.length-1;
// var max=maxarray[maxnum];
// console.log(min,max)


// var age=19;
// if(age>=18){
//     console.log("eligible to vote");
// }
// else{
//     console.log("not eligible")
// }


// var number=2;
// if(number==1){
//     console.log("monday");
// }
// else if(number==2){
//     console.log("tuesday");
// }
// else if(number==3){
//     console.log("wednesday");
// }
// else if(number==4){
//     console.log("thursday");
// }
// else if(number==5){
//     console.log("friday");
// }
// else if(number==6){
//     console.log("saturday");
// }
// else{
//     console.log("sunday");
// }


// var name="navnath";
// var male;
// var female;
// var gender;

// if(gender==male){
//     console.log("hwllo me.",name);
// }
// else{
//     console.log("hello ms.",name)
// }

// var char='character';
// if(char>='a' && char<='z' || char>='A' && char<='Z'){
//     console.log("letter")
// }
// else if(char>=0 && char <=9){
//     console.log("digit")
// }


// var num=21;
// if(num%3==0){
//     console.log(num,"is multiple of 3")
// }
// else if(num%5==0){
//     console.log(num,"is multiple of 5")
// }


// var num1=10;
// var num2=13;

// var sum=num1+num2;
// if(sum%2==0){
//     console.log("sum of",num1,"and",num2,"is even")
// }
// else{
//     console.log("sum of",num1,"and",num2,"is odd")
// }


// var celcious=32;
// var fahrenheit=(celcious*9/5)+32;
// console.log(fahrenheit)


// var num1=13;
// var num2=10;
// var num3=25;
// var large;
// var small;
// if(num1>num2 && num1>num3){
//     large=num1;
// }
// else if(num2>num1 && num2>num3){
//     large=num2
// }
// else{
//     large=num3;
// }
// console.log("large",large)

// if(num1<num2 && num1<num3){
//     small=num1;
// }
// else if(num2<num1 && num2<num3){
//     small=num2
// }
// else{
//     small=num3;
// }
// console.log("small",small)

// var num1=50;
// var num2=40;
// var sum=num1+num2;
// if(sum>100){
//     console.log("sum is greater than 100")
// }
// else{
//     console.log("sum is less than 100")
// }


// var char='1'
// if(char>='a' && char<="z"){
//     console.log("lowercase")
// }
// else if(char>='A' && char<="Z"){
//     console.log("uppercase")
// }
// else{
//     console.log("neither")
// }

// var year=1902;
// if((year%4==0 && year%100!=0) || year%400==0){
//     console.log("leap")
// }
// else{
//     console.log("not a leap")
// }

// 1. Two sum

// var array=[2,8,11,15];
// var target=9;

// for(var i=0;i<array.length;i++){
//    for(var j=array.length-1;j>0;j--){
//     if(array[i]+array[j]==target){
//         console.log(target,"found");
//         return;
//     }
   
//    }
   
// }
// console.log("not found")

// 2.remove duplicates from sorted array

// var array=[1,1,2,2,3,4,4];
// var newarray=[];
// var mainarray=[];
// for(var i=0;i<array.length;i++){
//     if(array[i]==array[i+1]){
//        newarray.push(array[i]);
//     }
//     else{
//         mainarray.push(array[i])
//     }
// }
// // console.log(array);
// console.log(mainarray)

// 3.remove Element;
// var array=[1,3,5,12,45,7,8]
// var target=12;
// var newarray=[];
// for(var i=0;i<array.length;i++){
//     if(array[i]!=target){
//         newarray.push(array[i])
//     }
// }
// console.log(newarray)



// 4.search insert position

// var array=[1,3,5,2,6];
// var target=2;
// for(var i=0;i<array.length;i++){
//     if(array[i]==target){
//         console.log("index is :",i)
//     }
// }

// 5.plus one

// var array=[1,2,4];
// var newarray=[];
// var end=array.length-1;
// // console.log(end)
// for(var i=0;i<=end;i++){
//     if(array[i]!==array[end]){
//         newarray.push(array[i])
//     }
//     else{
//         newarray.push(array[i]+1)
//     }
// }
// console.log(newarray)


// 6.merge sorted arrays;

// var a=[1,2,3,];
// var b=[4,5,6]
// var c=[...a, ...b];
// console.log(c)


// var a=[1,2,3,0,0,0];
// var b=[4,5,6];
// var newarray=[];
// var c=[];
// for(var i=0;i<a.length;i++){
//     if(a[i]!=0){
//         newarray.push(a[i]);

//     }
// }
// c=[...newarray, ...b];
// console.log(c)


// 7.single Number;
// var array=[1,2,1,2,3];
// var newarray=[];
// var a;
// for(var i=0;i<array.length;i++){
//  if(array[i]==array[i+1]){
//     newarray.push(array[i]);
//     // newarray.push(array[i+1])
//  }
//  else{
//     a=array[i]
//  }
// }
// console.log(a);

// 8.majority Element;

// var array=[1,2,2,2,4,2];
// var min_array=[];
// // var maj_array=[];
// for(var i=0;i<array.length;i++){
//     if(array[i]==array[i+1]){
//          min_array.push(array[i]);
//          min_array.push(array[i+1]);
//     }
// }

// console.log(min_array);
// if(min_array.length>=array.length/2){
//  console.log("majority elments in the array",min_array[0])
// }
// else{
//     console.log("majority Elements are not exists")
// }


// 9.contains duplicate;

// var array=[1,2,6,5,9];
// var flag=false;
// for(var i=0;i<array.length;i++){
//     for(var j=array.length-1;j>i;j--){
//         if(array[i]==array[j]){
//             flag=true;
//             break;
//             }
//             }
//     }
// if(flag==true){
//     console.log("duplicate")
// }
// else{
//     console.log(" not duplicate")
// }

// 10.plus one--right;

// var array=[1,2,9];
// var str="";
// var sum;
// var final=[];
// var sumarray=[];

// for(var i=0;i<array.length;i++){
//     str+=array[i].toString();
// }
// var num=parseInt(str);


// num=num+1;
// var numstr=num.toString();
// // console.log(typeof(numstr))

// for(var i=0;i<numstr.length;i++){
//    final.push(numstr[i]);
// }

// // console.log(final);
// for(var i=0;i<final.length;i++){
//     sum=parseInt(final[i])
//     // console.log(sum)
//     sumarray.push(sum);
// }
// console.log(sumarray)

// 11.rever a Number;

// var num=12345;
// var reversed=0;
// for( ; num!=0;num=Math.floor(num/10)){
//     reversed=reversed*10 + (num%10)
// }
// console.log(reversed)

// 12.contains duplicate ||

// var array=[1,2,3,1];
// var k=3;
// var flag;
// for(var i=0;i<array.length;i++){
//     for(var j=array.length-1;j>=0;j--){
//         if(array[i]==array[j] && (-j<=k || j-i<=k) ){
//             flag=true;
//         }
//         else{
//             flag=false;
//         }
//     }
// }
// if(flag){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// 13. summary TimeRanges;

// var array=[0,1,2,4,5,7];
//  var str1="";
//  var str2="";
//  var str3="";
//  var a=[];
//  var b=[];
//  var c=[];
//  var newarray=[];
// for(var i=0;i<array.length;i++){
//     if(array[i]>0 && array[i]<=2){
//         str1="0-2";
//        a.push(str1)
//     }
//     else if(array[i]>=4 && array[i]<=5){
//         str2="4-5";
//         b.push(str2);
//     }
//     else if(array[i]>=6 && array[i]<=7){
//         str3+="6-7";
//         c.push(str3);
//     }
// }

// newarray=[...a ,...b, ...c];
// // console.log(newarray);
// var final=[];
// var F=[];
// for(var i=0;i<newarray.length;i++){
//     if(newarray[i]==newarray[i+1]){
//         final.push(newarray[i]);
//     }
//     else{
//         F.push(newarray[i]);
//     }
//     }

// // console.log(final);
// console.log(F);

// 14.pascals traingle;


// var n=4;
// function pascals(n){
//     var a=[];
//     for(var i=0;i<n;i++){
//         a[i]=[];
//         for(var j=0;j<=i;j++){
//             if(j==0 || j==i){
//                 a[i][j]=1;
//             }
//             else{
//                 a[i][j]=a[i-1][j-1] + a[i-1][j];
//             }
//         }
//     }
//     return a;
//     // console.log(a)
// }

// var ans=pascals(n);
// console.log(ans)

// 15.pascals traingle 2;

// var n=4;
// function pascalstraingle(n){
//     var a=[]
//     for(var i=0;i<n;i++){
//         a[i]=[];
//         for(var j=0;j<=i;j++){
//             if(j==0 || j==i){
//                 a[i][j]=1;
//             }
//             else{
//                 a[i][j]=a[i-1][j-1] + a[i-1][j]
//             }
//         }
//     }
//     return a[i-1]
// }

// var final=pascalstraingle(n);
// console.log(final)


// 16.best time to buy ans sell stock;

// var array=[7,6,4,3,1];
// var minprofit=array[0]
// var maxprofit=0;
// for(var i=1;i<array.length;i++){
//     if(array[i]<minprofit){
//         minprofit=array[i]
//         // console.log(i)
//     }
//     else{
//         var cureentprofit=array[i]-minprofit;
//         if(cureentprofit>maxprofit){
//             maxprofit=cureentprofit;
//         }
//     }
        
//     }

// console.log(maxprofit);

// 17.missing Number;

var nums=[3,0,1];
var length=nums.length;
// console.log(length);
for(var i=0;i<length;i++){
    if(i==){
        console.log(nums[i])
    }
}


























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































