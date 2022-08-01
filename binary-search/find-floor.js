function findFloor(arr, val) {
  let leftidx = 0;
  let rightidx = arr.length - 1;
  while (leftidx <= rightidx) {
    let middleidx = Math.floor((leftidx + rightidx)/2);
    let middleval = arr[middleidx];
    let lessval = ((middleidx - 1) > 0)? arr[middleidx - 1] : arr[0];
    let moreval = ((middleidx + 1) < (arr.length -1))? arr[middleidx + 1] : val + 1;

    if (middleval == val) {
        return middleval;
    }
    else if (val > arr[arr.length - 1]) {
        return arr[arr.length - 1];
    }
    else if (val < arr[0]) {
        return -1;
    }
    else if (lessval < val && middleval > val) {
        return lessval;
    }
    else if (middleval < val && moreval > val) {
        return middleval;
    }
    else if (lessval < val && middleval < val) {
        leftidx = middleidx + 1;
    }
    else if (middleval > val && moreval > val) {
        rightidx = middleidx - 1;
    }
  }
  return -1;
}

module.exports = findFloor