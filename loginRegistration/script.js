const wrapper = document.querySelector('.wrapper');
const loginlink  = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const closeWrapper = document.querySelector('.icon-close');

// LOGIN Page
const emailID = document.getElementById('emailID')
const passwordID = document.querySelector('.passwordC')
const submitButton = document.querySelector('#btnID')
const loginform = document.querySelector('.login-form')

// registration form

const registrationForm = document.querySelector('.registration-form')
const username = document.querySelector('.username')
const emailPhone = document.querySelector('.emailPhone')
const password1 = document.querySelector('.password1')
const registerButton = document.querySelector('#register')

// search bar
let searchBtn = document.querySelector('.searchBtn')
let closeBtn = document.querySelector('.closeBtn')
let searchBox = document.querySelector('.searchBox')
// menu bar
let header = document.querySelector('header')
let navigation = document.querySelector('.navigation')
let menuToggle = document.querySelector('.menuToggle')


// click events on login and registration form 
console.log(closeWrapper)
registerlink.addEventListener('click', () => {
    wrapper.classList.add('active')
});
loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active')
});
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
});
closeWrapper.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
})


// login page
loginform.addEventListener('input', () => {
    if (emailID.value.length > 0 && 
        passwordID.value.length>=8) {
        submitButton.removeAttribute('disabled')
    }
    else {
        submitButton.setAttribute('disabled',disabled)
    }
})
// registration form
registrationForm.addEventListener('input', () => {
    if (username.value.length > 3 && 
        password1.value.length >= 8 &&
        emailPhone.value.length>0) {
        registerButton.removeAttribute('disabled')
    }
    else {
        registerButton.setAttribute('disabled',disabled)
    }
})


// add class for search btn to show the search bar

searchBtn.addEventListener('click', () => {
    searchBox.classList.add('activeSearchBar')
    closeBtn.classList.add("activeCloseBtn")
    menuToggle.classList.add('hide')
    header.classList.remove('open')
    searchBtn.classList.add('searchBtnColor')
})
closeBtn.addEventListener('click', () => {
    searchBox.classList.remove('activeSearchBar')
    closeBtn.classList.remove("activeCloseBtn")
    menuToggle.classList.remove('hide')
    searchBtn.classList.remove('searchBtnColor')
})

// menu bar

menuToggle.addEventListener('click', () => {
    header.classList.toggle('open')
    searchBox.classList.remove('activeSearchBar')
    closeBtn.classList.remove("activeCloseBtn")
})