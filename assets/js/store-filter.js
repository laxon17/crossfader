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
    'Technics EAH-700',
    'SMS Audio Street By 50 Cent'
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
    'EXCEPTIONAL SOUND QUALITY, WITH GREAT ISOLATION'
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
const cartBtn = document.querySelector('[data-cart]')
const storeCaption = document.getElementsByClassName('store-captions')[0]
const cartInfo = document.getElementsByClassName('cart-info')[0]
const purchaseBtn = document.getElementById('purchaseBtn')
cartContainer.classList.add('hide')
storeCaption.classList.add('hide')
cartInfo.classList.add('hide')


cartBtn.addEventListener('click', () => {
    cartContainer.classList.remove('hide')
    if(!cartContainer.classList.contains('hide')) {
        cartInfo.classList.remove('hide')
        storeCaption.classList.remove('hide')
    }
    let hideFilters = document.querySelectorAll('.filteringItem')
    for (let i = 0; i < hideFilters.length; i++) 
        {
            hideFilters[i].classList.add('hide')
        }
})

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
            cartInfo.classList.add('hide')
            storeCaption.classList.add('hide')
            cartContainer.classList.add('hide')
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

// cart functions (add/remove/modify)

if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    const removeButtons = document.querySelectorAll('#removeBtn')
    for(let i = 0; i < removeButtons.length; i++) {
    let removeButton = removeButtons[i]
        removeButton.addEventListener('click', removeCartItem) 
    }

    const quantityInputs = document.getElementsByClassName('cart-quantity')
    for(let i = 0; i < quantityInputs.length; i++) {
    let quantityInput = quantityInputs[i]
        quantityInput.addEventListener('change', quantityChanged)
    }

    const addToCartBtns = document.querySelectorAll('#addToCartBtn')
    for(let i = 0; i < addToCartBtns.length; i++) {
        let addToCartBtn = addToCartBtns[i]
            addToCartBtn.addEventListener('click', addToCart)
    }
}




function removeCartItem(event) {
    let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
}

function quantityChanged(event) {
    let quantityInput = event.target
        if(isNaN(quantityInput.value) || quantityInput.value <= 0) {
            quantityInput.value = 1
        }
        updateCartTotal()
}

function addToCart(event) {
    let addButton = event.target
    let shopItem = addButton.parentElement.parentElement
    let itemTitle = shopItem.getElementsByClassName('item-title')[0].innerText
    let itemPrice = shopItem.querySelectorAll('#price')[0].innerText.replace('$', '')
    let imageSrc = shopItem.getElementsByClassName('item-image')[0].src
        M.toast({html: 'Added to cart!'})
        addItemToCart(itemTitle, itemPrice, imageSrc)
        updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    let cartList = document.getElementsByClassName('cart-list')[0]
    let cartRow = document.createElement('div')
        cartRow.classList.add('row', 'center-on-small-only', 'cart-item')
    let cartItemNames = document.getElementsByClassName('cart-item-title')
    for(let i = 0; i < cartItemNames.length; i++) {
        if(cartItemNames[i].innerText == title) {
            alert("You've already added this item to the cart!")
            return
        }
    }
    let cartRowContent = `
        <div class="col s12 m3 l2 center-align">
            <img src="${imageSrc}" class="responsive-img" alt="">
            <span class="cart-item-title">${title}</span>
        </div>
        <div class="col s12 m3 l2 offset-m1 offset-l3 flow-text center-align margin-top cart-price">$${price}</div>
        <div class="col s6 offset-s3 m2 l2 offset-l2 margin-top">
            <input type="number" value="1" class="cart-quantity" />
        </div>
        <div class="col s12 m2 l1 margin-top">
            <button id="removeBtn" class="btn btn-large red white-text waves-effect waves-dark">REMOVE</button>
        </div>
    `
    cartRow.innerHTML = cartRowContent
    cartList.append(cartRow)
    cartRow.querySelectorAll('#removeBtn')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}
 
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-list')[0]
    var cartItems = document.getElementsByClassName('cart-item')
    var total = 0
        for (let i = 0; i < cartItems.length; i++) {
            var cartItem = cartItems[i]
            var itemPrice = cartItem.getElementsByClassName('cart-price')[0]
            var itemQuantity = cartItem.getElementsByClassName('cart-quantity')[0]
            var price = parseFloat(itemPrice.innerText.replace('$', ''))
            var quantity = itemQuantity.value
            total = total + (price * quantity)
        }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('price-total')[0].innerText = total;
}

purchaseBtn.addEventListener('click', () => {
    if(!cartContainer.hasChildNodes()) {
        purchaseBtn.removeAttribute('data-target', 'modal1')
        alert('Your cart is empty!')
    } else {
        purchaseBtn.setAttribute('data-target', 'modal1')
    }
})

const agreePurchaseBtn = document.getElementById('modal-agree')
agreePurchaseBtn.addEventListener('click', () => {
    window.location.replace('https://laxon17.github.io/crossfader/payment.html')
})
