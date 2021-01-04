//java-script for chaging the theme of the website

let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let allTheme = document.getElementsByClassName('theme-dot')

for(var i=0; allTheme.length > i; i++){
    allTheme[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}

function setTheme(theme){
    if(theme == 'light'){
        document.getElementById('theme').href = 'css/style.css'
        document.getElementById('main-logo').src = 'images/logo.png'
    }
    else if(theme == 'blue'){
        document.getElementById('theme').href = 'css/blue.css'
        document.getElementById('main-logo').src = 'images/white.png'
    }
    else if(theme == 'green'){
        document.getElementById('theme').href = 'css/green.css'
        document.getElementById('main-logo').src = 'images/white.png'
    }else{
        document.getElementById('theme').href = 'css/purple.css'
        document.getElementById('main-logo').src = 'images/white.png'
    }

    localStorage.setItem('theme', theme)
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinkList = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click' ,() => {

        nav.classList.toggle('nav-active');

        //line animation
        burger.classList.toggle('toggle-burger');

        navLinkList.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else {
                link.style.animation = 'navLinkFade 0.5s ease forwards 0.2s';
            }
        });
    });
}

navSlide();
