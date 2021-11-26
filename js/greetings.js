const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${username}!`;
    randomGreetings(username);    
}

function randomGreetings(username) {
    let greetings = [
        `Good ${timeGreeting}, ${username}!`, `Keep calm and just Do it, ${username}!`, `Live present, ${username}.`
    ]
    setInterval(function() {
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greeting.innerText = randomGreeting;
    }, 30*1000);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {   
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings();  
};


