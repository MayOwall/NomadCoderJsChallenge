const form = document.querySelector("form");
const input1 = document.querySelector("#max-number");
const input2 = document.querySelector("#user-number");
const resultExplain = document.querySelector("#result-explain");
const gameResult = document.querySelector("#game-result");

function gameHandler(event) {
    event.preventDefault();

    const maxNumber = parseInt(input1.value);
    const userNumber = parseInt(input2.value);

    if(maxNumber < userNumber) {
        alert("Please rewrite Guessing Number as a number lower than generate number.");
        location.reload();
    } else {
        const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        if(randomNumber === userNumber) {
            resultExplain.innerText = `You chose : ${userNumber}. Machine chose : ${randomNumber}.`;
            gameResult.innerText = `You Win!`;
        } else {
            resultExplain.innerText = `You chose : ${userNumber}. Machine chose : ${randomNumber}.`;
            gameResult.innerText = `You Loose....`;
        };
    };
};

form.addEventListener("submit", gameHandler);