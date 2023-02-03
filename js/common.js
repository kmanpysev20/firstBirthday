const Dday = document.querySelector(".d-day");

function firstBirthDay() {
    const birthDay = new Date("2023-04-08");
    const today = new Date();
    const calc = birthDay - today;

    const dayD = Math.floor(calc / (1000*60*60*24));
    const dayH = Math.floor(calc / (1000*60*60) % 24);
    const dayM = Math.floor(calc / (1000*60) % 60);
    const dayS = Math.floor(calc / (1000) % 60);
    Dday.innerText = `D-day : ${dayD}일 ${dayH}시간 ${dayM}분 ${dayS}초`
}

firstBirthDay();
setInterval(firstBirthDay, 1000);