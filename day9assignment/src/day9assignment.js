const submitButton = document.querySelector("form");
const maxNumber = document.querySelector("#max-number");
const userNumber = document.querySelector("#user-number");
const result = document.querySelector("#result");
const won = document.querySelector("#won");
const loose = document.querySelector("#loose");

//랜덤넘버 뽑기 함수
function randomNumber (a) {
    var result = Math.floor(Math.random() * a + 1);
    return result;
};

//submit할 시 일어날 함수
function onSubmitHandler(event) {
    //새로고침 멈춤.
    event.preventDefault();

    //raw string 최소화
    const RAWSTRING_HIDDEN = "hidden";

    //최대숫자 & 유저숫자의 type을 number화
    const realMaxNumber = parseInt(maxNumber.value);
    const realUserNumber = parseInt(userNumber.value);
    //랜덤 숫자를 변수화.
    const machineNumber = randomNumber(realMaxNumber);
    
    //결과 설명 함수
    function explainText () {
        result.innerText = `You chose: ${realUserNumber}, the machine chose: ${machineNumber}.`;
        result.classList.remove(RAWSTRING_HIDDEN);
    };

    //같거나 다른지에 따라 함수 실현.
    if(machineNumber === realUserNumber) {
        explainText();
        won.classList.remove(RAWSTRING_HIDDEN);
        loose.classList.add(RAWSTRING_HIDDEN);
    } else {
        explainText();
        won.classList.add(RAWSTRING_HIDDEN);
        loose.classList.remove(RAWSTRING_HIDDEN);
    };
};


submitButton.addEventListener("submit", onSubmitHandler);
