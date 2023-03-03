function binarySearch(array, target) {
    if (!array.length) return false
    const midIndx = Math.floor(array.length / 2)
    const midEl = array[midIndx]
    if (target < midEl) {
        const leftHalf = array.slice(0,midIndx)
        return binarySearch(leftHalf, target)
    } else if (target > midEl) {
        const rightHalf = array.slice(midIndx+1)
        return binarySearch(rightHalf, target)
    } else return true
}

function binarySearchIndex(array, target, leftIndx=0) {
    if (!array.length) return -1
    const midIndx = Math.floor(array.length / 2)
    const midEl = array[midIndx]
    if (target < midEl) {
        const leftHalf = array.slice(0,midIndx)
        return binarySearchIndex(leftHalf, target, 0)
    } else if (target > midEl) {
        const rightHalf = array.slice(midIndx+1)
        return binarySearchIndex(rightHalf, target, midIndx + 1)
    } else return leftIndx + midIndx
}
// in place version - smaller space complexity O(1) vs O(log(n))
// function binarySearchIndex(array, target, lo=0, hi=array.length - 1) {
//     if (lo === hi) {
//         return -1;
//     }

//     let midIdx = Math.floor((lo + hi) / 2);

//     if (target < array[midIdx]) {
//         return binarySearchIndex(array, target, lo, midIdx);
//     } else if (target > array[midIdx]) {
//         return binarySearchIndex(array, target, midIdx + 1, hi);
//     } else {
//         return midIdx;
//     }
// }

module.exports = {
    binarySearch,
    binarySearchIndex
};