// Check answer
function check(){
    var answer = document.getElementsByName('answer');
        if(answer[0].checked){
            alert('You right!');
            window.open('../html/'+document.getElementById('btn1').getAttribute('placeholder')+'.html');
        }else if(answer[1].checked || answer[2].checked || answer[3].checked) {
            alert('Looser!');
        }
}