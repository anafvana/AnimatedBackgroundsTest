//Display time results
const initDISPLAY = function (e){
    document.getElementById("result1").innerHTML = localStorage.getItem("time1");
    document.getElementById("result2").innerHTML = localStorage.getItem("time2");
}

document.addEventListener('DOMContentLoaded', function(){initDISPLAY();});

function checkPwd(){
    if (document.getElementById("password").value == "background"){
        var url = 'https://docs.google.com/forms/d/e/1FAIpQLSco48PMkDhpQMMsb-zJdModQudNYOiDrVnaGXtnTEqFvU_QoQ/viewform?usp=sf_link';
        var win = window.open(url, '_blank');
        win.focus();
    } else {
        alert("Wrong password!")
    }
}