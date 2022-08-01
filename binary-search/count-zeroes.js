function countZeroes(arr) {
    let k = arr.length; 
    let leftidx = 0;
    let rightidx = k-1;
    let middleidx = Math.floor((k-1)/2)
    let pmi = middleidx - 1;
    while (leftidx < rightidx) {
        if (arr[middleidx] === 0) {
            if (arr[pmi] === 1) {
                return k - pmi - 1;
            }
            else if (pmi === 0) {
                return k;
            } 
            else {
                rightidx = middleidx;
                middleidx = Math.floor((leftidx + rightidx)/ 2);
                pmi = middleidx - 1;
            }
        }
        else {
            leftidx = middleidx;
            middleidx = Math.floor((leftidx + rightidx + 1) /2)
            pmi = middleidx - 1;
        }
        
    } return 0;
  }
 

  module.exports = countZeroes