function Timkiem() {
    let arr = [1, 4, 7, 23, 67, 65, 4, 532, 676, 32, 5, 7];
    let e="<hr/>";
    for (i = 0; i < arr.length; i++) {
        if (i<arr.length-1){
            e += arr[i] + ", ";
        }else{
            e += arr[i];
        }
    }
    document.getElementById('mang').innerHTML = e ;
    let a = document.getElementById('Input').value;
    let dem =0;
    for (j = 0; j < arr.length; j++) {
        if (a == arr[j]) {
            document.getElementById('show').innerHTML += " Co phan tu " + a + " tai vi tri " + j + " trong mang" + "<br>";
            dem++;
        }
    }
    if (dem ==0 ){
        document.getElementById('show').innerHTML="Khong co phan tu " + a + " trong mang"
    }
}


