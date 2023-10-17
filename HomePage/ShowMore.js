export function ShowMore(){
    let ProductCont = document.querySelector('.ProductCont')
    let ShowMoreBtnBox = document.createElement('div')
    ShowMoreBtnBox.classList.add('ShowMoreBtnBox')
    ProductCont.appendChild(ShowMoreBtnBox)
    let ShowMoreBtn = document.createElement('button')
    ShowMoreBtn.classList.add('ShowMoreBtn')
    ShowMoreBtn.innerHTML = "ShowMore"
    ShowMoreBtnBox.appendChild(ShowMoreBtn)

    const cards = Array.from(document.querySelectorAll('.ProductBoxes'))

    function openCatalog(){
        ShowMoreBtn.addEventListener('click', () =>{
            cards.forEach(item => item.classList.remove('hidden'))
            ShowMoreBtn.classList.add('hidden')
        })
    }

    function response1(){ 
        if(window.innerWidth > 1064) {
            ShowMoreBtn.classList.add('hidden')

            cards.forEach((item,index) => {
                item.classList.add('hidden')
                if(index <= 19) {
                    item.classList.remove('hidden')
                } else if(index > 19){
                    ShowMoreBtn.classList.remove('hidden')
                }
                openCatalog()
            })
        }
    }
    response1()


}