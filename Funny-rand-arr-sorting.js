let clearArr = [];
function sort(arr) {
    createArr(clearArr);
    for(let j = 0; j < arr.length; j++){
        let min_id = j;
        let saver = arr[min_id];
        for(let i = j + 1; i < arr.length; i++) { 
            if(arr[min_id] > arr[i]) { 
                min_id = i;
            }
        }
        arr[j] = arr[min_id];
        arr[min_id] = saver;
    }
    console.log(arr);
}

sort(clearArr);

function createArr(arr) {
    // if you want to increase or decrease arr length, change 100 to any nymber()
    let n = Math.floor(Math.random() * 100);// <--- in this place change 100 to 10 or 11 or 10321 if you want
    for(let i = 0; i < n; i++) {
        // If you want to increase or decrease the range of numbers change 100 here
        let randNum = Math.floor(Math.random() * 100); // <--- in this place change 100 to 10 or 11 or 10321 if yo want 
        arr.push(randNum);
    }
}