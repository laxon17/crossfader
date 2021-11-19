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
    let expression = /\d/
    let nameFieldValue = nameField.value 
    let nameFieldValueLength = nameFieldValue.length  
        if(nameFieldValue.match(expression)) {
            if(nameField.classList.contains('pass')) {
                nameField.classList.remove('pass')
                nameField.classList.add('fail')
            } else {
                nameField.classList.add('fail')
            }
            nameError.style.color = 'red'
            nameError.innerText = `Full name can't contain digits!`
            return 0 // If name contains a digit, it returns 0 
        } else if(nameFieldValue.length > 20) {
            if(nameField.classList.contains('pass')) {
                nameField.classList.remove('pass')
                nameField.classList.add('fail')
            } else {
                nameField.classList.add('fail')
            }
            nameError.style.color = 'red'
            nameError.innerText = `Full name can't be longer than 20 characters`
            return 0 // If name is too long, it returns 0 
        } else if(nameFieldValue == '' || nameFieldValue == null || nameFieldValueLength == 0 || nameFieldValue == ' ') {
            if(nameField.classList.contains('pass')) {
                nameField.classList.remove('pass')
                nameField.classList.add('fail')
            } else {
                nameField.classList.add('fail')
            }
            nameError.style.color = 'red'
            nameError.innerText = `Don't leave this empty!`
            return 0 // If name is too long, it returns 0  
        } else {
            if(nameField.classList.contains('fail')) {
                nameField.classList.remove('fail')
                nameField.classList.add('pass')
            } else {
                nameField.classList.add('pass')
            }
            nameError.style.color = 'teal'
            nameError.innerHTML = '&check;'
            return 1 // If name is valid, it return 1
        }
}

const checkMail = () => {
    let mailField = document.querySelector('#mail')
        mailFieldValue = mailField.value 
        if(mailFieldValue.includes('@')) {
            if(mailField.classList.contains('fail')) {
                mailField.classList.remove('fail')
                mailField.classList.add('pass')
            } else {
                mailField.classList.add('pass')
            }
            mailError.style.color = 'teal'
            mailError.innerHTML = `&check;`
            return 1 // If mail contains @ 
        } else if(mailFieldValue.length == 0 || mailFieldValue == null || mailFieldValue == ''){
            if(mailField.classList.contains('pass')) {
                mailField.classList.remove('pass')
                mailField.classList.add('fail')
            } else {
                mailField.classList.add('fail')
            }
            mailError.style.color = 'red'
            mailError.innerHTML = `Don't leave this empty!`
            return 0 // If mail doesn't contain @, it returns 0
        } else {
            if(mailField.classList.contains('pass')) {
                mailField.classList.remove('pass')
                mailField.classList.add('fail')
            } else {
                mailField.classList.add('fail')
            }
            mailError.style.color = 'red'
            mailError.innerHTML = `Format of mail is not valid! Try adding @`
            return 0 // If mail doesn't contain @, it returns 0
        }   
}


textField.addEventListener('keyup', checkTextField)

mailField.addEventListener('keyup', checkMail)

nameField.addEventListener('keyup', checkName)

contactForm.addEventListener('submit' , (event) => {
    if(checkBtn()) {
        alert('Thank you for contacting us! The answer will be sent to your mail. Your Crossfader team!')
    } else {
        alert('Looks like you forgot something to fill!')
        checkName()
        checkMail()
        checkTextField()
        event.preventDefault()
    }
})

inputFields.forEach(inputField => {
    inputField.addEventListener('keyup', checkBtn)
})
