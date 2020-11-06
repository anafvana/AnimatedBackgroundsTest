//Display time results
const initDISPLAY = function (e){
    document.getElementById("result1").innerHTML = localStorage.getItem("time1");
    document.getElementById("result1").innerHTML = localStorage.getItem("time2");
}

document.addEventListener('DOMContentLoaded', function(){initDISPLAY();});