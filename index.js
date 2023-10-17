import { Header } from "./Header/Header"
import { HomePageLeftCont } from "./HomePage/HomePageLeftCont"
import { HomePageMainCont } from "./HomePage/HomePageMainCont"
import { Slider } from "./HomePage/slider"
import { ProductPage } from "./HomePage/ProductPage"
import { HeaderFixed } from "./Header/HeaderFixed"
import { ShowMore } from "./HomePage/ShowMore"
import { Footer } from "./Footer/Footer"
import { ProductsHover } from "./HomePage/ProductsHover"
import { ProductCategories } from "./HomePage/ProductCategories"
import { SiteReload } from "./HomePage/SiteReload"
import { Cart } from "./Cart/Cart"
import { ShuffleProducts } from "./HomePage/ShuffleProducts"
function App(){
    Header()
    HomePageLeftCont()
    HeaderFixed()
    HomePageMainCont()
    Slider()
    ProductPage()
    ShowMore()
    ProductsHover()
    ProductCategories()
    SiteReload()
    Cart()
    ShuffleProducts()
    Footer()
}
App()