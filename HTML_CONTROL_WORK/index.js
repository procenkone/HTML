let showForm = document.querySelector('.logo_number__form')
let closeForm=document.querySelector('.close_form__call')
let callForm = document.querySelector('.click_form__call')
let managerCallYou = document.querySelector('.manager_call__you')
let showCiti = document.querySelector('.chengeCiti')
let formCiti = document.querySelector('.header_nav__left___cities')
let closeFormCiti = document.querySelector('.closeFormCiti')
showCiti.addEventListener('click',()=>{
    formCiti.classList.remove('d-none')
})
closeFormCiti.addEventListener('click', ()=>{
    formCiti.classList.add('d-none')
})
callForm.addEventListener('click', () => {
        showForm.classList.add('d-flex')
    }
)
closeForm.addEventListener('click', ()=>{
    showForm.classList.remove('d-flex')
    managerCallYou.classList.remove('d-none')
    setTimeout("managerCallYou.classList.add('d-none')", 3000);
})