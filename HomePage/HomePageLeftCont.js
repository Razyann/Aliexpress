
export function HomePageLeftCont(){
    let ProductCont = document.querySelector('.ProductCont')
    let cont = document.querySelector('.container')
    let LeftCont = document.createElement('div')
    LeftCont.classList.add('leftCont')
    cont.appendChild(LeftCont)
    let LeftContOtherContantBox = document.createElement('div')
    LeftContOtherContantBox.classList.add('LeftContOtherContantBox')
    LeftCont.appendChild(LeftContOtherContantBox)
    let sellBox = document.createElement('div')
    sellBox.classList.add('sellBox')
    let categoriesBtn = document.createElement('div')
    categoriesBtn.classList.add('categoriesBtn')
    LeftContOtherContantBox.appendChild(sellBox)
    LeftContOtherContantBox.appendChild(categoriesBtn)
    sellBox.innerHTML = `
        <p>Profit x3: up to 90% off</p>
    `
    categoriesBtn.innerHTML = `
        <p>Categories <i class="fa-solid fa-chevron-right"></i></p>
    `

// let arr = []
//     Categories.forEach(item => {
//         let categoryBoxes = document.createElement('div')
//         categoryBoxes.classList.add('categoryBoxes')
//         arr.push(categoryBoxes)
//         LeftCont.appendChild(categoryBoxes)
//         categoryBoxes.innerHTML = `
//             <p>${item}</p>
//         `
        
//     });

//         let [MobilePhones,Computers,Electronics,HomeAppliances,HomeImprovementTools, SecurityProtection, AutomobilesMotorcycles, Home, GardenOffice, Furniture, Clothing,Shoes , Accesories, LuggageBags, SportsEntrTainment, MotherKids,Toyshobbies, BeautyHelth, _18_, PetProducts, Food ] = arr

//     function CategMobilePhones(){
//         MobilePhones.onclick = () => {
//             ProductCont.innerHTML = ''
//         }
//     }
//     CategMobilePhones()
 }