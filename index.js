const counter = document.querySelector(".visitor-counter");
async function updateCounter() {
    let response = await fetch("https://zy5wgbl5i6wwromzig24ozybjy0ibqdr.lambda-url.ap-southeast-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();