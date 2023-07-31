//Lấy số nhập vào truyền vào mảng numberArr

var numberArr = [];
function input_arr(){
    var numbers = document.getElementById("inputNum").value*1;
    numberArr.push(numbers);
   document.getElementById("array").innerHTML = numberArr;
   
}
   
   //1.Tính tổng các số dương trong mảng
function sumPositiveNumber(){
    document.querySelector("#kq_1").innerHTML ="Tổng các số là: " + numberArr.filter(function(item){
       return item >= 0;
    }).reduce(function(total,item){
        return total + item;
    },0)
}
   //2.Đếm có bao nhiêu số dương trong mảng
   function countPositiveNumber(){
       var count = 0;
     numberArr.forEach(function(item){
        if (item >= 0){
            count++;
        }
     })
     document.querySelector("#kq_2").innerHTML =`Số dương: ${count}` ;
     }
   
   //3.Tìm số nhỏ nhất trong mảng
   function smallestNumber(){
       var smallest = numberArr[0];
    // for (var j=0;j<numberArr.length;j++){
    //     if (numberArr[j] < smallest){
    //         smallest = numberArr[j];
    //     }
    // }
    numberArr.forEach(function(item){
        if (item < smallest ){
            smallest=item;
        }
    })
    document.querySelector("#kq_3").innerHTML =`Số nhỏ nhất là: ${smallest}` ;
   }
   //4.Tìm số dương nhỏ nhất trong mảng
   var soDuong = [];
   function smallestPosNumber(){
    // for (var k=0;k<numberArr.length;k++){
    //     if(numberArr[k]>0){
    //         soDuong.push(numberArr[k]);
    //     }
    numberArr.forEach(function(item){
        if(item > 0){
            soDuong.push(item);
        }
    })
        if (soDuong.length===0){
            document.getElementById("kq_4").innerHTML = `Không có số dương nào`
        }else{
            document.getElementById("kq_4").innerHTML =`Số dương nhỏ nhất: ${Math.min(...soDuong)}` ;
        }
    }
   
   //5.Tìm số chẵn cuối cùng trong mảng.Nếu mảng không có giá trị chẵn thì trả về -1

   var lastNum = [];
   function evenNumber(){
    for (var l=0;l<numberArr.length;l++){
        if (numberArr[l]%2==0){
            lastNum.push(numberArr[l]);          //lastNum : số chẵn cuối cùng trong mảng
        }   
    }
    if (lastNum.length > 0){
        document.getElementById("kq_5").innerHTML = `Số chẵn cuối cùng là: ${lastNum[lastNum.length-1]}`;
    }else{
        document.getElementById("kq_5").innerHTML = `-1`;
    }
}
   
   //6.Đổi chổ 2 giá trị trong mảng
function transfer(){
    var bienTam = 0;
    var soThu1 = document.querySelector("#vitri_1").value*1;
    var soThu2 = document.querySelector("#vitri_2").value*1;

    bienTam = numberArr[soThu1] ;
    numberArr[soThu1] = numberArr[soThu2];
    numberArr[soThu2] = bienTam;
    document.getElementById("kq_6").innerHTML =`Mảng sau khi đổi: ${numberArr}` ;
}

//7.Sắp xếp mảng theo thứ tự tăng dần
function arrange(){
    document.querySelector("#kq_7").innerHTML = numberArr.sort(function(a,b){
        return a - b;
    })
}
//8.Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
    function isPrime(num) { //hàm kiểm tra số nguyên tố
        //checkSNT = true là số nguyên tố
        //checkSNT = false không phải là số nguyên tố
         var checkSNT = true;
                if (num<2){
                    return checkSNT = false;
                }
        for (var j = 2 ; j <= Math.sqrt(num) ; j++ ){
            if (num % j === 0 ){
                checkSNT = false;
                break;
            }
        }
        return checkSNT;
      }
        function findFirstPrime() {   //hàm duyệt mảng tìm ra số nguyên tố đầu tiên      
            for(var i = 0; i < numberArr.length; i++){
                if(isPrime(numberArr[i])){
                    document.getElementById("kq_8").innerHTML = numberArr[i];
                    break;
            }else  {
                document.getElementById("kq_8").innerHTML = `-1`;
            }
            }
        };       
    
//9.Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var arrSoThuc = [];
function nhapSo(){
    var soThuc = document.querySelector("#so-thuc").value*1;
    arrSoThuc.push(soThuc);
    document.querySelector("#kho-so-thuc").innerHTML = arrSoThuc;
}
function timSoNguyen(){
    var demSo = 0;
    for (var i=0;i<arrSoThuc.length;i++){
        if(fits(arrSoThuc[i])){
            demSo++;
        }
    }
    document.getElementById("kq_9").innerHTML = `Số nguyên: ${demSo}`;
}
function fits(item){
    //count = false không phải số nguyên
    //count = true là số nguyên
    var count = false;
    if(Number.isInteger(item)){
        return count = true;
    }
}
//10.So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function demSoAmDuong(){
    var demSoDuong = 0;
    var demSoAm = 0;

    for(var j =0; j<numberArr.length;j++){
        if(numberArr[j]>0){
            demSoDuong++;
        }else{
            demSoAm++
        }
    }
    if (demSoDuong > demSoAm){
        document.querySelector("#kq_10").innerHTML = `Số dương > Số âm`;
    }else if(demSoDuong < demSoAm){
        document.querySelector("#kq_10").innerHTML = `Số dương < Số âm`;
    }else{
        document.querySelector("#kq_10").innerHTML = `Số dương = Số âm`;
    }

}

