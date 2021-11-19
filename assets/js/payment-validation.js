const cardNumber = new Cleave('#card_number', {
    creditCard: true,
    delimiter: ' - ',
    onCreditCardTypeChanged: function(type) {
        let cardType = document.getElementById('card_brand')
            mastercard = 'teal-text fab fa-cc-mastercard prefix'
            visa = 'teal-text fab fa-cc-visa prefix'
            amex = 'teal-text fab fa-cc-amex prefix'
            discover = 'teal-text fab fa-cc-discover prefix'
            diners = 'teal-text fab fa-cc-diners-club prefix'
            jcb = 'teal-text fab fa-cc-jcb prefix'
            switch(type) {
                case 'mastercard': cardType.setAttribute('class', mastercard); break
                case 'visa': cardType.setAttribute('class', visa); break
                case 'amex': cardType.setAttribute('class', amex); break
                case 'discover': cardType.setAttribute('class', discover); break
                case 'diners': cardType.setAttribute('class', diners); break
                case 'jcb': cardType.setAttribute('class', jcb); break
                default: cardType.setAttribute('class', 'fas fa-credit-card prefix'); break
            }
    }
})

const expireDate = new Cleave('#expire_date', {
    date: true,
    datePattern: ['m', 'y']
})

const cvcNumber = new Cleave('#cvc_number', {
    blocks: [3]
})

const birthDate = new Cleave('#birth', {
    blocks: [2,2,4]
})

const phoneNumber = new Cleave('#phone_number', {
    blocks: [3,3,2,2] 
})