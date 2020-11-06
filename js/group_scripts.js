//Establishing group
var group;
const init = function (e){
    group = document.location.search.replace(/^.*?\=/, '');
    document.getElementById("info_group").innerHTML = "You selected Group " + group;
    if (group != 'A' && group != 'B' && group!=''){
        alert("Error in group. You will be redirected");
        window.location.href='../index.html';
    }
}

document.addEventListener('DOMContentLoaded', function(){init();});

function def_group(g){
    if (g == 'A' || g == 'B') {
        group = g;
        window.location.href='html/main.html' + '?group=' + group;
        console.log(group);
    } else {
        console.log("Error in group input.")
    }
}

function start_read(){
    if (group == 'A'){
        window.location.href='still.html' + '?group=' + group;
    } else if (group == 'B'){
        window.location.href='moving.html' + '?group=' + group;
    } else {
        console.log("Error in group.")
    }
}

function next_read(){
    if (group == 'B'){
        window.location.href='still.html' + '?group=' + group;
    } else if (group == 'A'){
        window.location.href='moving.html' + '?group=' + group;
    } else {
        console.log("Error in group.")
    }
}