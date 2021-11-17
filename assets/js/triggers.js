const sideNav = document.querySelector('.sidenav')

AOS.init()

M.Sidenav.init(sideNav, {})

$(document).ready(() =>$('.tabs').tabs())

$(document).ready(() => $('.slider').slider())
        
$(document).ready(() =>$('select').formSelect())

$(document).ready(() => $('.tooltipped').tooltip())

$(window).on('load', () => $('.loading-container').fadeOut(1000))

