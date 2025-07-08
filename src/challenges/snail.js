/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (!this?.length || !rowsCount || !colsCount || ( (rowsCount * colsCount) != this.length)) return []
    const cloneArray = [...this]
    const output = Array(rowsCount).fill(null)
    let tempArr = []
    for (let i = 0; i < colsCount; i++) {
        tempArr = this.slice((i * (rowsCount)), ((i * rowsCount) + rowsCount))
        console.log(i+1 )
        tempArr = ((i+1) % 2) === 0 ?  tempArr.reverse() : tempArr
        for (let j =0; j < rowsCount; j++){
            if (!Array.isArray(output[j])) output[j] = []
            output[j][i] = tempArr[j]
        }
    }
    return output
}

// Input: 
// nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// rowsCount = 5
// colsCount = 4
// Output: 
// [
//  [19,17,16,15],
//  [10,1,14,4],
//  [3,2,12,20],
//  [7,5,18,11],
//  [9,8,6,13]
// ]
const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
arr.snail(5, 4)

