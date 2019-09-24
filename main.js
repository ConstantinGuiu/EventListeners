let BG = document.querySelector('body')
let okBtn = document.getElementById("ok")
let turtle = document.getElementById("turt-char")
let stillTurt = document.getElementById("turt-png")
let rainbTurt = document.getElementById("turt-rainbow")
let walknTurt = document.getElementById("turt-gif")
let darkmode = document.querySelector("input[name=darkmode]")
let j = 0
let jumpCount = 0
let animCount = 0
let chngCount = 0
let talkCount = 0
let jumpSpan = document.getElementById("span-jump")
let animSpan = document.getElementById("span-anim")
let chngSpan = document.getElementById("span-change")
let talkSpan = document.getElementById("span-talk")

jumpSpan.innerHTML = jumpCount;
animSpan.innerHTML = animCount;
chngSpan.innerHTML = chngCount;
talkSpan.innerHTML = talkCount;

window.addEventListener('load', loadCookies);
okBtn.addEventListener('click', closeCookies);
document.addEventListener("keyup", acceptCookies);
turtle.addEventListener("mouseover", talk);
turtle.addEventListener("dblclick", jump);
darkmode.addEventListener('change', turnRainbow);

function acceptCookies() {
    if (event.keyCode === 13) {
        document.getElementById("ok").click();
    }
};

function loadCookies() {
    let cookie = document.getElementById('cookie-shadow')
    cookie.style.display = 'flex'
}

function closeCookies() {
    let cookie = document.getElementById('cookie-shadow')
    cookie.style.display = 'none'
    showTurtle()
}

function showTurtle() {
    turtle.classList.add("showTurtle")
    walk()
    turtle.style.marginLeft = '20vw'
    turtle.addEventListener('animationend', still)
}

function talk() {
    if (j == 1) {
        turtle.classList.add('talk')
        turtle.addEventListener('animationend', still)
        animCount++
        animSpan.innerHTML = animCount;
        talkCount++
        talkSpan.innerHTML = talkCount;
    }
}

function jump() {
    turtle.classList.add('jump')
    turtle.addEventListener('animationend', still)
    jumpCount++
    jumpSpan.innerHTML = jumpCount;
    animCount++
    animSpan.innerHTML = animCount;
}

function walk() {
    stillTurt.style.display = 'none'
    walknTurt.style.display = 'block'
}

function still() {
    j = 1
    stillTurt.style.display = 'block'
    walknTurt.style.display = 'none'
    rainbTurt.style.display = 'none'
    turtle.classList.remove('talk')
    turtle.classList.remove("showTurtle")
    turtle.classList.remove('jump')
}

function turnRainbow() {
    chngCount++
    chngSpan.innerHTML = chngCount
    if (this.checked) {
        stillTurt.style.display = 'none'
        rainbTurt.style.display = 'block'
        animCount++
        animSpan.innerHTML = animCount;
    } else {
        stillTurt.style.display = 'block'
        rainbTurt.style.display = 'none'
        animCount++
        animSpan.innerHTML = animCount;
    }
}