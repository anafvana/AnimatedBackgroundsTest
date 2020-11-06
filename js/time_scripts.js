//Time calculation
var time_start;
var t_total1;
var t_total2;

const init = function (e){
    time_start = time();
}

document.addEventListener('DOMContentLoaded', function(){init();});


function time(){
    var n = new Date();
    t = n.getTime();
    return t;
}

function calc_t_total(){
    var time_end = time();
    total = time_start - time_end;
}

function done_p1{
    window.location.href='main.html' + '?group=' + group;
}

function done_p2{

}