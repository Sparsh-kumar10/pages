const phone = document.querySelector('.phone')
const passwordID = document.querySelector('.passwordC')
const submitButton = document.querySelector('#btnID')
const loginform = document.querySelector('.login-form')

// close button 
const closeBtn = document.querySelector('.icon-close')
console.log(closeBtn)
// login form template
const wrapper = document.querySelector('.wrapper')
//login pop button
const btnloginpop = document.querySelector('.btnlogin-popup') 

// login page input disability
loginform.addEventListener('input', () => {
    if (phone.value.length === 10 && 
        passwordID.value.length>=8) {
        submitButton.removeAttribute('disabled')
    }
    else {
        submitButton.setAttribute('disabled',disabled)
    }
})

// pop login form
btnloginpop.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
})

// close login form 
closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
})
