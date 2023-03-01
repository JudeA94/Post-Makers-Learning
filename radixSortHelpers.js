// const getDigitFrom = (num, place)	=> {
//   // What digit is at the given place value in num?	integer
//   column = Math.floor(Math.log10(place))
//   const numStringArr = num.toString().split('')
//   if (numStringArr.length <= column) return 0
//   return parseInt(numStringArr.reverse()[column])
// }

const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;;


// const getIntLength = (num) => {
//   // How many digits are in num?	integer
//   return num.toString().length
// }	

const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;


// const getMaxDigits = (nums) => {
//   // How many digits does the integer with the most digits have?	integer
//   let digits = 0
//   nums.forEach(num => {
//     if (getIntLength(num) > digits) {
//       digits = getIntLength(num)
//     }
//   })
//   return digits
// }

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

console.log(getDigitFrom(3562, 1))
console.log(getIntLength(3450967))
console.log(getMaxDigits([123,12,1234]))