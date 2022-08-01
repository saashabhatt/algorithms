function sortedFrequency(arr, val) {
    let fidx = findFirst(arr, val);
    if (fidx == -1) {
        return fidx;
    }
    let lidx = findLast(arr, val);
    return lidx - fidx + 1;
};


function findFirst(arr, val, low = 0, high = arr.length -1) {
    if (high >= low) {
        let mid = Math.floor((high + low)/2);
        if (mid === 0 || (arr[mid] === val && arr[mid -1] < val)) {
            return mid;
        }
        else if (arr[mid] < val) {
            return findFirst(arr, val, mid + 1, high)
        }
        else {
            return findFirst(arr, val, low, mid - 1)
        }
    }
    return -1;
}

    function findLast(arr, val, low = 0, high = arr.length -1) {
        if (high >= low) {
            let mid = Math.floor((high + low)/2);
            if (mid === arr.length - 1 && arr[mid] === val) {
                return mid;
            }
            else if (arr[mid] === val && arr[mid + 1] > val) {
                return mid;
            }
            else if (arr[mid] < val) {
                return findLast(arr, val, mid + 1, high)
            }
            else if (arr[mid] === val && arr[mid+1] === val) {
                return findLast(arr, val, mid + 1, high)
            }
            else if (arr[mid] > val) {
                return findLast(arr, val, low, mid - 1)
            }
        } return -1;
    }
 

module.exports = sortedFrequency