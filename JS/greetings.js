const HiddenClassName = 'hidden';

const USERNAME_KEY = 'username';

const loginForm = document.getElementById("loginForm");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greetings = document.querySelector("h1");
const savedUsername = localStorage.getItem(USERNAME_KEY);


//새로 로그인하는 함수
function newLoginHandler(event) {
    event.preventDefault();
    //loginForm 지우기.
    loginForm.classList.add(HiddenClassName);
    //greeting이 username을 포함해서 나타나게 하기.
    const userName = loginInput.value;
    paintGreetings(userName);
    //localStorage에 새로운 username 저장하기
    localStorage.setItem(USERNAME_KEY, userName);
};

//greetings 호출 함수
function paintGreetings(username) {
    greetings.innerText = `Hello, "${username}"`;
    greetings.classList.remove(HiddenClassName);
}

//localStorage에 username 유무 확인
if(savedUsername === null) {
    loginForm.classList.remove(HiddenClassName);
    loginForm.addEventListener("submit", newLoginHandler);
} else {
   paintGreetings(savedUsername);
};