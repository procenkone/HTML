let showForm = document.querySelector('.logo_number__form')//модальне вікно зворотнього звязку
let closeForm = document.querySelector('.close_form__call')//кнопка закриття модального вікна зворотнього звязку
let callForm = document.querySelector('.click_form__call')//кнопка відкриття одального вікна зворотнього звязку
let managerCallYou = document.querySelector('.manager_call__you')//вікно статусу зворотнього звязку
let showCiti = document.querySelector('.chengeCiti')//модальне вікно вибору міста
let formCiti = document.querySelector('.header_nav__left___cities')// батьківський елемент модального вікна вибору міста
let closeFormCiti = document.querySelector('.closeFormCiti')//кнопка закриття модального вікна вибору міста
showCiti.addEventListener('click', () => {
    formCiti.classList.remove('d-none')
})//відкриття модального вікна вибору міста
closeFormCiti.addEventListener('click', () => {
    formCiti.classList.add('d-none')
})//закриття модального вікна вибору міста
callForm.addEventListener('click', () => {
    showForm.classList.add('d-flex')
})//відкриття модального вікна  зворотнього звязку
closeForm.addEventListener('click', () => {
    showForm.classList.remove('d-flex')
    managerCallYou.classList.remove('d-none')
    setTimeout("managerCallYou.classList.add('d-none')", 3000);
})//закриття модального вікна зворотнього звязку

const cardData = [
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardImg1.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    },
    {
        "cardImg": "./image/cardItem2.png",
        "starImg": "./image/Star.png",
        "starSpan": "4.5",
        "starP": "10 отзывов",
        "cards_itemP": "Intermediate accumelator sleeve",
        "costP": "ЦЕНА",
        "costSpan": "по запросу",
        "button_blockImg": "./image/cartWhiteIcon.png",
        "button_blockP": "В корзину",
        "btnBottomLikeBlue": "./image/likeBlue.png",
        "btnBottomReytingIcon": "./image/reytingIcon.png"
    }
]//отримуєм данні з товарами
const newsData = [
    {
        "dateP": "3 ноября",
        "news_item__oneA": "Изменения на сайте",
        "news_item__one___description": "очередную порцию изменений, которые, как нам кажется, должны улучшить функциональность сайта и сделать его более удобным для пользователей. Реакция посетителей не заставила себя долго ждать..."
    },
    {
        "dateP": "2 ноября",
        "news_item__oneA": "Вышла новая версия для мобильных приложений",
        "news_item__one___description": "Что нового в 2.0: — добавлена история поиска; — добавлена синхронизация с сервером; — испрвление ошибок."
    },
    {
        "dateP": "1 ноября",
        "news_item__oneA": "Очередная порция обновлений для мобильных приложений",
        "news_item__one___description": "Что нового добавлено: — поддержка пуш-уведомлений; — разделы для покупателей; — просмотр покупателя в заказах; — возможность поиска; — исправление ошибок."
    },
    {
        "dateP": "31 октября",
        "news_item__oneA": "Интерфейс заказов для покупателей стал более функциональным",
        "news_item__one___description": "Он позволяет выводить все формируемые системой уведомления(e-mail, смс, web) в едином окне с системой удобной фильтрации поиска."
    }
]//отримуєм данні з новинами


let cardsContainer = document.querySelector('.cards')//батьківський тег з товарами
let news = document.querySelector('.news')//батьківський тег з новинами

function showCardItems() {
    cardData.map(item => {
        let cardsItem = document.createElement('div')
        cardsItem.classList.add('cards_item')
        cardsItem.classList.add('d-flex')
        cardsItem.classList.add('flex-column')
        cardsItem.classList.add('pt-4')
        cardsItem.classList.add('pb-4')
        cardsItem.innerHTML = `
        <img src="${item.cardImg}" alt="${item.cardImg}">
        <div class="star d-flex c-g-10">
            <img src="${item.starImg}" alt="${item.starImg}">
            <span>${item.starSpan}</span>
            <p>${item.starP}</p>
        </div>
        <p>${item.cards_itemP}</p>
        <div class="cost d-flex c-g-10">
            <p>${item.costP}</p>
            <span>${item.costSpan}</span>
        </div>
        <div class=" btn-bottom d-flex c-g-30 align-items-center">
            <div class="button_block d-flex align-items-center justify-content-center">
                <img  src="${item.button_blockImg}" alt="${item.button_blockImg}">
                <p class="mb-0 pl-1">${item.button_blockP}</p>
            </div>
            <img class="likeBlue" src="${item.btnBottomLikeBlue}" alt="${item.btnBottomLikeBlue}">
            <img class="reytingIcon" src="${item.btnBottomReytingIcon}" alt="${item.btnBottomReytingIcon}">
        </div>
    `
        cardsContainer.appendChild(cardsItem)
    })

}//виводим товари
function showNewsItem() {
    newsData.map(item => {
        let newsItem = document.createElement('div')
        newsItem.classList.add('news_item__one')
        newsItem.classList.add('d-flex')
        newsItem.classList.add('flex-column')
        newsItem.innerHTML = `
         <div class="date">
            <p>${item.dateP}</p>
        </div>
        <a href="#">${item.news_item__oneA}</a>
        <p class="news_item__one___description">
        ${item.news_item__one___description}
        </p>
        `
        news.appendChild(newsItem)
    })
}//виводим новини

let card = document.querySelector('.cards')// батько блоку з карточками товару
document.querySelector('.show_card').onclick = showCardsMore//кнопка показати більше
let btnUp = document.querySelector('.up')//кнопка вверх
let btnNone = document.querySelector('.btn-none')// також кнопка показати більше але вона для зміни класу, бо чомусь не можу повісити дію на попередню

showCardItems()// запускаєм фунцію відображення товарів
showNewsItem()// запускаєм фунцію відображення новин
let height = 974//початкова висота блоку для відображення карточок товару

function showCardsMore() {
    card.style.height = height + 484 + 'px'
    height = height + 484
    if (card.style.height > 1000 + 'px') {
        btnUp.classList.remove('d-none')
        btnUp.classList.add('d-block')

    }
    if (card.style.height > 2850 + 'px') {
        btnNone.classList.remove('d-block')
        btnNone.classList.add('d-none')

    }
}//функція показати більше товарів

btnUp.addEventListener('click', () => {
    scroll(0, 0)
    card.style.height = 974 + 'px'
    btnNone.classList.remove('d-none')
    btnNone.classList.add('d-block')
    height = 974
})//функція догори

const sliderBottom = document.querySelector('.slider_bottom')// бальківський слайдера
let widhtSlider = 0//початкове положення слайдера
let sliderMoveRight = document.querySelector('.right')//кнопка право
let sliderMoveLeft = document.querySelector('.left')// кнопка ліво
sliderMoveRight.addEventListener('click', () => {
    widhtSlider = widhtSlider + 500
    if (widhtSlider > 1500) {
        widhtSlider = 0
    }
    sliderBottom.style.left = -widhtSlider + 'px'

})// функція прокрутки вправо
sliderMoveLeft.addEventListener('click', () => {
    widhtSlider = widhtSlider - 500
    if (widhtSlider < 0) {
        widhtSlider = 1500
    }
    sliderBottom.style.left = -widhtSlider + 'px'

})// функція прокрутки вліво


let sliderTop = document.querySelector('.slider_top__moov')//батьківський слайдер
const btnSliderLeft = document.querySelector('.arrow_left')//кнопка наліво
const btnSliderRight = document.querySelector('.arrow_right')//кнопка направо
let widhtSliderTop = 0//початкове положення верхнього слайдеру
btnSliderLeft.addEventListener('click', ()=>{
    widhtSliderTop = widhtSliderTop - 1100
    if(widhtSliderTop < 0){
        widhtSliderTop = 3300
    }
    sliderTop.style.left = -widhtSliderTop+'px'

})//функція прокрутки вліво
btnSliderRight.addEventListener('click', ()=>{
    widhtSliderTop = widhtSliderTop + 1100
    if(widhtSliderTop > 3300){
        widhtSliderTop = 0
    }
    sliderTop.style.left = -widhtSliderTop+'px'
})//функція прокрутки вправо