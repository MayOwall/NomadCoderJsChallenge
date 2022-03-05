const clock = document.getElementById("clock");

function clockPainter() {
    const nowDate = new Date();
    const nowHours = String(nowDate.getHours()).padStart(2, '0');
    const nowMinutes = String(nowDate.getMinutes()).padStart(2, '0');
    const nowSeconds = String(nowDate.getSeconds()).padStart(2, '0');

    clock.innerText = `${nowHours}:${nowMinutes}:${nowSeconds}`;
};

clockPainter();
setInterval(clockPainter, 1000);