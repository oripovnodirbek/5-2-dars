//  IIFE ga misollar. IIFE bu loyiha ishalshi bilan ishga tushadigan funksiya.
//  1
// (function(name) {
//    console.log(`hello` + " " + name)
// })("Nodirbek")

// 2
// (function() {
//     let a = "birinchi"
//     console.log(a + ` bolishga harakat qil`)
// })()



//  pure function.  Bu sof funksiya bolib tashqaridan malumot kirmasligi kerak
 //               va har doim bir xil malumot kiritsa bir xil javob qaytarish kerak. 
// 1
// function filterNum(num) {
//     return num.filter(number => number % 2 === 0);
//   }
//   const num = [1, 2, 3, 4, 5, 6, 7];
//   console.log(filterNum(num)); 
  
// 2
// function sumArray(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }
// const array = [1, 2, 3, 4, 5];
// console.log(sumArray(array));

// 3
// function daraja(num) {
//      return num ** 3
// }
// console.log(daraja(4))



//  callback function
// 1
// setTimeout(function() {
//   console.log("salom dunyo")
// }, 5000)

// 2 
// setTimeout(function() {
//     let a = 5
//     a = a ** 3
//     console.log(a)
// }, 5000)

// 3
// let i = 1 
// let interval = setInterval(function() {
//     console.log(i)
//     if(i == 10) {
//         clearInterval(interval);
//     }
//     i++
// }, 1000)

//            MASSIVE METODLARIGA OID MASALALAR.

//  1
// function masala1(sum1) {
//     let a = sum1.slice(1, 4)
//     return a
// }
// console.log(masala1([1, 2, 3, 4, 5, 6]))

// 2 
// function masala2(arr, count, index) {
//     function random() {
//         return Math.floor(Math.random() * 90) + 10;
//     }
//     let newArr = arr.slice();
//     for (let i = 0; i < count; i++) {
//         newArr.splice(index + i, 0, random());
//     }

//     return newArr;
// }
// const array = [1, 2, 3, 4, 5], count = 3, index = 5
// console.log(masala2(array, count, index));

//  3 
// function masala3(a, b, c,) {
//     return a.concat(c, b)
// }
// const aa = [2, 4]
// const cc = [1, 8]
// const bb = [9, 5]
// console.log(masala3(aa, bb, cc))

//  5
// function masala5(arr) {
//     return arr.lastIndexOf(3)
// }
// console.log(masala5([1, 2, 3, 4, 3, 5, 3]))

//  6
// function masala6(arr) {
//     let value = 4 
//      if(mas1.indexOf(value) !== -1 && mas2.indexOf(value) !== -1) {
//         console.log(true)
//      } else {
//         console.log(false)
//      }
    
// }
// const mas1 = [3, 4, 2, 1]
// const mas2 = [5, 4, 8, 7]
// console.log(masala6(mas1.concat(mas2)))

//  7 
// function masala7(sum) {
//     const value = 4
//      result = sum.includes(value);
// }
// const arr = [1, 2, 3, 4, 5]
// console.log(masala7(arr))


// 8 
// function masala8(arr) {
//     let sum = 0;
//     let count = 0;
    
//     arr.forEach(num => {
//         if (num >= 100 && num < 1000 && num % 2 !== 0) {
//             sum += num;
//             count++;
//         } else {
//             console.log(`bunday son yoq`)
//         }
//     });
// }
// const array = [150, 375, 200, 501, 842, 199, 450, 725];
// const result = masala8(array);
// console.log(result);

//  9 
// function masala9(arr) {
//     return arr.map(function(value) {
//         if (value % 2 == 0) {
//            return  value ** 2
//         } else {
//           return  value ** 3 
//         }
//     });
// }
// const array = [1, 2, 3, 4]
// console.log(masala9(array))

//  10 
// function masala10(arr) {
//     return arr.map(sum => sum[sum.length -1])
// }
// const world = ['olma', 'behi', 'nok']
// console.log(masala10(world))

//  11
// function masala11(arr) {
//     return arr.filter(function(value) {
//         return value.length <= 4
//     })
// }
// const world = ['oq', 'qizil', 'yashil', 'kok', 'qora']
// console.log(masala11(world))

// 12 
// function masala12(arr) {
//     return arr.some(sum => sum.age > 18)
// }
// const people = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 19 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 21 }
// ];
// console.log(masala12(people))

//  13
// function masala13(names) {
//     return names.every(name => name.endsWith("jon"));
// }
// const names = ["Ali", "Valijon", "Gulnoz", "Sardorjon"];
// console.log(masala13(names)); 

// 14 
// function masala14(number) {
//     return numbers.find(num => num >= 100 && num <= 999 && num % 5 === 0);
// };
// const number = [102, 245, 333, 510, 625, 789];
// console.log(masala14(numbers));

// 15 
// function masala15(names) {
//     return names.findIndex(name => name.includes("bek"));
// };
// const names = ["Abdulloh", "Bekzod", "Jasurbek", "Shukhrat"];
// console.log(masala15(names));
