let counter = 0
let oneCard = ''
let twoCard = ''

const wrapper = document.querySelector('.game')
const input = document.querySelector('.input')
const button = document.querySelector('.btn')
input.placeholder = 'количество карточек'
let arr = []

let gameOverCount = 0

// функция по созданию карточек
function createCard() {
    for (let i = 1; i <= input.value; i++) {
       const cards = document.createElement('div')
        cards.classList.add('element')
        wrapper.append(cards)
    } // цикл
    const cards = document.querySelectorAll('.element')
    cards.forEach((item, i) => {
        item.addEventListener('click', () => {

            item.textContent = arr[i]
            item.classList.add('active')
            if (counter == 0) {
                oneCard = item.textContent
                counter++
            } else {
                twoCard = item.textContent
                counter = 0
                if (oneCard === twoCard) {  
                    const getCheckCardClasess = document.querySelectorAll('.element.active')
                    getCheckCardClasess[0].classList.remove('active')
                    getCheckCardClasess[0].classList.add('winner')
                    getCheckCardClasess[1].classList.remove('active')
                    getCheckCardClasess[1].classList.add('winner')
                    getCheckCardClasess.forEach(key => {
                        if (key.classList.contains('winner')){
                            gameOverCount++
                            if (gameOverCount == cards.length){
                                setTimeout(gameOver,900)  
                            }
                        }
                    })
                } else {
                    const getCheckCardClasess = document.querySelectorAll('.element.active')
                    getCheckCardClasess[0].classList.add('falled')
                    getCheckCardClasess[1].classList.add('falled')
                    
                    setTimeout(() => {
                        getCheckCardClasess[0].classList.remove('falled')
                        getCheckCardClasess[0].classList.remove('active')
                        getCheckCardClasess[1].classList.remove('falled')
                        getCheckCardClasess[1].classList.remove('active')
                        getCheckCardClasess[0].textContent = ''
                        getCheckCardClasess[1].textContent = ''
                    }, 500)
                }
            }
        })
   
    }) // перебор карточек
 
}// функция по созданию карточек

button.addEventListener('click', (e) => {
    wrapper.innerHTML = ''
    arr = []
    e.preventDefault()
    for (let i = 1; i <= (input.value); i++) {
        if (arr.length >= input.value) {
            continue
        } else {
            arr.push(i)
            arr.push(i)
            arr = arr.sort(() => Math.random() - 0.5);
        }
    } 
    
    if (input.value % 2 == 1){
        alert('введите четное количество карточек')
    }else {
        createCard()
    }
    input.value = ''
})
function gameOver(){
    let conf = confirm('Вы победили) начать игру заново?')
    if (conf == true){
        location.reload()
    }
}