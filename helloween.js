let textImg = document.querySelector('.img-12-text');
let imgMin = document.querySelectorAll('.img-12-min');
let bigImg = document.querySelector('.img-12-max');

let count = 0;
function next() {
    if (count + 1 == 6) {
        count = 0;

    }


    else {
        imgMin[count].classList.remove('active-img');
        count++;
    }
    imgMin[5].classList.remove('active-img');
    imgMin[count].classList.add('active-img');
    bigImg.src = imgMin[count].src;
    let dataText = imgMin[count].getAttribute('data-text');
    textImg.innerHTML = dataText;


}
function prev() {
    if (count - 1 == -1) {
        count = 5;
        imgMin[0].classList.remove('active-img');
    }
    else {

        imgMin[count].classList.remove('active-img');
        count--;

    }
    imgMin[count].classList.add('active-img');
    bigImg.src = imgMin[count].src;
    let dataText = imgMin[count].getAttribute('data-text');
    textImg.innerHTML = dataText;



}
function reset() {
    imgMin[0].classList.add('active-img');
    imgMin[count].classList.remove('active-img');
    let dataText = imgMin[0].getAttribute('data-text');
    textImg.innerHTML = dataText;
    count = 0;
    next();
    prev();
}



document.querySelector('.next').addEventListener('click', next);
document.querySelector('.prev').addEventListener('click', prev);
document.querySelector('.reset').addEventListener('click', reset);
