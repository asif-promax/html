// // var a = 20;
// // {
// //   var a = 30;
// // }

// // console.log(a);

// // const a =20
// //   a =10


// //  console.log(a);

// // let a=2
// // let b=3

// // a=a+b
// // b=a-b
// // a=a-b
// // console.log(a);
// // console.log(b);


// // let hello = new Date()

// // console.log(hello);
// // let i=10
// // let s=300
// // let m=20
// // if(i>s){
// //     console.log("greater" + i);
// // }else{
// //     console.log("greater "+ s);
// // }
// // if(i>s && i>m){
// //     console.log("greater "+i);
// // }else if(s>i && s>m){
// //     console.log("greater "+s);
// // }else{
// //     console.log("grater "+m);
// // }

// // {
// //     let g=35
// //     if(g%2==0){
// //         console.log(g+" even");
// //     }else{
// //         console.log(g+" odd");
// //     }
// // }

// // {
// //     for(let i=1;i<11;i++){
// //         console.log(i);
// //     }
// // }
// // {
// //     for(let i=65;i<90;i++){
// //         console.log(String.fromCharCode(i));
// //     }
// // }
// // {
// //     const person = {fname:"John", lname:"Doe", age:25}; 
// // for (let x in person) {
// //     let s=person[x]
// //   console.log(s);
// // }
// // }
// {
//     var temp=0
//     var even=0
//     var odd=0
//     for(let i=1;i<100;i++){
//         if(i%2==0){
//             temp=0
//         }else{
//             temp=1
//         }
//         if(temp==0){
//             if()
//             console.log(i+ " even")
//             even=temp+even;
//         }else if(temp==1){
//             console.log(i+" odd")
//             odd=temp+odd;
//         }
//     }
//     console.log("totel even "+even)
//     console.log("totel odd "+odd)
// }


// const a = [1,4,4,5,65,3]

// for (const key of a) {

//     console.log(key);
    
    
// }


// function


// function sum(a,b){
//     return a+b
// }

// let a = sum(1,2)
// console.log(a);

// let a = function (){
//     console.log("A");
    
// }

// let a = (a,b) =>a+b

// console.log(a(1,2));

// (function(){
//     console.log("hello world");
    
// })()

// function sum(a,b,callback){
//     let c = a+b
//     callback(c)

// }



// sum(1,3,function result(c){
//     console.log(c);
    
//  })

//  const radius=[1,2,3];
//  const area=function (radius){
//     return Math.PI * radius * radius;
//  }
//  const diameter = function(radius){
//     return 2 * radius;
//  }
//  const circumeference = function(radius){
//     return 2 * Math.PI * radius;
//  }
//  const calculate = function(radius,logic){
//     const output = [];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.floor(logic(radius[i])))
//     }
//     return output;
//  }

//  let a =calculate(radius,area)
//  console.log(a[2]);
//  let b =calculate(radius, diameter)
//  console.log(b[2]);
//  let c=calculate(radius,circumeference)
//  console.log(c[2]);
 
// cub of a number
// function cub(a){
//     return a*a*a;
//  }
//  let b = cub(3);
//  console.log(b);
 
// const arr=["apple","cars","banana","bus","mango","train"];
// console.log(arr.length);
// console.log(arr.toString());
// console.log(arr[2]);
// console.log(arr.at(2));
// console.log(arr.join("--"));
// arr.push("kiwi")
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("gold");
// console.log(arr);
// arr[1]="milk"
// console.log(arr);
// const arr1=[1,2,3,4]
// let arr3=arr.concat(arr1);
// console.log(arr3);
// const arr1=arr.concat("orange");
// console.log(arr1);
// console.log(arr.copyWithin(3,0));
// console.log(arr.copyWithin(2,0,3));
// const arr2=[[1,2],[3,4],[5,6]];
// console.log(arr2);
// console.log(arr2.flat());
// const arr3=[1,2,3,4,5];
// console.log(arr3.flatMap(x => [x, x * 10]));
// arr.splice(2,0,"beef","chikken")
// console.log(arr);
// arr.splice(2,2,"beef","chikken")
// console.log(arr);
// const spliced=arr.toSpliced(0,2);
// console.log(spliced);
// const arr4=arr.slice(1,4);
// console.log(arr4);
// console.log(arr);
// console.log(arr.sort());
// console.log(arr.reverse());
// const sorted= arr.toSorted();
// console.log(sorted);
// arr.sort();
// const rev= arr.toReversed();
// console.log(rev);
// const num = [3,4,7,5,2,9];
// num.sort(function(a,b){return a-b});
// console.log(num);
// console.log(num[0]);

// num.sort(function(a,b){return b-a});
// console.log(num);
// console.log(Math.max.apply(null,num));



// let a = [1,2,4,4]
// let b= [...a]
// b[2]= 'hello'
// console.log(b);
// console.log(a);


// let a =10
// c=a
// c=20

// console.log(a);
// console.log(c);
// console.log(a==c);

// const  person = {
//     name:"hello",
//     age:12,
//     person1:{
//         name:"welcome",
//         age:33

//     }
// }

// const c = structuredClone(person)
// person.person1.name="welcome1"
// console.log(person);
// console.log(c);
// while(i<10){
//     const person = [];
// }
// const person=[];
// function menu(){
//   var choice= parseInt(prompt(`1 : Add user \n 2: view task \n 3:sort task \n 4:search task \n 5:exit`),10);
//   return choice;
// }
// let choice;
// do{
// choice=menu();
// switch (choice) {
//     case 1:
//         addPerson();
//         console.log(person);
//         break;
//     case 2:
//         viewTask();
//         break;
//     case 3:
//         sortTask();
//         break;
//     case 4:
//         searchTask();
//         break;
//     case 5:
//         Exit;
//         break;
//     default:
//         console.log("default value");
//         break;
// }
// }while(choice!==5);
// function addPerson() {
//     person.push({
//         id:parseInt(prompt("enter id"),10),
//         Name: prompt("Enter your name"),
//         description: prompt("Enter feedback"),
//         duedate: prompt("Enter due date")
//     });
// }
// function viewTask(){
//     person.map((p, index) => {
//         console.log(`Task ${index + 1}: ID: ${p.id}, Name: ${p.Name}, Description: ${p.description}, Due Date: ${p.duedate}`);
//     });
// }
// function sortTask(){
//     person.sort((a, b) => a.id - b.id);
//     person.forEach(p => console.log(`ID: ${p.id}, Name: ${p.Name}, Description: ${p.description}, Due Date: ${p.duedate}`));
// }
// function searchTask(){
//     const searchid=parseInt(prompt("Enter id to search for"),10);
//     const found=person.find(p => p.id === searchid);
//     if(found){
//         console.log(found);
//     }
// }


let products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]
 console.log(products.map(p=>p.pName+" "+p.price)) ;
// console.log(products.filter(p => p.display==="lcd"));
// console.log(products.filter(products=> products.band==="5g")
//                     .map(products=>products.pName));
// const mouny=products.filter(products=>products.price>10000 && products.price<50000)
//                     .map(products=>products.pName);
// console.log(mouny);
// const expensiveProduct = products.reduce((a,b) => {
//     return a.price > b.price ? a : b;
// });
// console.log(`expensive: ${expensiveProduct.pName},${expensiveProduct.price}`);
// const notexpensiveProduct = products.reduce((min, product) => {
//     return product.price < min.price ? product : min;
// });
// console.log(`low cost: ${notexpensiveProduct.pName},${notexpensiveProduct.price}`);


                    

// covid_data = [
//     [1,'Ernakulam',34000,2000,23000,20000,2000],
//     [2,'Idukki',14000,3000,25000,30000,1000],
//     [3,'Thrissur',24000,4000,33000,24000,2500],
//     [4,'Pathanamthitta',20000,2000,45000,22000,1500],
//     [5,'Kozhikode',44000,5000,12000,21000,500],
//     [6,'Palakkad',12000,1000,20000,23000,3400],
//     [7,'Kottayam',27000,1500,27000,14000,1000],
//     [8,'Kollam',14000,2500,25000,18000,2700]
// ]

// const high=covid_data.reduce((a,b) =>{
//     return a[2]>b[2]?a:b;
// })
// console.log(`${high[1]} ${high[2]}`);
// const dose=covid_data.reduce((a,b) => {
//     return a[5]>b[5]?a:b;
// })
// console.log(`${dose[1]} ${dose[5]}`);
// // console.log(covid_data.map(p=>p[5]));
// const low_d=covid_data.reduce((a,b)=>{
//     return a[3]>b[3]?a:b;
// })
// console.log(`${low_d[1]} ${low_d[3]}`);
// const srt=covid_data.sort((a,b)=>{
//     return b[2]-a[2];
// })
// console.log(`${srt}`);

// const a=srt.map(p=>p[2]);



// const h=covid_data.filter(a=>{
//     return a[2]>15000;
// });
// console.log(h);
// const st=covid_data.sort((a,b)=>{
//     return b[5]-a[5];
// })
// console.log(st);


//  const demo =((a,b)=>{console.log(a+b)});
//  demo(10,5)


//  const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName:function() {
//         return `${this.firstName}  ${this.lastName}`;
//     }
//     }
//   console.log(person.fullName());
  

