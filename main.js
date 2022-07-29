let star = document.getElementById('star'),
    moon =document.getElementById('moon'),
    mountainsBehind =document.getElementById('mountains_behind'),
    mountainsFont =document.getElementById('mountains_font'),
    text = document.getElementById('text');

// console.log(star, moon, mountainsBehind, mountainsFont,text)

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    star.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountainsBehind.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';

})