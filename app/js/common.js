// DOGE WOW!!!
var btn_close = document.getElementById('wow');
var doge = document.getElementById('doge');
btn_close.addEventListener('click',wow);
function wow(){
    doge.style.display = 'flex';
    setTimeout(wowclose, 4000);
}
function wowclose(){
    doge.style.display = 'none';
}

// Check answer
var answer = document.getElementsByName('answer');
answer.addEventListener('click',check);
function check() {
    for(var i = 0;i <= (answer.length - 1);i++){
        if(answer[i].value === 'Язык гипертекстовой разметки'){
            alert('You right!');
        }
    }
}

