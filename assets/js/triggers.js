const sideNav = document.querySelector('.sidenav')

M.Sidenav.init(sideNav, {})

$(document).ready(() => $('.slider').slider())
        
$(document).ready(() => $('.tooltipped').tooltip())

$(window).on('load', () => $('.loading-container').fadeOut(1000))

AOS.init()