let burger = document.querySelector(".header__burger")
let burgerMenu = document.querySelector(".header__burger_list")

burger.addEventListener("click", function(){
    burger.classList.toggle("header__burger_active")
    burgerMenu.classList.toggle("header__burger_list_active")
    document.querySelector("body").classList.toggle("lock")
})


window.addEventListener("scroll", function(){
    if (scrollY >= 50) {
        document.querySelector(".header").classList.add("header__active")
        document.querySelector(".header__burger_list").classList.add("header__burger_list_left")
    } else {
        document.querySelector(".header").classList.remove("header__active")
        document.querySelector(".header__burger_list").classList.remove("header__burger_list_left")
    }
})

let logo = document.querySelector(".header__logo")

logo.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})