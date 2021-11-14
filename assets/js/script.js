// Nav bar extended

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

for (let i = 0; i < navigationLinks.length; i++) 
    {
        let listItem = document.createElement('li')
        let navLink = document.createElement('a')
        let navLinkName = document.createTextNode(navigationLinkNames[i])
            navLink.setAttribute('href', navigationLinks[i])
            navLink.setAttribute('class', 'black-text')
            navLink.append(navLinkName)
            listItem.append(navLink)
            navigationMenu.append(listItem)
    }

// Nav Bar collapsed

const sideNavMenu = document.querySelector('.sideNavCollapsed')

for (let i = 0; i < navigationLinks.length; i++) 
    {
        let listItem = document.createElement('li')
        let navLink = document.createElement('a')
        let navLinkName = document.createTextNode(navigationLinkNames[i])
            navLink.setAttribute('href', navigationLinks[i])
            navLink.setAttribute('class', 'black-text')
            navLink.append(navLinkName)
            listItem.append(navLink)
            sideNavMenu.append(listItem)
    }

// Sliding carousel

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

const buttonContent = [
    '',
    'Sign up',
    'View details',
    'View details'
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
            let captionButton = document.createElement('button')
                captionButton.innerText = buttonContent[i]
                captionButton.classList.add('btn', 'btn-large', 'white-text', 'waves-effect', 'waves-light', 'teal')
            if(i == 0)
                {
                    captionHolder.append(captionHeading)
                }
            else 
                {
                    captionHolder.append(captionHeading, captionButton)
                }
            sliderItem.append(sliderImage, captionHolder)
            sliderContainer.append(sliderItem)
    }


// Cards with products

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

// end of card products

// Fixed floating buttons in the bottom right corner
// Back to top button

const backToTopButton = document.getElementById('toTopBtn')
const scrollBack = () => window.scrollTo(0, 0)

backToTopButton.addEventListener('click', scrollBack)

const showBtn = () => {
    if(window.pageYOffset > 300)
        {
            if(backToTopButton.classList.contains('hide'))
                {
                    backToTopButton.classList.remove('scale-out')
                    backToTopButton.classList.remove('hide')
                    backToTopButton.classList.add('scale-in')
                }
        }
    else {
        if(!backToTopButton.classList.contains('hide'))
            {
                backToTopButton.classList.remove('scale-in')
                backToTopButton.classList.add('scale-out')
                backToTopButton.classList.add('hide')
            }
    }
}

window.addEventListener('scroll', showBtn)

// End of floating buttons

// Product galery 

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

// End of product gallery