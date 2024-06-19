function stature(arr){
    for (let i = 0; i<arr.length; i++) {
        arr[i] += (arr[i] * 0.1);
        console.log(arr[i]);
    }

}
stature([100, 200, 300, 400]);