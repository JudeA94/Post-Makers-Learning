function swap(array, idx1, idx2) {
    if (idx1 >= idx2) return
    let temp = array[idx1]
    array[idx1] = array[idx2]
    array[idx2] = temp
}

function bubbleSort(array) {
    let swapped = true
    while (swapped) {
        swapped = false
        for (let i = 0 ; i < array.length - 1 ; i++ ) {
            if (array[i] > array[i+1]) {
                swap(array,i,i+1)
                swapped = true;
            }
        }
    }
    return array
}


module.exports = {
    bubbleSort,
    swap
};