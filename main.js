let dark = document.getElementById('dark');
let light = document.getElementById('light');
let linksId = document.getElementById('bodySection');
dark.addEventListener('click',()=>{
    linksId.style.background = '#222831';
});
light.addEventListener('click',()=>{
    linksId.style.background = '#f2f2f2';
});
// this will disappair the theme colors 
dark.addEventListener('click',()=>{
    dark.style.display = 'none';
    light.style.display = 'flex';
});
light.addEventListener('click',()=>{
    light.style.display= 'none';
    dark.style.display= 'flex';
});
const menubar = document.getElementsByClassName('menu')[0];
const unorderList = document.getElementsByClassName('unorderList')[0];
menubar.addEventListener('click',()=>{
unorderList.classList.toggle('active');
})

function showHero(){
    document.getElementById('heroSection').style.display = 'flex';
    document.getElementById('heroinSection').style.display = 'none';
}
function showHeroin(){
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('heroinSection').style.display = 'flex';
}