import './App.css';
import Home from './05.03.22 Admin projekt/root'
// import Main from './jsonServer/index';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PostDetails from './jsonServer/components/postDetails';
// import NotFaund from './jsonServer/components/notFaund';
// import AddNewPost from './jsonServer/components/addNewPost';
// class Element {
//   constructor(element) {
//     this.element = element;
//     this.next = null;
//   }
// }



function App() {
  return (
    <Home />
  )
}

export default App;

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element ={<Main />} />
    //     <Route path="/addNewPost" element ={<AddNewPost />} />
    //     <Route path="/post/:id" element ={<PostDetails />} />
    //     <Route path="*" element={<NotFaund />} />
    //     {/* <Route path="*" element={<Main />} /> */}
    //   </Routes>
    // </BrowserRouter>


// class LinkdedList {
//   constructor() {
//     this.size = 0;
//     this.head = null;
//   }
//   add(number) {
//     let lastElement = this.head;

//     if (this.size === 0) {
//       this.head = new Element(number);
//     } else {
//       while (lastElement.next) {
//         lastElement = lastElement.next;
//       }
//       lastElement.next = new Element(number);
//     }
//     this.size += 1;
//   }
//   has(number){
//     // if(number)
//   }//
//   removeLast() {
//     if (this.size) {
//       let lastElement = this.head;
//       let prevElem = null;
//       while (lastElement) {
//         if (lastElement.next !== null && lastElement.next.next === null) {
//           prevElem = lastElement;
//         }
//         lastElement = lastElement.next;
//       }
//       if (prevElem) {
//         prevElem.next = null;
//       } else {
//         this.head = null;
//       }
//       this.size -= 1;
//     }
//   }
//   searchElement(number) {
//     let lastElement = this.head;
//     while (lastElement.next) {
//       if (lastElement.element === number) {
//         break;
//       }
//       lastElement = lastElement.next;
//     }
//     if (lastElement.next === null && lastElement.element !== number) {
//       return false;
//     }
//     return lastElement;
//   }
//   removeByElement(number) {
//     if (this.size === 0) {
//       return false;
//     }
//     let lastElement = this.head;
//     const elem = this.searchElement(number);
//     let prevElem = null;
//     let nextElem = elem.next;
//     if (elem) {
//       while (lastElement.next) {
//         if (elem === this.head) {
//           this.head = elem.next;
//           this.size -= 1;
//           break;
//         }
//         if(elem === lastElement.next){
//           prevElem = lastElement;
//           prevElem.next = nextElem
//           this.size -= 1;
//           break;
//         }  
//         lastElement = lastElement.next;
//       }
//     }
//   }
//   toArray(){
//     let lastElement = this.head;
//     let arrList = [];
//     while(lastElement.next){
//       arrList.push(lastElement.element)
//       lastElement = lastElement.next;
//     }   
//     arrList.push(lastElement.element)
//     return arrList
//    }
// }


// const linkedList = new LinkdedList();
// linkedList.add(5);
// linkedList.add(7);
// linkedList.add(8);
// linkedList.add(12);
// linkedList.add(23);
// console.log(linkedList.searchElement(5));
// console.log(linkedList);
// linkedList.removeByElement(8);
// console.log(linkedList);
// console.log(linkedList.toArray());



// class Stack{
//   constructor(){
//     this.stack = [];
//   }
//   push(elem){
//     this.stack.push(elem)
//   }
//   pop(){
//     return this.stack.pop()
//   }
// }
// const stack1 = new Stack()
// stack1.push(()=>{
//   console.log("first function")
// })
// stack1.push(1)
// console.log(stack1.stack)

// const num = stack1.pop()
// const func = stack1.pop()
// func()
// console.log(num)



// import { Provider } from 'react-redux';
// import { store } from './store';
// import Counter from './components';
// import Main from './25.01.22'



   // <Provider store={store}>
    //   <div className="App">
    //     <Counter />
    //   </div>
    // </Provider>






// const arr = [1,2,3,4,5];
// const func = (arr,num) =>{
//   for(let i = 0; i < arr.length; i++){
//     console.log(i)
//     if(arr[i] === num){
//       return arr[i]
//     }
//   }
// }
// console.log(func(arr,3))

// for(let i = 0 ; i < 100; i++){
//   arr.push(Math.round(Math.random()*1000))
// }
// const arr = [
//   799, 568, 909, 273, 179, 706, 712, 273, 975, 228, 168, 195, 397, 820, 562, 307, 278, 989, 165, 112, 990, 764, 25, 787, 657, 338, 647, 728, 76, 278, 490, 469, 497, 321, 138, 320, 840, 143, 503, 296, 796, 15, 344, 262, 689, 567, 315, 968, 261, 288, 168, 156, 961, 400, 928, 814, 622, 769, 136, 340, 62, 548, 358, 866, 787, 332, 472, 280, 709, 896, 382, 495, 810, 484, 100, 245, 965, 421, 196, 227, 870, 967, 399, 82, 539, 305, 950, 170, 375, 800, 836, 14, 567, 636, 670, 854, 102, 751, 605, 380
// ];

// const bublleSort = (arr) =>{
//   for(let n = 0; n < arr.length; n++){
//     for(let i = 0; i < arr.length - 1 -n; i++){
//       if(arr[i] > arr[i+1]){
//         let foo = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = foo;
//       } 
//     }
//   }   
//   return arr;

// } 
// console.log(bublleSort(arr))



// let arr = [1,2,3,4,5,68,7];
// let obj = {}
// obj[Symbol.iterator] = function* (){
//   yield 1;
//   yield 2;
//   yield 1;
// }
// obj.name = "Gor"
// console.log([...obj])

// for (let k of obj){
//   console.log(k)
// }
// console.log(obj)

// let num = Symbol(4) ;
// console.log(num)
// console.log(typeof num)

// class Foo{
//   constructor(name){
//     this._name = name;
//   }
//   static sayHallo(){
//     console.log(this.name)
//   }
//   get name(){
//     return `name: ${this._name}`
//   }
//   set name(value){
//     if(value){
//       return this._name = value;
//     }return false
//   }
// }

// const boo = new Foo("Gor");

// console.log(boo)
// console.log(boo.name)
// console.log(boo.name = "")
// console.log(boo.name)
// boo.age = 15;
// console.log(boo)
// console.log(Foo.sayHallo())

// Math.random() 
// static    