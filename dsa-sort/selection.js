function selectionSort(arr) {
    let minima, idx;
    for (i=0; i< arr.length; i++) {
        minima = arr[i]
        idx = i;
        for (j=i+1; j <arr.length; j++) {
            if (arr[j] < minima) {
                minima = arr[j];
                idx = j; 
            }
            if (j === arr.length-1) {
                [arr[i], arr[idx]] = [arr[idx], arr[i]]
            }
        }
    }
    return arr;
}

module.exports = selectionSort;