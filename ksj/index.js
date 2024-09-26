const all = document.querySelector('.inner');
all.classList.toggle('op');

const intro =document.createElement('div','intro');
document.body.prepend(intro);
intro.textContent = 'click me!!';
intro.style.textAlign = 'center';
intro.style.fontSize = '40px';
intro.style.fontWeight = '700';
intro.style.marginTop = '400px';
intro.style.cursor = 'pointer';

intro.addEventListener('click', function(){
    intro.classList.toggle('op');
    all.style.display = 'block';
});

intro.addEventListener('mouseenter', function(){
    intro.classList.toggle('vibration');
    intro.style.color = 'blue';
});

intro.addEventListener('mouseleave', function(){
    intro.classList.toggle('vibration');
    intro.style.color = 'black';
});

const content = '강 수 정';
const text = document.querySelector('h2');
let i = 0;
function typing(){
    if( i < content.length ){
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++;
    };
};
setInterval(typing, 850);

let boxTxt = document.querySelectorAll('.txt');

// function textNone(){
//     for (let i = 0; i < boxTxt.length; i++){
//         boxTxt[i].style.display = 'none';
//     }
// }
// textNone();



// const txtBtn = document.createElement('button', 'txt_btn');
// document.boxTxt.prepend('txtBtn');

// txtBtn.innerHTML = '버튼';

