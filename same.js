// write a function to check if any element of an array has a corresponding element double the value in array 1
// example [1,2,3,4] [1,4,6,8] true
// [5,6,5] [12,10,10] true

function same(arr1, arr2){
        if (arr1.lenght !== arr2.lenght) {
            return false;
        }
        let frequencyCounter1 = {};
        let frequencyCounter2 = {};
        
        
        for (val of arr1){
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        }
        for (val of arr2){
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        }

        for (let key in frequencyCounter1){
            if (!(key ** 2 in frequencyCounter2)) {
                return false;
            }
            if ( frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
                return false;
            }
        }
        return true;
}