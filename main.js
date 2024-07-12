const form = document.getElementById('form');
const email = document.getElementById('email');
const hidden = document.querySelector('.hidden')
const errormessage = document.querySelector('.errormessage')
const successPage = document.querySelector('.successContainer')
const formPage = document.querySelector('.container')
const backButton = document.querySelector('.dismissButton')
const confirmationmessage = document.querySelector('.confirmationEmail')

function handleSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email.value);
    if(!emailRegex.test(email.value)){
        errormessage.classList.remove('hidden')
    } else {
        errormessage.classList.add('hidden')
        successPage.classList.remove('hidden')
        formPage.classList.add('hidden')
        confirmationmessage.innerHTML = `A confirmation email has been sent to <span class="companyEmail">${email.value}</span>.
          Please open it and click the button inside to confirm your subscription.`
    }
}

form.addEventListener('submit',handleSubmit);

backButton.addEventListener('click',()=>{
    successPage.classList.add('hidden')
    formPage.classList.remove('hidden')
})

