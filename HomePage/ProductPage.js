import { products } from "../stats"
import { ProductSorting } from "./ProductSorting"
import { ShuffleProducts } from "./ShuffleProducts"

export function ProductPage() {
    let MainCont = document.querySelector('.MainCont')
    let ProductCont = document.createElement('div')
    ProductCont.classList.add('ProductCont')
    MainCont.appendChild(ProductCont)
    ProductSorting()
    ShuffleProducts()

    products.forEach(item => {
        let ProductBoxes = document.createElement('div')
        ProductBoxes.classList.add('ProductBoxes')
        ProductCont.appendChild(ProductBoxes)
        ProductBoxes.innerHTML = `
            <div class="ProductImgBox">
                <img src="${item.img}">
            </div>
            <div class="ProductInfoBox">
                <div class="PriceBox">
                    <div class="Price">${item.price}</div>
                    <div class="Discount">${item.discount}</div>
                </div>
                    <div class="TitleBox">
                        <p>${item.title}</p>
                    </div>
                    <div class="ratingBox">
                        <div class="rating">
                            <img src="../src/images/star.png">
                            <p>${item.stars}</p>
                        </div>
                        <div class="boughtBox">
                            <span>Bought</span>
                            <p>${item.bought}</p>                        
                        </div>
                        </div>
                        <div class="buttonsBox">
                            <div class="cartBtnBox">
                                <button class="addToCartBtn">Add To Cart</button>
                            </div>
                            <div class="likeBox">
                                <p class="LikeBtn"><i class="fa-regular fa-heart"></i></p>
                            </div>
                        </div>
            </div>
        `
        let addToCartBtn = document.querySelectorAll('.addToCartBtn')
        let cartArr = []
        let CartProductsCont  = document.querySelector('.CartProductsCont')


        addToCartBtn.forEach(element => {
            element.onclick = () => {
                item.cart = true
                cartArr.push(item)
            }
        })

        cartArr

    });

}
