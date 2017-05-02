// DOGE WOW!!!
if(document.getElementById('index')){
    (function wow() {
        var btn_close = document.getElementById('wow');
        var doge = document.getElementById('doge');
        btn_close.addEventListener('click', wow);
        function wow() {
            doge.style.display = 'flex';
            setTimeout(wowclose, 4000);
        }
        function wowclose() {
            doge.style.display = 'none';
        }
    })();
}
// Unable button dead
if(document.getElementById('page1')) {
    (function disable() {
        var answer = document.getElementsByName('answer');
        for (var i = 0; i < answer.length; i++) {
            answer[i].addEventListener('change', on);
        }
        function on() {
            document.getElementById('btn1').removeAttribute('disabled');
        }
    })();
}