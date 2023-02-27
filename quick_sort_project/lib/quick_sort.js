function quickSort(array) {
    if (array.length < 2) return array
    let pivot = array.shift()
    const left = array.filter(el => el < pivot)
    const right = array.filter(el => el >= pivot)
    const leftSorted = quickSort(left)
    const rightSorted = quickSort(right)
    return [...leftSorted, pivot, ...rightSorted]
}


module.exports = {
    quickSort
};