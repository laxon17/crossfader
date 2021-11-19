const sideNav = document.querySelector('.sidenav')

AOS.init()

M.Sidenav.init(sideNav, {})

$(document).ready(() =>$('.tabs').tabs())

$(document).ready(() => $('.modal').modal())

$(document).ready(() => $('.slider').slider())
        
$(document).ready(() =>$('select').formSelect())

$(document).ready(() => $('.tooltipped').tooltip())

$(document).ready(() => $('input#input_text, textarea#textarea2').characterCounter())
      

$(window).on('load', () => $('.loading-container').fadeOut(1000))

