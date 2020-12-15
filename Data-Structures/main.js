// Create a data structure called UniqueArray
// It should have four methods:
// add(item)
// Stores the item only if it hasn't been added already
// showAll()
// Shows all the added items
// exists(item)
// Returns true if the item has been added, false otherwise
// This should run in O( 1 )
// get(index)
// Returns the item at index index, or -1 if it doesn't exit
// Effectively, this data structure works like a normal array (for the most part), but:
// It only works for primitive types
// It only allows you to add unique items to it

//Exercise1
// class UniqueArray {
//     constructor() {
//         this.array = []
//     }
//     add(item) {
//         if (this.array.includes(item)) {
//         } else { this.array.push(item) }
//     }
//     showAll() {
//         console.log(this.array)
//     }
//     exists(item) {
//         return this.array.includes(item)
//     }
//     get(index) {
//         if (this.array.length >= index+1) {
//             return this.array[index]
//         } else { return -1 }
//     }
// }

// const uniqueStuff = new UniqueArray()
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// console.log(uniqueStuff.exists("toy")) //returns true
// uniqueStuff.add("poster")
// uniqueStuff.add("hydrogen")
// console.log(uniqueStuff.get(2)) //prints "hydrogen"

// class UniqueArray {
//     constructor() {
//         this.arr = []
//         this.length = 0
//         this.obj = {}
//     }
//     add(item) {
//             if(!this.exists(item)) {
//                 this.arr[this.length] = item
//                 this.length++
//                 this.obj[item] = 1
//             }
//     }
//     showAll() {
//         console.log(this.arr)
//     }
//     exists(item) {
//         if(this.obj[item]){
//             return true
//         } else {
//             return false
//         }
//     }
//     get(index) {
//         if(index <= (this.length - 1)){
//             return this.arr[index]
//         } else {
//             return -1
//         }
//     }
// }
class UniqueArray {
    constructor() {
        this.arr = []
        this.length = 0
        this.obj = {}
    }
    add(item) {
            if(!this.exists(item)) {
                this.arr[this.length] = item
                this.length++
                this.obj[item] = 1
            }
    }
    showAll() {
        console.log(this.arr)
    }
    exists(item) {
        if (typeof(item)===object) {
           if(JSON.stringify(item)===) 
        }
        // if(this.obj[item]){
        //     return true
        // } else {
        //     return false
        // }
    }
    get(index) {
        if(index <= (this.length - 1)){
            return this.arr[index]
        } else {
            return -1
        }
    }
}
