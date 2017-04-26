$(function(){
    var btn_close = document.getElementById('close');
    var doge = document.getElementById('doge');
    btn_close.addEventListener('click',wow);
    function wow(){
        doge.style.display = 'flex';
        setTimeout(wowclose,4000)
    }
    function wowclose(){
        doge.style.display = 'none';
    }
});