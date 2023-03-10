function radixSort(arr) {
  if (arr.length < 2) return arr
  if (!Array.isArray(arr)) return null
  const maxDigits = getMaxDigits(arr)
  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigitFrom(arr[j], i)
      buckets[digit].push(arr[j])
    }
    arr = [].concat(...buckets)
  }
  return arr
}

const getDigitFrom = (num, place) =>
  Math.floor(Math.abs(num) / Math.pow(10, place)) % 10

const getIntLength = (num) =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1

const getMaxDigits = (nums) => {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]))
  }
  return maxDigits
}

module.exports = {
  radixSort,
}

function radixSortWithNegatives(arr) {
  if (!Array.isArray(arr)) {
    return null
  }

  var negatives = arr.filter((item) => item < 0)
  var negativesSorted = []
  if (negatives.length > 0) {
    negativesSorted = radixSort(negatives.map((item) => Math.abs(item)))
      .reverse()
      .map((item) => -item)
  }

  var positives = arr.filter((item) => item >= 0)
  let maxDigits = getMaxDigits(positives)

  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => [])

    for (let i = 0; i < positives.length; i++) {
      let digit = getDigitFrom(positives[i], k)
      buckets[digit].push(positives[i])
    }
    positives = [].concat(...buckets)
  }
  return negativesSorted.concat(positives)
}
