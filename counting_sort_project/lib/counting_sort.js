function countingSort(arr, max) {
    const result = []
    const counters = new Array(max + 1).fill(0)
    arr.forEach(num => counters[num]++)
    for(let i = 0 ; i < counters.length ; i++) {
        while (counters[i] > 0) {
            result.push(i)
            counters[i]--
        }
    }
    return result
}


module.exports = {
    countingSort
};