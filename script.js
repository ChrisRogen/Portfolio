let menu = document.quaryselector("Menu-icon")
let navbar = document.querySelector(".navbar")
let section = document.querySelectorAll("saction")
let navlink = document.querySelectorAll("header navbar")


window.onscrol= () => {
       Selections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsettop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top ,offset+height){
            navlink.forEach(link => {
                limk.classList.remove('active')
                document.quaryselector('header nav a [herf = + id]').classlist.add('active')
            })
        }
       })
}