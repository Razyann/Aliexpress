import { Categories } from "../stats"
import { products } from "../stats";
import { ShowMore } from "./ShowMore";
import { ProductsHover } from "./ProductsHover";
import { ProductSorting } from "./ProductSorting";

export function ProductCategories(){
    let LeftCont = document.querySelector('.leftCont')
    let ProductCont = document.querySelector('.ProductCont')
    let arr = []
    Categories.forEach(item => {
        let categoryBoxes = document.createElement('div')
        categoryBoxes.classList.add('categoryBoxes')
        arr.push(categoryBoxes)
        LeftCont.appendChild(categoryBoxes)
        categoryBoxes.innerHTML = `
            <p>${item}</p>
        `  
    });
        let [MobilePhones,Computers,Electronics,HomeAppliances,HomeImprovementTools, SecurityProtection, AutomobilesMotorcycles, Home, GardenOffice, Furniture, Clothing,Shoes , Accesories, LuggageBags, SportsEntrTainment, MotherKids,Toyshobbies, BeautyHelth, _18_, PetProducts, Food ] = arr
    function CategMobilePhones(){
        MobilePhones.onclick = () => {
            ProductCont.innerHTML = ''
            let Mobilephones = products.filter(item => item.type == 'phones')
            Mobilephones.forEach(item => {
              let ProductBoxes = document.createElement('div')
                ProductBoxes.classList.add('ProductBoxes')
                ProductCont.appendChild(ProductBoxes)
                ProductSorting()
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
            })
            ShowMore()
            ProductsHover()
        }
    }
    CategMobilePhones()

    function CategComputers(){
        Computers.onclick = () => {
            ProductCont.innerHTML = ''
            let computers = products.filter(item => item.type == 'computers')
                computers.forEach(item => {
                let ProductBoxes = document.createElement('div')
                ProductBoxes.classList.add('ProductBoxes')
                ProductCont.appendChild(ProductBoxes)
                ProductSorting()
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
            })
            ShowMore()
            ProductsHover()
        }
    }
    CategComputers()

    function CategElectronics(){
        Electronics.onclick = () => {
            ProductCont.innerHTML = ''
            let electronics = products.filter(item => item.type == 'electronic')
                electronics.forEach(item => {
                let ProductBoxes = document.createElement('div')
                ProductBoxes.classList.add('ProductBoxes')
                ProductCont.appendChild(ProductBoxes)
                ProductSorting()
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
            })
            ShowMore()
            ProductsHover()
        }
    }
    CategElectronics()

    function CategHomeAppliances(){
        HomeAppliances.onclick = () => {
            ProductCont.innerHTML = ''
            let homeAppliances = products.filter(item => item.type == 'Home Appliances')
                homeAppliances.forEach(item => {
                let ProductBoxes = document.createElement('div')
                ProductBoxes.classList.add('ProductBoxes')
                ProductCont.appendChild(ProductBoxes)
                ProductSorting()
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
            })
            ShowMore()
            ProductsHover()
        }
    }
    CategHomeAppliances()

}
