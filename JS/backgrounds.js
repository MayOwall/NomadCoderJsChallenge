const backgroundImageList = [
    '0.jpg', '1.jpg', '2.jpg', '3.jpg',
];
const backgroundBlock = document.getElementById("background-block");

function backgroundPainter() {
    const backgroundImage = backgroundBlock.querySelector("img");
    const randomNum = Math.floor(Math.random() * backgroundImageList.length);

    backgroundImage.src = `IMG/${backgroundImageList[randomNum]}`;
};

backgroundPainter();