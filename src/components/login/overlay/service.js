const overlayRight = document.querySelector(".overlay-right")
const overlayLeft = document.querySelector(".overlay-left")
const signUpForm = document.querySelector("#sign-up")
const signInForm = document.querySelector("#sign-in")
const closeLoginBtn = document.querySelector("#close-login")
const signInBtn = document.querySelector("button#signIn")
const signUpBtn = document.querySelector("button#signUp")
function showSignIn() {
    closeLoginBtn.classList.remove("white")
    overlayLeft.classList.toggle("active")
    overlayRight.classList.toggle("active")
    signUpForm.reset()
}
function showSignUp() {
    setTimeout(() => {
        closeLoginBtn.classList.add("white")
    }, 500)
    overlayRight.classList.toggle("active")
    overlayLeft.classList.toggle("active")
    signInForm.reset()
}
signInBtn.onclick = showSignIn
signUpBtn.onclick = showSignUp