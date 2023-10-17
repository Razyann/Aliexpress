import { logoImg } from "../stats"
import { headerItems } from "../stats"

export function Header(){
    let header = document.querySelector('header')
    header.innerHTML = `
        <div class="logo_box">
            <img src="${logoImg}">
        </div>
        <div class="header_items_cont">
            <div class='quantityBox'>
                <span class='quantity'>0</span>
            </div>
        </div>
    `
    let headerItemsCont = document.querySelector('.header_items_cont')
    headerItems.forEach(item => {
        let items = document.createElement('div')
        items.classList.add('items')
        headerItemsCont.appendChild(items)
        items.innerHTML = `
        <img src="${item.img}">
        <p>${item.title}</p>
        `
    });
}