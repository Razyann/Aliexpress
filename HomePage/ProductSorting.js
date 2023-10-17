export function ProductSorting(){
    let ProductCont = document.querySelector('.ProductCont')
    let ProductsSorting = document.createElement('div')
    ProductsSorting.classList.add('ProductsSorting')
    ProductCont.appendChild(ProductsSorting)
    ProductsSorting.innerHTML = `
            <div class="TopProductsBox">
                <p>
                    Top-products
                </p>
            </div>
            <div class="PickedForYouBox">
                <p>
                    Picked for you
                </p>
            </div>
    `
}