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
    'Learn more',
    'View more',
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

    

const productImageSources = [
    'traktor-dj-pro3.png',
    'serato-dj.png',
    'pioneer-controllers.jpg',
    'traktor-controllers.jpg',
    'dj-girl.jpg',
    'music-producer.jpg'
]

const productAlternateNames = [
    'Traktor DJ Pro 3 Software',
    'Serato DJ software',
    'Pioneer Controllers',
    'Traktor Controllers',
    'Woman playing music',
    'Guy producing music'
]

const cardTitles = [
    'Traktor DJ Software',
    'Serato DJ software',
    'Pioneer Controllers',
    'Traktor Controllers',
    'New Traktor effects',
    'Techno sound design with maschine'
]

var productsContainer = document.querySelector('#product-cards')
var productCards = '<section class="container">'
var cardCounter = 0;

for(let i = 0; i < productImageSources.length / 2; i++)
    {
        var cardRow = '<article class="row">'
        for(let j = 0; j <productImageSources.length / 3; j++)
        {
            cardRow += `
                <div class="col s12 m6 l6">
                    <div class="card large">
                        <div class="card-image">
                            <img alt="${productAlternateNames[cardCounter]}" src="assets/img/${productImageSources[cardCounter]}">
                            <span class="card-title">${cardTitles[cardCounter]}</span>
                        </div>
                        <div class="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a class="teal-text" href="#">View more</a>
                        </div>
                    </div>
                </div>
            `
            cardCounter++;
        }
        cardRow += '</article>'
        productCards += cardRow
    }

productCards += '</section>'

console.log(productCards)

productsContainer.innerHTML = productCards





