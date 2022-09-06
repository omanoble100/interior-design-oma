

const bar = document.querySelector('#bar')
const menu = document.querySelector('.menu')
const logo = document.querySelector('#logo')
const heading = document.querySelector('.heading')
const close = document.querySelector('.close')

bar.onclick = () => {
    menu.classList.add("menu-mini")
    menu.classList.remove("menu")
    logo.style.display = 'none'
    bar.style.display = 'none'
    heading.style.margin = '0px'

}

close.onclick = () => {
        bar.style.display = 'flex'
        logo.style.display = 'flex'
        heading.style.margin = '15px'
        menu.classList.remove("menu-mini")
        menu.classList.add("menu")
}