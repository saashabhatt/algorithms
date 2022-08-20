function insertionSort(arr) {
    for (let i=1; i < arr.length; i++) {
        for (j=i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
        }
    }
    return arr;
}   

module.exports = insertionSort;