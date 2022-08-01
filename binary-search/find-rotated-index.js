function findRotatedIndex(arr, key, low=0, high = arr.length -1) {
    if (high >= low) {
        let mid = Math.floor((high + low)/2);
        let middleval = arr[mid];
        if (middleval === key) {
            return mid;
        }
        else if (arr[low] < middleval) {
            if ((key < arr[low]) || (key > middleval)) {
                return findRotatedIndex(arr, key, mid+1, high);
            }
            else {
                return findRotatedIndex(arr, key, low, mid-1);
            }
        }
        else if (arr[high] > middleval) {
            if (key > arr[high] || key < middleval) {
                return findRotatedIndex(arr, key, low, mid - 1);
            }
            else {
                return findRotatedIndex(arr, key, mid+1, high);
            }
        }
    }return -1;    
}
    // let leftidx = 0;
    // let rightidx = arr.length - 1;
    // while (leftidx <= rightidx) {
    //     let middleidx = Math.floor((leftidx + rightidx)/2);
    //     let middleval = arr[middleidx];
    //     if (middleval === key) {
    //         return middleidx;
    //     }
    //     else if (arr[leftidx] < middleval) {
    //         if (key > middleval || key < arr[leftidx]) {
    //             leftidx = middleidx + 1;
    //         }
    //         else if (key < middleval && key > arr[leftidx]) {
    //             rightidx = middleidx - 1;
    //         }
    //     }
    //     else if (middleval < arr[rightidx]) {
    //         if (key < middleval || key > arr[rightidx]) {
    //             rightidx = middleidx - 1;
    //         }
    //         else if (key > middleval && key < arr[rightidx]) {
    //             leftidx = middleidx + 1;
    //         }
    //     }
    // }    
    // return -1;


module.exports = findRotatedIndex