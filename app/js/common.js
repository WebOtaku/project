'use strict';
/**
 * DOGE WOW!!!
 */
function wow() {
    var btn_wow = document.getElementById('wow');
    var doge = document.getElementById('doge');
    btn_wow.onclick = function wow() {
        doge.style.display = 'flex';
        setTimeout(close, 4000);
    };
    function close() {
        doge.style.display = 'none';
    }
}
/**
 * Unable button when radio buttons change their condition.
 */
function disable() {
    var answer = document.getElementsByName('answer');
    for (var i = 0; i < answer.length; i++) {
        answer[i].addEventListener('change', on);
    }
    function on() {
        document.getElementById('btn1').removeAttribute('disabled');
    }
}