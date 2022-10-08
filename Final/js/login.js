const login_form = document.querySelector("#login-form");
const btn = document.querySelector("#login-form button");
const login_input = document.querySelector("#login-form input");
const onLogin = document.querySelector("#onLogin")
const onLogin_p = document.querySelector("#onLogin #user p")
const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden"

function login() {
    const name = login_input.value;
    localStorage.setItem(USERNAME_KEY, name);
}


const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    login_form.classList.remove(HIDDEN_CLASS);
    btn.addEventListener("click", login);
    onLogin.classList.add(HIDDEN_CLASS);
} else {
    onLogin_p.innerText = `Hello! ${saveUsername}`;
}