let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let contaneir = document.querySelector('.contaneir')
let items = contaneir.querySelectorAll('.item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll(' li')
let = list = contaneir.querySelector('list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1


nextButton.onclick = () => {
    let itemOld = contaneir.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
    List.setProperty('--calculation', 1)

}


prevButton.onclick = () => {
    
    let itemOld = contaneir.querySelector('.list .item.active')
    itemOld.classList.remove('active')
    
    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')

    let dotsOld = indicator.querySelector('li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
    List.style.setProperty('--calculation', -1) 
}
