export function Cart(){
    function CartList(){
        let headerItemsCont = document.querySelector('.header_items_cont')
        let header = document.querySelector('header')
        let cartList = document.createElement('div')
        cartList.classList.add('CartList')
        header.appendChild(cartList)
        cartList.innerHTML = `
            <div class='closeCont'>
                <div id='CloseIconBox'>
                    <img src="../src/images/close.png" class="CloseBtn">
                </div>
            </div>
            <div class='CartProductsCont'>
                
            </div>
            <div class='CartButtonBtnsCont'>
                <div class="TotalPriceBox">
                    <p>
                        Total Price
                    </p>
                    <span class='TotalPrice'>
                        0
                    </span>
                </div>
                <div class="BuyBtnBox">
                    <button class="BuyBtn">Buy</button>
                </div>
            </div>
        `
        
        let items = Array.from(document.querySelectorAll('.items'))
        let [item1,item2,item3] = items
        let closeBtn = document.querySelector('#CloseIconBox')
        item2.onclick = () => {
            cartList.classList.add('cartListActive')
        }
        
            closeBtn.onclick = () => {
                cartList.classList.remove('cartListActive')
            }
    }
    CartList()
    let addToCartBtn = document.querySelectorAll('.addToCartBtn')
    let productBoxes = Array.from(document.querySelectorAll('.ProductBoxes'))
    
    let CartProductsCont  = document.querySelector('.CartProductsCont')

    
}