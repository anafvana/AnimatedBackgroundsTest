//Time calculation
var time_start;
var t_total1;
var t_total2;

const initTIME = function (e){
    time_start = time();
}

document.addEventListener('DOMContentLoaded', function(){initTIME();});


function time(){
    var n = new Date();
    t = n.getTime();
    return t;
}

function calc_t_total(){
    var time_end = time();
    total = (time_end - time_start)/1000;
    return total;
}

function done(){
    var path = location.pathname;

    if (group == 'A'){
        if (path.includes('still')){
            done_p1();
        } else if (path.includes('moving')){
            done_p2();
        } else {
            console.log("Error in path.")
        }
    } else if (group == 'B') {
        if (path.includes('moving')){
            done_p1();
        } else if (path.includes('still')){
            done_p2();
        } else {
            console.log("Error in path.")
        }
    } else {
        console.log("Error in group.")
    }
}

function done_p1(){
    localStorage.setItem('time1', calc_t_total())
    window.location.href='interlude.html' + '?group=' + group;
}

function done_p2(){
    localStorage.setItem('time2', calc_t_total())
    window.location.href='conclusion.html' + '?group=' + group;
}