function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1
    
    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(num++)
        }
    }
    return matrix
}
generateMatrix(3, 4)
console.log(generateMatrix(3, 4))
let matrix = generateMatrix(3, 4)
console.log(matrix[1][2]) //prints 7

const printAllMatrixNumbers = (matrix)=> {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j])
        }
    }

}
printAllMatrixNumbers(matrix)

const get = (rowNum, colNum)=> {
   // let matrix = generateMatrix(3, 4)
    return matrix [rowNum] [colNum]
}
console.log(matrix);
console.log(get (1,2))

function print(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        let line = ""
        for (let j = 0; j < matrix[i].length; j++) {
            line += (matrix[i][j] + "\t")
        }
        console.log(line)
    }
}
print(matrix)

//print all the values of the second column (index 1)
function printColumn(matrix, colNum) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][colNum])
    }
}

printColumn(1) //prints 2, 6, 10 on separate lines

const printRow = (matrix, rowNum) => {
    for (let i=0; i<matrix[rowNum].length; i++){
        console.log(matrix[rowNum][i])
    }

}
printRow(matrix, 1)
const alter = (rowNum, colNum, newValue) =>{
     matrix[rowNum] [colNum] = newValue

     return matrix
}
console.log(alter(1, 2, 42));