// =============================================================== PAGE MANAGEMENT ============================================================================
let pageLink = window.location.pathname

if(pageLink == '/crossfader/index.html' || pageLink == '/crossfader/'){
    homePage()
}

if(pageLink == '/crossfader/support.html'){
    contactValidation()
}

if(pageLink == '/crossfader/products.html'){
    productPage()
}

if(pageLink == '/crossfader/prices.html'){
    pricesPage()
}
// ============================================================= END OF PAGE MANAGEMENT ========================================================================

// DEFAULT LOADINGS
navBars()
scrollToTopBtn()
footerSection()
// END OF DEFAULT LOADINGS

// ==================================================================== PAGE FUNCTIONS =========================================================================
function navBars() {
        
    // NAV BAR EXTENDED
    const navigationMenu = document.querySelector('.navLinks')
    const navigationLinkNames = [
        'Products', 
        'Community', 
        'Support',
        'Prices', 
        'Author'
    ]
    const navigationLinks = [
        'products.html',
        'community.html',
        'support.html', 
        'prices.html',
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
    const imageSources = [
        'vinyl.jpg',
        'dj-cdj.jpg',
        'dj-tutor.jpg',
        'pioneer-xdj.jpg',
        'pioneer-ddj1000.jpg',
        'dj-mixer.jpg'
    ]
    const imageAlternateNames = [
        'Old Vinyl',
        'DJ on CDJs',
        'Tutorials',
        'Pioneer XDJ-RR',
        'Pioneer DDJ-1000',
        '16 chan DJ Mixer'
    ]

    const sliderList = document.getElementsByClassName('slides')[0]

    for(let i = 0; i < imageSources.length; i++) 
        {
            let sliderItem = document.createElement('li')
            let sliderBackground = document.createElement('img')
                sliderItem.setAttribute('class', 'slide')
                sliderBackground.setAttribute('src', `assets/img/${imageSources[i]}`)
                sliderBackground.setAttribute('alt', imageAlternateNames[i])
                sliderItem.append(sliderBackground)
                sliderList.append(sliderItem)
        }

    // SLIDER JQUERY
    $(() => {
        let width = 100;
        let animationSpeed = 3000;
        let pause = 6000;
        let currentSlide = 1;

        let $slider = $('#slider')
        let $slideContainer = $slider.find('.slides')
        let $slides = $slideContainer.find('.slide')
        var interval

        function startSlider() {
            interval = setInterval(() => {
                $slideContainer.animate({'margin-left': '-=' + width + 'vw'}, animationSpeed, () => {
                    currentSlide++
                    if(currentSlide === $slides.length ) {
                        currentSlide = 1
                        $slideContainer.css('margin-left', 0)
                    }   
                })
            }, pause)
        }
        
        function stopSlider() {
            clearInterval(interval)
        }

        $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider)

        startSlider()
    })
    // END OF SLIDER JQUERY
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
    const submitBtn = document.querySelector('#contactSubmit')
    const fields = document.querySelectorAll('.fieldInput')
    const questionSelect = document.querySelector('#typeSelect')
    const professionSelect = document.querySelector('#professionSelect')
    const newsletter = document.querySelector('#newsletter')
    const inputFields = Array.from(fields)


    // CHECK FUNCTIONS
    const checkSelects = () => {
        let selectedQuestion = questionSelect.options[questionSelect.selectedIndex].value
        console.log(selectedQuestion)
        let selectedProfession = professionSelect.options[professionSelect.selectedIndex].value
            if(selectedQuestion != 0 && selectedProfession != 0) return 1
            return 0        
    }

    const checkTextField = () => {
        if(textField.value.length > 450) {
            fieldInvalid(textField, "Text can't be longer than 450 characters!")
            return 0
        } else if(textField.value == '' || textField.value == null || textField.value.length == 0) {
            fieldInvalid(textField, "Don't leave this empty!")
            return 0
        } else {
            fieldValid(textField)
            return 1
        }
    }

    const checkName = () => {
        let nameField = document.querySelector('#full_name') 
        let nameExpression = /^[A-ZČĆŽĐŠ][a-zćčžđš]{1,14}\s([A-ZČĆŽĐŠ][a-zćčžđš]{1,14})?\s?[A-ZČĆŽŠĐ][a-zćčžđš]{1,19}$/
            nameFieldValue = nameField.value
            return checkRegEx(nameExpression, nameFieldValue, nameField)
    }

    const checkMail = () => {
        let mailField = document.querySelector('#mail')
        let mailExpression = /^[a-zA-Z0-9]([a-z]|[0-9])+\.?-?_?([a-z]|[0-9])*\.?([a-z]|[0-9])*\@[a-z]{3,}\.([a-z]{2,4}\.)?([a-z]{2,4})$/g
            mailFieldValue = mailField.value 
            return checkRegEx(mailExpression, mailFieldValue, mailField) 
    }

    const checkBtn = () => {
        if(checkTextField() && checkName() && checkMail() && checkSelects()) {
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
    // END OF CHECK FUNCTIONS

    // EVENT LISTENERS
    textField.addEventListener('keyup', checkTextField)

    mailField.addEventListener('keyup', checkMail)

    nameField.addEventListener('keyup', checkName)

    questionSelect.addEventListener('change', checkSelects)

    professionSelect.addEventListener('change', checkSelects)

    submitBtn.addEventListener('click', (event) => {
        let selectedProfession = professionSelect.options[professionSelect.selectedIndex].innerText
        let selectedQuestion = questionSelect.options[questionSelect.selectedIndex].innerText
        if(checkBtn()) {
            event.preventDefault()
            if(newsletter.checked) alert(`Thank you ${selectedProfession} ${nameField.value.split(' ')[0]} for contacting us about ${selectedQuestion} topic, we will send you the answer on ${mailField.value} as soon as possible! P.S. We won't spam your mail with our newsletter!? :)`)
            else alert(`Thank you ${selectedProfession} ${nameField.value.split(' ')[0]} for contacting us about ${selectedQuestion} topic, we will send you the answer on ${mailField.value} as soon as possible! P.S. Why didn't you subscribe to newsletter? :(`)
            inputFields.forEach(inputField => {
                inputField.value = ''
                inputField.nextElementSibling.innerText = ''
            })
        } else {
            alert('Looks like you forgot something to fill or select!')
            event.preventDefault()
            checkName()
            checkMail()
            checkTextField()
        }
    })
    // END OF EVENT LISTENERS

    // FUNCTIONS

    function fieldValid(field) {
        if(field.classList.contains('fail')) {
            field.classList.remove('fail')
            field.classList.add('pass')
            field.nextElementSibling.classList.remove('red-text')
            field.nextElementSibling.classList.add('teal-text')
        } else {
            field.classList.add('pass')
        }
        field.nextElementSibling.innerHTML = `&check;`
        field.nextElementSibling.classList.add('teal-text')
        
    }

    function fieldInvalid(field, text) {
        if(field.classList.contains('pass')) {
            field.classList.remove('pass')
            field.classList.add('fail')
            field.nextElementSibling.classList.remove('teal-text')
            field.nextElementSibling.classList.add('red-text')    
        } else {
            field.classList.add('fail')
        }
        field.nextElementSibling.innerText = `${text}`
        field.nextElementSibling.classList.add('red-text')
    }

    const checkRegEx = (expression, fieldValue, field) => {
        if(expression.test(String(fieldValue))) {
            fieldValid(field)
            return 1 // Is valid, return 1
        } else {
            fieldInvalid(field, `${field.name} is not in a good format!`)
            return 0 // It isn't as expected, return 0
        } 
    }
    // END OF FUCNTIONS

    // LISTEN IF ANY OF REQUIRED FIELDS ISN'T FILLED/SELECTED, IF ALL ARE, RETURN 1 AND MAKE BUTTON VALID, ELSE RETURN 0 AND THE BUTTON CAN'T SUBMIT
    inputFields.forEach(inputField => {
        inputField.addEventListener('keyup', checkBtn)
    })
    
    professionSelect.addEventListener('change', checkBtn)

    questionSelect.addEventListener('change', checkBtn)

}

function pricesPage() {

    const tableContainer = document.getElementsByClassName('table-holder')[0]

    const itemPrice = [
        //traktor
        149.99,
        169.99,
        199.99,
        230,
        329.99,
        349.99,
        599.99,
        499.99,
        990,
        49.99,
        79.99,
        30,
        100,
        109.99,
        159.99,
        99.99,
        110,
        159.99,
        239.99,
        279.99,
        108,
        49.99,
        13.99,
        //pioneer
        449.99,
        469.99,
        299.99,
        230,
        349.99,
        449.99,
        269.99,
        199.99,
        250,
        109.99,
        139.99,
        399.99,
        789.99,
        1099.99,
        999.99,
        1199.99,
        1120,
        559.99,
        439.99,
        979.99,
        1089.99,
        1899.99,
        2099.99,
        2399.99,
        //numark   
        109.99,
        139.99,
        189.99,
        139.99,
        189.99,
        219.99,
        70,
        659.99,
        859.99
    ]
    const itemName = [
        'TRAKTOR S2 MK1',
        'TRAKTOR S2 MK2',
        'TRAKTOR S2 MK3',
        'TRAKTOR S3',
        'TRAKTOR S4 MK1',
        'TRAKTOR S4 MK2',
        'TRAKTOR S4 MK3',
        'TRAKTOR S5',
        'TRAKTOR S8',
        'TRAKTOR PRO 2',
        'TRAKTOR PRO 3',
        'TRAKTOR LE 3',
        'TRAKTOR FLIGHTCASE S2',
        'TRAKTOR FLIGHTCASE S4 & S5',
        'TRAKTOR FLIGHTCASE S8',
        'TRAKTOR KONTROL X1',
        'TRAKTOR KONTROL F1',
        'TRAKTOR KONTROL Z1',
        'TRAKTOR KONTROL D2',
        'TRAKTOR KONTROL Z2',
        'TRAKTOR SCRATCH A6',
        'TRAKTOR AUDIO 2',
        'TRAKTOR DJ CABLE',
        'PIONEER DDJ ERGO K',
        'PIONEER DDJ ERGO V',
        'PIONEER DDJ RB',
        'PIONEER DDJ RR',
        'PIONEER DDJ RX',
        'PIONEER DDJ RZX',
        'PIONEER DDJ S1',
        'PIONEER DDJ SB',
        'PIONEER DDJ SB2',
        'PIONEER DDJ WeGO2-W',
        'PIONEER DDJ WeGO3-G',
        'PIONEER DDJ SX2',
        'PIONEER DDJ T1',
        'PIONEER DDJ 1000',
        'PIONEER XDJ AERO',
        'PIONEER XDJ RX',
        'PIONEER XDJ R1',
        'PIONEER EFX 1000',
        'PIONEER EFX 500-R',
        'PIONEER DJM 850',
        'PIONEER DJM 1000',
        'PIONEER CDJ 2000',
        'PIONEER CDJ 2000NXS',
        'PIONEER CDJ 2000NXS2',
        'NUMARK MIXTRACK 1',
        'NUMARK MIXTRACK 2',
        'NUMARK MIXTRACK 3',
        'NUMARK MIXTRACK PRO 1',
        'NUMARK MIXTRACK PRO 2',
        'NUMARK MIXTRACK PRO 3',
        'NUMARK PARTY MIX',
        'NUMARK NV I',
        'NUMARK NV II',
    ]

    let priceTableContainer = document.querySelector('#table-container')
    let priceTable = document.createElement('table')
    
    for(let i = 0; i < itemName.length; i++){
        let tableRow = document.createElement('tr')
        for(let j = 0; j < 2; j++){
            let rowCell = document.createElement('td')
            let cellText
                switch(j) {
                    case 0: 
                        cellText = document.createTextNode(itemName[i])
                        rowCell.append(cellText)
                        tableRow.append(rowCell)
                        break
                    case 1: 
                        cellText = document.createTextNode(`$ ${itemPrice[i]}`)
                        rowCell.append(cellText)
                        tableRow.append(rowCell)
                        break
                    default: 
                        break
                }
        }
        priceTable.append(tableRow)
    }
    priceTableContainer.append(priceTable)

    let searchInput = document.querySelector('#product-search').addEventListener('keyup', filterProducts)

    function filterProducts() {
        let cellText, rowCell
        let searchInput = document.querySelector('#product-search')
        let searchFilter = searchInput.value.toUpperCase()
        let tableRow = document.getElementsByTagName('tr')
        
        for (let i = 0; i < tableRow.length; i++) {
            rowCell = tableRow[i].getElementsByTagName('td')[0]
            cellText = rowCell.textContent || rowCell.innerText;
            if (cellText.toUpperCase().indexOf(searchFilter) > -1) {
                if(tableRow[i].classList.contains('hide')) tableRow[i].classList.remove('hide')
            } else tableRow[i].classList.add('hide')
        }
    }

    $(document).ready(() => $('table tr:even').css('background-color','#eee'))
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

function scrollToTopBtn() {
    // BACK TO TOP BUTTON
    const backToTopButton = document.getElementById('toTopBtn')
    const scrollBack = () => window.scrollTo(0, 0)

    backToTopButton.addEventListener('click', scrollBack)

    const showBtn = () => {
        if(window.pageYOffset > 300) {
            if(backToTopButton.classList.contains('scale-out')) {
                backToTopButton.classList.remove('scale-out')
                backToTopButton.classList.add('scale-in')
            }
        } else {
            if(backToTopButton.classList.contains('scale-in')) {
                backToTopButton.classList.remove('scale-in')
                backToTopButton.classList.add('scale-out')    
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
        
$(document).ready(() => $('select').formSelect())

$(document).ready(() => $('.tooltipped').tooltip())

$(document).ready(() => $('input#input_text, textarea#textarea2').characterCounter())

$(window).on('load', () => $('.loading-container').fadeOut(1000))
// ============================================================= END OF JQUERY & MATERIALIZE TRIGGERS ==========================================================