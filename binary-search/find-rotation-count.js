function findRotationCount(arr, low = 0, high = arr.length - 1) {

    if (high >= low) {
        let mid = Math.floor((high + low)/2);
        let middleval = arr[mid];
        if (mid === 0 || mid === arr.length - 1) {
            return mid;
        }
        else if (arr[mid-1] > middleval && arr[mid + 1] > middleval) {
            return mid;
        }
        else if (arr[mid - 1] < middleval && arr[high] < middleval) {
            return findRotationCount(arr, mid + 1, high);
        }
        else if (arr[mid -1] < middleval && arr[high] > middleval) {
            return findRotationCount(arr, low, mid-1);
        }
    }
}

module.exports = findRotationCount