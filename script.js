var init = 30 ;
window.addEventListener('keyup',handler) ;
function handler(event) { 
    event.preventDefault(); 
    var balloon = document.getElementById('balloon');  
        switch (event.keyCode) {
            case 68:
                init=init-10 ; 
                 balloon.style.fontSize=init+"px" ;
            if (init <=0){ 
            balloon.textContent='Done' ;
            balloon.style.fontSize = '60px' ;
            window.removeEventListener('keyup',minus);      
        }
        break;
            case 73:
            if (init >=60){ 
            balloon.textContent="💥" ;
            window.removeEventListener('keyup',plus);
        }
        else{
            init=init+10 ; 
            balloon.style.fontSize=init+"px" ;
        }break;
    }
}