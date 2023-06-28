// search bar
let searchBtn = document.querySelector('.searchBtn')
let closeBtn = document.querySelector('.closeBtn')
let searchBox = document.querySelector('.searchBox')

// toggle menu
let header = document.querySelector('header')
let navigation = document.querySelector('.navigation')
let menuToggle = document.querySelector('.menuToggle')

// for search icon
searchBtn.addEventListener('click', () => {
    searchBox.classList.add('activeSearchBar')
    closeBtn.classList.add("activeCloseBtn")
    menuToggle.classList.add('hide')
    header.classList.remove('open')
    searchBtn.classList.add('changeSearchbtncolor')
})
closeBtn.addEventListener('click', () => {
    searchBox.classList.remove('activeSearchBar')
    closeBtn.classList.remove("activeCloseBtn")
    menuToggle.classList.remove('hide')
    searchBtn.classList.remove('changeSearchbtncolor')
})

// menu bar

menuToggle.addEventListener('click', () => {
    header.classList.toggle('open')
    searchBox.classList.remove('activeSearchBar')
    closeBtn.classList.remove("activeCloseBtn")
})