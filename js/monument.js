var submit = document.getElementById('monument');
var overlay = document.getElementById('overlay');
submit.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal(){
    overlay.style.display='none';
}