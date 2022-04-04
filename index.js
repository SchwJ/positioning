/*
    Изменить элементу цвет и ширину можно вот так:
    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function norm() {
    let progressBar = document.querySelector('.greyBar');
    let progress = 0;
    const id = setInterval(() => {
        if (progress < 100) {
            progress++;
            progressBar.firstElementChild.style.width = `${progress}%`
        } else {
            clearInterval(id);
        }
    }, 30)
}

function strange() {
    let progressBar = document.querySelector('.greyBar');
    let progress = 0;
    let reverse = false;
    const id = setInterval(() => {
        if (!reverse) {
            progress++;
            progressBar.firstElementChild.style.width = `${progress}%`
        } else {
            progress--;
            progressBar.firstElementChild.style.width = `${progress}%`
        }
        if (progress === 67) {
            document.querySelector('.redBar').color = 'green';
            reverse = true;
        } else if (progress === 16) {
            reverse = false;
        }
    }, 30)
}

function realyStrange() {
    let progressBar = document.querySelector('.greyBar');
    let progress = 0;
    let reverse = false;
    const id = setInterval(() => {
        if (!reverse) {
            progress++;
            progressBar.firstElementChild.style.width = `${progress}%`
        } else {
            progress--;
            progressBar.firstElementChild.style.width = `${progress}%`
        }
        if (progress === 67) {
            let r = document.querySelector('.redBar');
            reverse = true;
        } else if (progress === 16) {
            reverse = false;
        }
    }, 30)
}

function closeWindow() {
    var meme = document.querySelector('[data-lightbox]');
    mem.classList.add("hide");
}

strange();