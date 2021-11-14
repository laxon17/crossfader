const sideNav = document.querySelector('.sidenav')

M.Sidenav.init(sideNav, {})

$(document).ready(() => $('.slider').slider())

$(document).ready(() => $('.fixed-action-btn').floatingActionButton())
        
$(document).ready(() => $('.tooltipped').tooltip())

AOS.init()