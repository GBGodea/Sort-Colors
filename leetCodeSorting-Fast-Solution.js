let arr1 = [1, 3, 2, 4, 7, 0];
// // let arr2 = [2, 0, 1, 2, 1, 0];
let arr2 = [2, 0, 1, 2, 1, 1];

function sort(arr) {
    let numDeleter = 0;
    let saver = arr[0];
    let arrLength = arr.length;
    let arrer = arrLength;
    let leftNum = 0;
    for(let i = 0; i < arrer; i++) {
        for(let j = 0; j < arrLength; j++) {
            if(saver <= arr[j]) {
                saver = arr[j];
                numDeleter = j;
                
            }

            leftNum = arr[arrLength - 1];
       }
       arr[numDeleter] = leftNum;
       arr[arrLength - 1] = saver;
       arrLength--;
       saver = 0;
    }
    console.log(arr);
};
sort(arr1);
sort(arr2);