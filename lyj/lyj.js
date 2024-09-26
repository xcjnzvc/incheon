const nameBtn = document.getElementById("firstbtn");
const nameText = document.getElementById("name");

nameBtn.onclick =function(){
    nameText.style.fontSize= '60px';
};

const mbtiBtn = document.getElementById("2button");
const mbtiText = document.getElementById("mbti");

mbtiBtn.onclick = function(){
    mbtiText.style.color = 'blue';
};

const favBtn = document.getElementById("3button");
const favText = document.getElementById("food");

favBtn.onclick = function(){
    favText.style.color = '#33FF33';
    favText.style.fontSize = '60px';
}

const hateBtn = document.getElementById("hateBtn");
const hateText = document.getElementById("hateText");

hateBtn.onclick = function(){
    hateText.style.color = 'red';
}


const introBtn = document.getElementById("4button");
const introText = document.getElementById("intro");

introBtn.onclick = function(){
    introText.style.color = '#6699FF';
    introText.style.fontSize= '30px';
    var audio = new Audio('audio/drum.mp3');
    audio.play();
}

const songBtn = document.getElementById("songB");

songBtn.onclick = function(){
    var audio = new Audio('audio/Tada.mp3');
    audio.play();
    audio.volume = 0.4;
}


const hobbyBtn = document.getElementById("5button");

hobbyBtn.onclick = function(){
    var audio = new Audio('audio/laugh.mp3');
    audio.play();
}