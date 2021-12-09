//========= Логика Слайдера =========
const sBtn1 = document.querySelector('.slider__btn1');
const sBtn2 = document.querySelector('.slider__btn2');
const sBtn3 = document.querySelector('.slider__btn3');
const sLine = document.getElementById("slider-items");

sBtn1.addEventListener('click', ()=>{
    sBtn1.classList.add('active');
    sBtn2.classList.remove('active');
    sBtn3.classList.remove('active');

    sLine.style.left = "0px"; 
});

sBtn2.addEventListener('click', ()=>{
    sBtn2.classList.add('active');
    sBtn1.classList.remove('active');
    sBtn3.classList.remove('active');

    sLine.style.left = "-1340px"; 
});
    
sBtn3.addEventListener('click', ()=>{
    sBtn3.classList.add('active');
    sBtn2.classList.remove('active');
    sBtn1.classList.remove('active');

    sLine.style.left = "-2680px";   
});








