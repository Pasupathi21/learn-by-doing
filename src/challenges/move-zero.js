// move the all zero to the end of the array
let nums = [0, 1, 0, 3, 12]

for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
        if (nums[i] === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
}

console.log(nums)
