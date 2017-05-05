// DOGE WOW!!!
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
// Unable button
function disable() {
    var answer = document.getElementsByName('answer');
    for (var i = 0; i < answer.length; i++) {
        answer[i].addEventListener('change', on);
    }
    function on() {
        document.getElementById('btn1').removeAttribute('disabled');
    }
}
window.onload = function () {
    document.getElementById('start').focus();
    document.querySelector('quest__link').focus();
    document.querySelector('quest__form-button').focus();
};
