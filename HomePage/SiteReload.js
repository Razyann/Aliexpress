export function SiteReload(){
    let SiteLogo = document.querySelector('.logo_box')
    SiteLogo.onclick = () => {
        location.reload()
    }

}