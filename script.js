const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginform= document.querySelector("#login-form");
const registerform = document.querySelector("#register-form");

loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

loginForm.style.left = "50%";
registerForm.style.left = "-50%";

loginForm.style.opacity= 1;
registerForm.style.opacity = 0;
})

async function handleSubmit() {
    try {
        const response = await fetch ('url');
    } catch (error){
        console.error('Error:', error);
    }
}

document.querySelector('#loginSubmit').addEventListener('click, handlSubmit');

registerBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "21264D";

loginForm.style.left = "150%";
registerForm.style.left = "-50%";

loginForm.style.opacity= 1;
registerForm.style.opacity = 0;
})