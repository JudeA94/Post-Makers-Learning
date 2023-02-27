function merge(array1, array2) {
    let merged = []
    while (array1.length || array2.length) {
        let el1 = array1.length ? array1[0] : Infinity
        let el2 = array2.length ? array2[0] : Infinity
        el1 < el2 ? merged.push(array1.shift()) : merged.push(array2.shift())
    }
    return merged
}

function mergeSort(array) {
    if (array.length < 2) return array
    const midIndex = Math.floor(array.length / 2)
    const firstHalf = array.slice(0,midIndex)
    const secondHalf = array.slice(midIndex)
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

module.exports = {
    merge,
    mergeSort
};