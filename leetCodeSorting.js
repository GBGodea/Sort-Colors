function sort(arr) {
    // let newArr = [];
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

            // leftNum = arr[arrLength - 1];
            // console.log(leftNum);
       }
       arr.push(saver);
       arr.splice(numDeleter, 1);
       arrLength--;
       saver = 0;
    }
    arr.reverse();
}
