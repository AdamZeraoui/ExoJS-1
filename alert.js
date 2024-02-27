



const cube = document.querySelector('#cube');
var elem1 = document.getElementById(cube);
var style = window.getComputedStyle(elem1);
cube.addEventListener('click', function(){
    window.alert(style);
})




