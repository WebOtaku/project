'use strict';
/**
 * Checking answer.
 */
function check(){
    var answer = document.getElementsByName('answer');
    for(var i = 0;i < answer.length;i++){
        if(answer[i].checked && answer[i].getAttribute('placeholder')){
            alert('You right!');
            window.open('../html/'+document.getElementById('btn1').getAttribute('placeholder')+'.html');
            break;
        }else if(answer[i].checked){
            alert('Wrong answer');
        }
    }
}