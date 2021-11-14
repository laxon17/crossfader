// Footer link
// Store info links

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
            <a class="grey-text text-lighten-3" href="#!">${storeInfo[i]}</a>
        </li>
    `
    infoStorage += storeInfoItem
}
storeInfoList.innerHTML = infoStorage

// Company info links

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
            <a class="grey-text text-lighten-3" href="#!">${companyInfo[i]}</a>
        </li>
    `
    companyInfoStorage += companyInfoItem
}
companyInfoList.innerHTML = companyInfoStorage