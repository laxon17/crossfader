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
    'headphones.jpg'
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
    'Technics EAX-700',
    'SMS Audio Street By 50 Cent'
]

const classNames = [
    'controllers',
    'flightcases',
    'monitors',
    'headphones'
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
    100.00
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
                            <img class="responsive-img" src="assets/img/${productImages[itemCounter]}" alt="${productTitles[itemCounter]}" />
                        </div>
                        <div class=" card-content">
                            <span class="card-title teal-text">${productTitles[itemCounter]}</span>
                            <p>Nois</p>
                        </div>
                        <div class="card-action">
                            <p id="price" class="center-align">${productPrices[itemCounter]}<span>&euro;</span></p>
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

const filterBtns = document.querySelectorAll('[data-filter]')
const targetNames = [
    'all',
    'controllers',
    'flightcases',
    'headphones',
    'monitors'
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
    for (let i = 0; i < filterItem.length; i++) 
        {
            classAdd(filterItem[i], 'hide')
            if (filterItem[i].className.indexOf(filterName) > -1) classRemove(filterItem[i], 'hide')
        }
}

const classAdd = (element, name) => {
    let elementArray, classNameArray
        elementArray = element.className.split(' ');
        classNameArray = name.split(' ');
    for (let i = 0; i < classNameArray.length; i++) 
        {
            if (elementArray.indexOf(classNameArray[i]) == -1)
                {
                    element.className += ' ' + classNameArray[i]
                }
        }
}

const classRemove = (element, name) => {
    let elementArray, classNameArray
        elementArray = element.className.split(' ')
        classNameArray = name.split(' ')
    for (let i = 0; i < classNameArray.length; i++) 
        {
            while (elementArray.indexOf(classNameArray[i]) > -1) 
                {
                    elementArray.splice(elementArray.indexOf(classNameArray[i]), 1)
                }
        }
    element.className = elementArray.join(' ')
}

