navBars()

// =============================================================== PAGE MANAGEMENT ============================================================================
if((window.location.href).indexOf('index') > -1 ){
    homePage()
}

if((window.location.href).indexOf('support') > -1 ){
    contactValidation()
}

if((window.location.href).indexOf('products') > -1 ){
    productPage()
}
// ============================================================= END OF PAGE MANAGEMENT ========================================================================


navigationButton()
footerSection()

// ==================================================================== PAGE FUNCTIONS =========================================================================
function navBars() {
        
    // NAV BAR EXTENDED
    const navigationMenu = document.querySelector('.navLinks')
    const navigationLinkNames = [
        'Products', 
        'Community', 
        'Support', 
        'Author'
    ]
    const navigationLinks = [
        'products.html',
        'community.html',
        'support.html', 
        'author.html'
    ]

    for (let i = 0; i < navigationLinks.length; i++) {
        let listItem = document.createElement('li')
        let navLink = document.createElement('a')
        let navLinkName = document.createTextNode(navigationLinkNames[i])
            navLink.setAttribute('href', navigationLinks[i])
            navLink.setAttribute('class', 'black-text')
            navLink.append(navLinkName)
            listItem.append(navLink)
            navigationMenu.append(listItem)
    }
    // END OF NAVBAR EXTENDED

    // NAVBAR COLLAPSED
    const sideNavMenu = document.querySelector('.sideNavCollapsed')

    for (let i = 0; i < navigationLinks.length; i++) {
        let listItem = document.createElement('li')
        let navLink = document.createElement('a')
        let navLinkName = document.createTextNode(navigationLinkNames[i])
            navLink.setAttribute('href', navigationLinks[i])
            navLink.setAttribute('class', 'black-text')
            navLink.append(navLinkName)
            listItem.append(navLink)
            sideNavMenu.append(listItem)
    }
    // END OF NAVBAR COLLAPSED
}

function homePage() {
        
    // CAROUSEL

    const sliderContainer = document.querySelector('.slides')
    const imageSources = [
        'vinyl.jpg',
        'pioneer-xdj.jpg',
        'pioneer-ddj1000.jpg',
        'dj-mixer.jpg'
    ]
    const imageAlternateNames = [
        'Old Vinyl',
        'Pioneer XDJ-RR',
        'Pioneer DDJ-1000',
        '16 chan DJ Mixer'
    ]
    const sliderHeading = [
        'Welcome to Crossfader!',
        'Learn how to DJ!',
        'Everything you need is here!',
        'BeatGear MX-16'
    ]

    for(let i = 0; i < imageSources.length; i++) 
        {
            let sliderItem = document.createElement('li')
            let sliderImage = document.createElement('img')
            let captionHolder = document.createElement('div')
            let captionHeading = document.createElement('h1')
                captionHolder.classList.add('caption')
                if(i != 1)
                    {
                        captionHolder.classList.add('center-align')
                    }
                else 
                    {
                        captionHolder.classList.add('left-align')
                    }
                sliderImage.setAttribute('src', `assets/img/${imageSources[i]}`)
                sliderImage.setAttribute('alt', imageAlternateNames[i])
                captionHeading.innerText = sliderHeading[i]
                if(i == 0)
                    {
                        captionHolder.append(captionHeading)
                    }
                else 
                    {
                        captionHolder.append(captionHeading)
                    }
                sliderItem.append(sliderImage, captionHolder)
                sliderContainer.append(sliderItem)
        }
    // END OF CAROUSEL

    // INFO CARDS

    const productImageSources = [
        'traktor-dj-pro3.png',
        'serato-dj.png',
        'pioneer-controllers.jpg',
        'traktor-controllers.jpg',
        'dj-girl.jpg',
        'music-producer.jpg'
    ]

    const productAlternateNames = [
        'TRAKTOR DJ Pro 3 Software',
        'Serato DJ software',
        'Pioneer Controllers',
        'TRAKTOR Controllers',
        'Woman playing music',
        'Guy producing music'
    ]

    const cardTitles = [
        'TRAKTOR DJ Software',
        'Serato DJ software',
        'Pioneer Controllers',
        'TRAKTOR Controllers',
        'TRAKTOR Pro 3 LINK',
        'Techno producing with KOMPLETE'
    ]

    const cardTextContent = [
        'The new version, entitled Traktor Pro 3, was released on October 18.2018. In May 2021, a Beta release of Traktor Pro 3.5 added integration with Beatport Link. This new feature allowed DJs to make track selections from Beatport on the fly for the first time.',
        'Professional DJ software. From the unknown to the greatest, Serato DJ Pro is the most popular DJ software globally. When you’re talking about Hip-Hop, Dance, and everything in between, you’re looking at the standard.',
        'We offer you many options with Pioneer. Bestsellers are standalone DJ Players, models like CDJ-2000, CDJ-2000 NXS2, CDJ-3000, others are DJ Controllers, DDJ SB, DDJ SB2, DDJ-1000, XDJ-RR etc.',
        'TRAKTOR has kept dancefloors moving for almost 20 years. Our DJ controllers are designed to help you create powerful DJ mixes with TRAKTOR PRO 3 software. From DJ controllers designed for the club, to portable DJ controllers you can fit in a backpack.',
        'Beatport and Beatsource LINK are streaming services that make their extensive catalogues available directly in TRAKTOR PRO. With LINK, you can seamlessly explore, tag and mix new music with the music you already have in your local collection.',
        'Unique textures and otherworldly percussion with KOMPLETE. Learn how to use KOMPLETE 13 instruments and effects to generate new ideas, shape transients, and make a breakbeat techno masterpiece in our new Sketches video.'
    ]

    const fadeEffect = [
        'fade-right',
        'fade-left'
    ]

    var productsContainer = document.querySelector('#product-cards')
    var productCards = '<section class="container">'
    var cardCounter = 0;

    for(let i = 0; i < Math.ceil(productImageSources.length / 2); i++)
        {
            var effectCounter = 0;
            var cardRow = '<article class="row">'
            for(let j = 0; j < Math.floor(productImageSources.length / 3); j++)
            {
                cardRow += `
                    <div data-aos="${fadeEffect[effectCounter]}" class="col s12 m6 l6">
                        <div class="card large">
                            <div class="card-image">
                                <img alt="${productAlternateNames[cardCounter]}" src="assets/img/${productImageSources[cardCounter]}">
                                <span class="card-title">${cardTitles[cardCounter]}</span>
                            </div>
                            <div class="card-content">
                                <p class="card-textContent">
                                    ${cardTextContent[cardCounter]}
                                </p>
                            </div>
                            <div class="card-action">
                                <a class="teal-text" href="products.html">View more</a>
                            </div>
                        </div>
                    </div>
                `
                cardCounter++;
                effectCounter++;
            }
            cardRow += '</article>'
            productCards += cardRow
        }

    productCards += '</section>'
    productsContainer.innerHTML = productCards

    // END OF INFO CARDS



    // PRODUCT GALERY

    const productChooser = document.getElementById('product-chooser')
    var chooserCounter
    var productRow

    const tooltips = [
        'DJ CONTROLLERS',
        'STUDIO MONITORS',
        'FLIGHT CASES',
        'HEADPHONES',
        'MIDI KEYBOARDS',
        'ACCESSORIES'
    ]

    const productPictures = [
        'traktor-s8.jpg',
        'monitors.jpg',
        'flightcase.jpg',
        'headphones.jpg',
        'komplete-audio.jpg',
        'cables.jpg'
    ]

    const chooserAlternates = [
        'TRAKTOR S8',
        'Pioneer speakers',
        'TRAKTOR S8 Flightcase',
        'SMS BY 50 DJ Headphones',
        'Native Instruments KOMPLETE M32',
        'Native Instruments 3.5mm audio splitter'
    ]

    var finishedProduct = ''
    let productCounter = 0

    for(let i = 0; i < Math.ceil(productPictures.length / 3); i++)
        {    
            let productRow = '<div class="row" data-aos="fade-up">'
            for( let j = 0; j < Math.floor(productPictures.length / 2); j++)
                {
                    productRow += `
                        <div id="product-item" class="col s8 m4 l3 offset-s2 offset-l1">
                            <a class="tooltipped" href="products.html" data-position="left" data-tooltip="${tooltips[productCounter]}">
                                <img src="assets/img/${productPictures[productCounter]}" alt="${chooserAlternates[productCounter]}" class="responsive-img">
                            </a>
                        </div>
                    ` 
                    productCounter++
                }
            productRow += '</div>'
            finishedProduct += productRow
        }

    productChooser.innerHTML = finishedProduct

    // END OF PRODUCT GALERY
}

function productPage() {
    const productImages = [
        'traktor-s8.jpg',
        'traktor-s5.jpg',
        'pioneer-dj1000.jpg',
        'ddj1000-flightcase.jpg',
        'traktor-s4-bag.jpg',
        'flightcase.jpg',
        'behringer-monitors.jpg',
        'krk-studio-monitors.jpg',
        'monitors.jpg',
        'hdj-500.jpg',
        'beats-mixr.jpg',
        'headphones.jpg',
        'cables.jpg',
        'rca-to-banana.jpg',
        'usb-a.jpg'
    ]
    
    const productTitles = [
        'TRAKTOR S8',
        'TRAKTOR S5',
        'Pioneer DDJ-1000',
        'Magma flight case for Pioneer',
        'TRAKTOR S4 & S5 flight case',
        'TRAKTOR S8 flight case',
        'Behringer studio monitors',
        'KRK studio monitors',
        'Pioneer studio monitors',
        'Pioneer HDJ-500',
        'Technics EAH-700',
        'SMS Audio Street By 50 Cent',
        'Native Instruments Splitter',
        'RCA TO 1/4inch cables',
        'USB Cables for controller'
    ]
    
    const productDescription = [
        'FLAGSHIP ALL-IN-ONE DJ CONTROLLER',
        'LITTLE BROTHER OF THE S8 GIGANT',
        '4-CHANNEL CONTROLLER FOR REKORDBOX',
        'VARIOUS PIONEER MODELS INCLUDED',
        'CREATED ONLY FOR ALL S4 MODELS AND S5',
        'S8 FLIGHT CASE, WITHOUT A LAPTOP STAND',
        'MED-QUALITY MONITORS FOR AMATEURS',
        'PROFESSIONAL MONITORS FOR PRODUCERS',
        'HIGH-QUALITY MONITORS FOR HOME STUDIO',
        'AFFORDABLE PRICE, GREAT QUALITY',
        'EAH-700 FEATURES A LIGHTWEIGHT ON-EAR DESIGN',
        'EXCEPTIONAL SOUND QUALITY, WITH GREAT ISOLATION',
        'JACK SPLITTER FOR HEADPHONES AND LAPTOP SOUNDCARD',
        'CONVERT 1/4" TO RCA AND VICE VERSA',
        'HIGH QUALITY USB CABLES FOR BEST BANDWITH'
    ]
    
    const classNames = [
        'controllers',
        'flightcases',
        'monitors',
        'headphones',
        'cables'
    ]
    
    const productPrices = [
        990.00,
        499.99,
        1099.99,
        120.00,
        109.99,
        159.99,
        229.99,
        300.00,
        289.99,
        75.00,
        105.00,
        100.00,
        13.99,
        22.00,
        9.99
    ]
    
    const shopList = document.getElementById('product-shop')
    var productLists = ''
    var productRow = ''
    var itemCounter = 0
    var classCounter
    
    
    for (let i = 0; i < Math.ceil(productTitles.length / 3); i++) 
        {
            productRow = '<div class="row">'
            classCounter = i
            for (let j = 0; j < Math.floor(productTitles.length / 4); j++) {
                
                productRow += `
                    <div class="col s12 m6 l4 ${classNames[classCounter]} filteringItem">
                        <div class="card large">
                            <div class="card-image resize">
                                <img class="responsive-img item-image" src="assets/img/${productImages[itemCounter]}" alt="${productTitles[itemCounter]}" />
                            </div>
                            <div class=" card-content">
                                <span class="card-title item-title teal-text">${productTitles[itemCounter]}</span>
                                <p>${productDescription[itemCounter]}</p>
                            </div>
                            <div class="card-action">
                                <p id="price" class="center-align">$${productPrices[itemCounter]}</p>
                                <a class="teal-text" id="addToCartBtn">Add to cart</a>
                            </div>
                        </div>
                    </div>
                `
                itemCounter++
            }
            productRow += '</div>'
            productLists += productRow  
        }
    
    shopList.innerHTML = productLists
    
    // Filter through items
    
    var cartContainer = document.getElementById('cartContainer')
    const filterBtns = document.querySelectorAll('[data-filter]')
    const storeCaption = document.getElementsByClassName('store-captions')[0]
    
    const targetNames = [
        'all',
        'controllers',
        'flightcases',
        'headphones',
        'monitors',
        'cables'
    ]
        
    for (let i = 0; i < targetNames.length; i++) 
        {
            filterBtns[i].addEventListener('click', () => {
                filterSelection(targetNames[i])
            })
        }
    
    const filterSelection = (filterName) => {
        let filterItem = document.getElementsByClassName('filteringItem')
        if (filterName == 'all') filterName = ''
        for (let i = 0; i < filterItem.length; i++) {
            filterItem[i].classList.add('hide')
            if (filterItem[i].className.indexOf(filterName) > -1) filterItem[i].classList.remove('hide')
        }
    }
    
    if(document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }
    
    function ready() {
        const addToCartBtns = document.querySelectorAll('#addToCartBtn')
        for(let i = 0; i < addToCartBtns.length; i++) {
            let addToCartBtn = addToCartBtns[i]
                addToCartBtn.addEventListener('click', () => {
                    M.toast({html: 'Added to cart!'})
                })
        }
    }
}

function contactValidation() {
    const contactForm = document.querySelector('#contact-form')
    const nameField = document.querySelector('#full_name')
    const mailField = document.querySelector('#mail')
    const textField = document.querySelector('#textarea2')
    const nameError = document.querySelector('#nameError')
    const mailError = document.querySelector('#mailError')
    const textError = document.querySelector('#textError')
    const submitBtn = document.querySelector('#contactSubmit')
    const fields = document.querySelectorAll('.fieldInput')
    const inputFields = Array.from(fields)

    // CHECK FUNCTIONS
    const checkBtn = () => {
        if(checkTextField() && checkName() && checkMail()) {
            if(submitBtn.classList.contains('red')) {
                submitBtn.classList.remove('red')
                submitBtn.classList.add('teal')
            } else {
                submitBtn.classList.add('teal')
            }
            return 1 // Button is valid, and can submit the form
        } else {
            if(submitBtn.classList.contains('teal')) {
                submitBtn.classList.remove('teal')
                submitBtn.classList.add('red')
            } else {
                submitBtn.classList.add('red')
            }
            return 0 // Button is not allowed to submit if any field isn't filled
        }
    }

    const checkTextField = () => {
        if(textField.value.length > 450) {
            if(textField.classList.contains('pass')) {
                textField.classList.remove('pass')
                textField.classList.add('fail')
            } else {
                textField.classList.add('fail')
            }
            textError.style.color = 'red'
            textError.innerText = `Text can't be longer than 450 characters`
            return 0 // Returns 0 if value is over 450
        } else if(textField.value == '' || textField.value == null || textField.value.length == 0) {
            if(textField.classList.contains('pass')) {
                textField.classList.remove('pass')
                textField.classList.add('fail')
            } else {
                textField.classList.add('fail')
            }
            textError.style.color = 'red'
            textError.innerHTML = `Don't leave this empty!`
            return 0
        } else {
            if(textField.classList.contains('fail')) {
                textField.classList.remove('fail')
                textField.classList.add('pass')
            } else {
                textField.classList.add('pass')
            }
            textError.style.color = 'teal'
            textError.innerHTML = `&check;`
            return 1
        }
    }

    const checkName = () => {
        let nameField = document.querySelector('#full_name') 
        let nameExpression = /^[A-ZČĆŽĐŠ][a-zćčžđš]{1,14}\s+[A-ZČĆŽŠĐ]?[a-zćčžđš]{1,20}$/
            nameFieldValue = nameField.value
            if(nameExpression.test(nameFieldValue)) {
                if(nameField.classList.contains('fail')) {
                    nameField.classList.remove('fail')
                    nameField.classList.add('pass')
                } else {
                    nameField.classList.add('pass')
                }
                nameError.style.color = 'teal'
                nameError.innerHTML = '&check;'
                return 1 // Name not recognized, return 0
            } else {
                if(nameField.classList.contains('pass')) {
                    nameField.classList.remove('pass')
                    nameField.classList.add('fail')
                } else {
                    nameField.classList.add('fail')
                }
                nameError.style.color = 'red'
                nameError.innerText = `Your name is not recognized, check placeholder!`
                return 0 // Name is valid, return 1
            }

            
    }

    const checkMail = () => {
        let mailField = document.querySelector('#mail')
        let mailExpression = /^[a-zA-Z0-9]([a-z]|[0-9])+\.?-?_?([a-z]|[0-9])*\.?([a-z]|[0-9])*@[a-z]{3,}\.[a-z]{2,3}?$/g
            mailFieldValue = mailField.value 
            if(mailExpression.test(String(mailFieldValue))) {
                if(mailField.classList.contains('fail')) {
                    mailField.classList.remove('fail')
                    mailField.classList.add('pass')
                } else {
                    mailField.classList.add('pass')
                }
                mailError.style.color = 'teal'
                mailError.innerHTML = `&check;`
                return 1 // Mail is valid, return 1
            } else {
                if(mailField.classList.contains('pass')) {
                    mailField.classList.remove('pass')
                    mailField.classList.add('fail')
                } else {
                    mailField.classList.add('fail')
                }
                mailError.style.color = 'red'
                mailError.innerHTML = `Format of mail not as expected!`
                return 0 // Mail doesn't contain @, return 0
            }   
    }
    // END OF CHECK FUNCTIONS

    // EVENT LISTENERS
    textField.addEventListener('keyup', checkTextField)

    mailField.addEventListener('keyup', checkMail)

    nameField.addEventListener('keyup', checkName)

    contactForm.addEventListener('submit' , (event) => {
        if(checkBtn()) {
            alert('Thank you for contacting us! The answer will be sent to your mail. Your Crossfader team!')
            event.preventDefault()
        } else {
            alert('Looks like you forgot something to fill!')
            checkName()
            checkMail()
            checkTextField()
            event.preventDefault()
        }
    })
    // END OF EVENT LISTENERS


    // loop through input fields, see if all returned 1, then make submitBtn valid, else, Btn is disabled
    inputFields.forEach(inputField => {
        inputField.addEventListener('keyup', checkBtn)
    })
}

function footerSection() {
    // STORE INFO LINKS
    const storeInfo = [
        'SHOP INFO &#38; FAQ',
        'MY ACCOUNT &#38; ORDER HISTORY',
        'FIND A STORE',
        'CROSS ACESS'
    ]
    const storeInfoList = document.querySelector('.store-info')
    var storeInfoItem = ''
    var infoStorage = ''

    for (let i = 0; i < storeInfo.length; i++) {
        storeInfoItem = `
            <li>
                <a class="grey-text text-lighten-3">${storeInfo[i]}</a>
            </li>
        `
        infoStorage += storeInfoItem
    }
    storeInfoList.innerHTML = infoStorage
    // END OF STORE INFO LINKS

    // COMPANY INFO LINKS
    const companyInfo = [
        'BLOG',
        'INFO',
        'CONTACT US',
        'CAREERS',
        'EDUCATION'
    ]
    const companyInfoList = document.querySelector('.company-info')
    var companyInfoItem = ''
    var companyInfoStorage = ''

    for (let i = 0; i < companyInfo.length; i++) {
        companyInfoItem = `
            <li>
                <a class="grey-text text-lighten-3">${companyInfo[i]}</a>
            </li>
        `
        companyInfoStorage += companyInfoItem
    }
    companyInfoList.innerHTML = companyInfoStorage
    // END OF COMPANY INFO LINKS
}

function navigationButton() {
    // BACK TO TOP BUTTON
    const backToTopButton = document.getElementById('toTopBtn')
    const scrollBack = () => window.scrollTo(0, 0)

    backToTopButton.addEventListener('click', scrollBack)

    const showBtn = () => {
        if(window.pageYOffset > 300) {
            if(backToTopButton.classList.contains('hide')) {
                backToTopButton.classList.remove('hide')
            }
        } else {
            if(!backToTopButton.classList.contains('hide')) {
                backToTopButton.classList.add('hide')
            }
        }
    }

    window.addEventListener('scroll', showBtn)
    // END OF BACK TO TOP BUTTON
}
// ================================================================ END OF PAGE FUNCTIONS ======================================================================

// ================================================================ JQUERY & MATERIALIZE TRIGGERS ==============================================================
AOS.init()

const sideNav = document.querySelector('.sidenav')

M.Sidenav.init(sideNav, {})

$(document).ready(() => $('.tabs').tabs())

$(document).ready(() => $('.modal').modal())

$(document).ready(() => $('.slider').slider())
        
$(document).ready(() =>$('select').formSelect())

$(document).ready(() => $('.tooltipped').tooltip())

$(document).ready(() => $('input#input_text, textarea#textarea2').characterCounter())

$(window).on('load', () => $('.loading-container').fadeOut(1000))
// ============================================================= END OF JQUERY & MATERIALIZE TRIGGERS ==========================================================