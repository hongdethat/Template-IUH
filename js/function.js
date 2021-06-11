//check msv
function muoikytu1(){
var msv = document.getElementById('msv');
var setTotalNumberOfWordCounter = "10";
var getTextValue = document.frm.gioihan1.value; 
var getTextLength = getTextValue.length; 
if(getTextLength > setTotalNumberOfWordCounter){   
        getTextValue = getTextValue.substring(0,setTotalNumberOfWordCounter);
        document.frm.gioihan1.value =getTextValue;
        document.getElementById("test").innerHTML = "Mã số sinh viên chỉ được phép nhập tối đa 10 ký tự.";
        msv.focus;
        return false;
}
document.frm.totalWordLimit.value = (setTotalNumberOfWordCounter-getTextLength);
}

// check sdt
function muoikytu2(){
var msvv = document.getElementById('msvv');
var setTotalNumberOfWordCounter = "10";
var getTextValue = document.frm.gioihan2.value; 
var getTextLength = getTextValue.length; 
if(getTextLength > setTotalNumberOfWordCounter){   
        getTextValue = getTextValue.substring(0,setTotalNumberOfWordCounter);
        document.frm.gioihan2.value =getTextValue;
        document.getElementById("test2").innerHTML = "Số điện thoại chỉ được phép nhập tối đa 10 số";
        msvv.focus;
        return false;
}
document.frm.totalWordLimit.value = (setTotalNumberOfWordCounter-getTextLength);
}

// kiểm tra email
function checkEmail() {
        var email = document.getElementById('email');
        var filter = /^([a-zA-Z0-9_\.\-])+\@iuh.edu.vn/;
        if (!filter.test(email.value)) {
            document.getElementById("check").innerHTML = "Hãy Nhập Một Địa Chỉ Email Hợp Lệ.\n'(Ví Dụ: ABC@iuh.edu.vn')";
            email.focus;
            return false;
        }
        else
        {
            document.getElementById("check").innerHTML = "Email Hợp Lệ";
        }
    }
// chuyển chữ cái thành hoa
function chuhoaa() {
  var x = document.getElementById("chuhoa");
  x.value = x.value.toUpperCase();
}
// click thả
function tha() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("noidungthanh");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
