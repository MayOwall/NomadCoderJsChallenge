const quoteList = [
    {
        quote : '나는 나를 위한 하루를 보낸다.',
        speaker : '김토끼1'
    },
    {
        quote : '나는 서두르지 않고 내가 할 일을 해낸다.',
        speaker : '김토끼2'
    },
    {
        quote : '나는 기죽지 않는다.',
        speaker : '김토끼3'
    },
    {
        quote : '나는 나를 위해 가장 좋은 선택을 한다.',
        speaker : '김토끼4'
    },
    {
        quote : '나는 끝내 해낸다.',
        speaker : '김토끼5'
    },
    {
        quote : '나는 행복해.',
        speaker : '김토끼6'
    },
    {
        quote : '나는 잘된다, 믿어!!',
        speaker : '김토끼7'
    },
];
const quote = document.getElementById("quote");
const quoteSpeaker = document.getElementById("quote-speaker");
const randomNum = (Math.floor(Math.random() * quoteList.length));

quote.innerText = `" ${quoteList[randomNum].quote} "`;
quoteSpeaker.innerText = `- ${quoteList[randomNum].speaker} -`;
