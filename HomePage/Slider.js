import { SliderImages } from "../stats"
export function Slider(){
    let MainCont = document.querySelector('.MainCont')
    let SliderCont = document.createElement('div')
    SliderCont.classList.add('SliderCont')
    MainCont.appendChild(SliderCont)

    SliderCont.innerHTML = `
        <button class="LeftBtn">
            <p>
                <i class="fa-solid fa-chevron-left"></i>
            </p>
        </button>
        <div class="Slider">
            <div class="SliderLine"></div>

        </div>
        <button class="RightBtn">
            <p>
                <i class="fa-solid fa-chevron-right"></i>
            </p>
        </button>
    `
    let SliderLine = document.querySelector('.SliderLine')
    SliderImages.forEach(item => {
        let SliderImg = document.createElement('div')
        let Images = document.createElement('img')
        Images.classList.add('images')
        SliderImg.classList.add('SliderImg')
        SliderLine.appendChild(SliderImg)
        SliderImg.appendChild(Images)
        Images.src = item
    });

    let RightBtn = document.querySelector('.RightBtn')
    let LeftBtn = document.querySelector('.LeftBtn')
    let offset = 0;
    RightBtn.addEventListener('click' , function () {
        offset = offset + 800
        if(offset > 2395){
            offset = 0
        }
        SliderLine.style.left = -offset + 'px';
    })

    LeftBtn.addEventListener('click' , function () {
        offset = offset - 800
        if(offset < 0){
            offset = 1600
        }
        SliderLine.style.left = -offset + 'px';
    })
} 
