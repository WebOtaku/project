// Check answer
function check(){
    var answer = document.getElementsByName('answer');
        if(answer[0].checked){
            alert('You right!');
            window.open('../html/page2.html');
        }else if(answer[1].checked || answer[2].checked || answer[3].checked) {
            alert('Looser!');
        }
}