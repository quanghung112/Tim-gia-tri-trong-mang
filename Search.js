function Timkiem() {
    let arr = [1, 4, 7, 23, 67, 65, 324, 532, 676, 32, 5, 7];
    let e="<hr/>";
    let x = [];
    for (i = 0; i < arr.length; i++) {
         e += arr[i] + ", "
    }
    document.getElementById('mang').innerHTML = e;
    let a = document.getElementById('Input').value;
    for (j = 0; j < arr.length; j++) {
        if (a == arr[j]) {
            document.getElementById('show').innerHTML = " Co gia tri " + a + " tai vi tri " + j + " trong mang";
        }
    }
}


