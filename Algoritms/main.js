//Exercise 1

// const printStars = function (num) {
//     let star = '';
//     for (let i=0; i<num; i++){
//         star += '*'
//         console.log(star)
//     }
// }

// printStars(5)

//Exercise 2

// const printBackwardsStars = function (num) {
//     let string = ''
//     while (num > 0) {
//         if (string.length < num) {
//             string += '*'
//         } else if (string.length === num) {
//             console.log(string)
//             num--
//             string = ''
//         }
//     }
// }
// printBackwardsStars(5)

//Exercise 3 not correct at all!!!!!!!!!!!!!!!!!!!!!!!
// const printStarSeries = (num, count) => {
//     let star = ''
//     while (count > 0) {
//         for (let i = 0; i < num; i++) {
//             let star = '';
//             for (let i = 0; i < num; i++) {
//                 star += '*'
//                 console.log(star)
//             }

//             while (num > 0) {
//                 if (star.length < num) {
//                     star += '*'
//                 } else if (star.length === num) {
//                     console.log(star)
//                     num--
//                     star = ''
//                 }
//             }
//         }

//     } count--
// }
// printStarSeries(5, 5)

//exercise 4
// const reverse = function(str){
//     let reversed = str.split("").reverse().join('')
//     return reversed
//   }
//   reverse("dog") //should return "god"
//   reverse("race car") //should return "rac ecar"

//Exercise 5
// const isPalindrome = (word)=>{
//   let check1 = word.toLowerCase().split(" ").join('')
//   let check2 = word.toLowerCase().split("").filter( l => l !== " ").reverse().join('')
//   if (check1 === check2) { console.log(true); } else { console.log(false); }
// }
// isPalindrome('Taco Cat')
//part 2
// const isPalindrom = function (str) {
//   str = str.replace(/\s/g, '').toLowerCase()
//   console.log(str)
//   let r = reverse(str)
//   if (r === str) {
//       return true
//   }
//   return false
// }

//Exercise 6
// const encrypt = (str) => {
//   const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//   let result = []
//   let arr = str.split('')
//   arr.forEach(l => {
//     let index = abc.indexOf(l) + 1
//     result.push(abc[index])
//   })
//   console.log(result.join(''));
// }
// encrypt('zap')


//Exercise7


//   const decrypt = function (str) {
//       let encryptedStr = ''
//       for (let i = 0; i < str.length; i++) {
//           let char = ''
//           str[i] === 'z' ? char = 'a' : char = String.fromCharCode(str.charCodeAt(i) - 1)
//           encryptedStr += char
//       }console.log(encryptedStr)
//       return encryptedStr
//     }


// decrypt('obubmjb')

//Exercise 8
// const colors = ["red", "indigo", "white", "teal", "yellow"];
// const foods = ["bread", "cheese", "cucumber"];
// const jumble = function (arr1, arr2) {
//     let jumbledArr = arr1.concat(arr2)
//     let num = jumbledArr.length
//     while (num > 0) {
//        let index = Math.floor(Math.random() * num)
//         num--
//        let  elem = jumbledArr[num]
//         jumbledArr[num] = jumbledArr[index]
//         jumbledArr[index] = elem
// }   return jumbledArr
// }
// console.log(jumble(colors, foods))

//Exercise 9
// const rawDist = {
//   A: 60,
//   B: 10,
//   C: 10,
//   D: 20
// }

// const getLetter = (obj)=>{
//   let chance = Math.floor(Math.random() * 100)+1
//   if (chance > 40) {
//     console.log(obj.A)
//     return obj.A
//   } if (chance < 10) {
//     console.log(obj.B)
//     return obj.B
//   } if (chance >10 && chance <20) {
//     console.log(obj.C)
//     return obj.C
//   } if (chance>20&& chance<40) {
//     console.log(obj.D)
//     return obj.D
//   }
// }
// getLetter(rawDist)
// Extension1
// const printInLoop = (words)=>{
//  let count = 1
//  while(count>0) {
//      words.forEach(word=>console.log(word))
//  }
// }
// printInLoop(["down", "the", "rabbit", "hole"])

//extension2
// const findClosest = (points, point) => {
//     let checkDistances = []
//     points.forEach(p => {
//         let a = p.x - point.x
//         let b = p.y - point.y
//         let distance = Math.sqrt(a * a + b * b)
//         checkDistances.push({ distance: distance, point: { x: p.x, y: p.y } })
//     })
//     let smallest = checkDistances[0].distance
//     for (let i = 0; i < checkDistances.length; i++) {
//         if (checkDistances[i].distance < smallest) {
//             console.log(checkDistances[i].point)
//             return checkDistances[i].point
//         }
//     }
// }
// let pizzaLocations = [
//     { x: 6, y: 12 },
//     { x: 3, y: 1 },
//     { x: 9, y: 0 },
//     { x: 4, y: 10 }
// ]
// let homeLocation = { x: 4, y: 2 }
// findClosest(pizzaLocations, homeLocation) // should return {x: 3, y: 1}

// //extension3 (not working)
// const secretEncrypt = (secretWord, word) => {

//     for (let i = 0; i < secretWord.length; i++) {
//         console.log(String.fromCharCode(secretWord.charCodeAt(i) - 96))
//         let encryptedStr = ''
//         console.log(secretWord.charCodeAt(i) - 96);
//         for (let j = 0; j < word.length; j++) {
//             let char = ''
//             word[j] === 'z' ? char = 'a' : char = String.fromCharCode(secretWord.charCodeAt(i) - 96)
//             encryptedStr += char
//         } return encryptedStr
//     }
// }
// console.log(secretEncrypt("cab", "elephant"))

