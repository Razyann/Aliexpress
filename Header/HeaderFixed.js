export function HeaderFixed(){
    let header = document.querySelector('.js-header')
    let headerH = document.querySelector('.js-header').clientHeight

    document.onscroll = function () {
        let scroll = window.scrollY
        
        if(scroll > headerH){
            header.classList.add('fixed')
            document.body.style.paddingTop = headerH + "px"
        }else{
            header.classList.remove('fixed')
            document.body.removeAttribute('style')
        }
    }

}