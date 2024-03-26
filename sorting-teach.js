function sort(arr) {
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
}