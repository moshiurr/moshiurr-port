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
    }
    else if(theme == 'blue'){
        document.getElementById('theme').href = 'css/blue.css'
    }
    else if(theme == 'green'){
        document.getElementById('theme').href = 'css/green.css'
    }else{
        document.getElementById('theme').href = 'css/purple.css'
    }

    localStorage.setItem('theme', theme)

}