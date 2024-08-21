const phone = document.getElementById('phone')
const email = document.getElementById('email')

phone.addEventListener('click', () => {
    phone.innerText === 'Phone: Click here' ?
        phone.innerText = 'Phone: (204) 297-0934' :
        phone.innerText = 'Phone: Click here'
})

email.addEventListener('click', () => {
    email.innerText === 'Email: Click here' ?
        email.innerText = 'Email: sean.taubner@gmail.com' :
        email.innerText = 'Email: Click here'
})