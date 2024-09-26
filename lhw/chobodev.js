const myname = document.querySelector('.realname');
const moreinfo = document.querySelector('.more-info');
const myheart = document.querySelector('.my-heart');
const flow = document.querySelector('#flow');
const main = document.querySelector('main');
const ghost = document.querySelector('#ghost');

myname.addEventListener('mouseenter', function (e) {
  this.classList.add('remove-blur');
});

myname.addEventListener('mouseleave', function (e) {
  this.classList.remove('remove-blur');
});

myname.addEventListener('click', function (e) {
  this.style.color = 'red';
});

moreinfo.addEventListener('click', function (e) {
  this.children[1].classList.toggle('hidden');
  this.children[0].children[0].classList.toggle('cont');
});

myheart.addEventListener('mouseenter', function (e) {
  this.style.backgroundColor = 'red';
  this.classList.add('heartbeat');
});

myheart.addEventListener('mouseleave', function (e) {
  this.style.backgroundColor = 'blue';
  this.classList.remove('heartbeat');
});

flow.addEventListener('keyup', function (e) {
  const len = e.target.value.length;
  if (len > 10) {
    this.style.border = '1px solid red';
  } else {
    this.style.border = '1px solid gray';
  }
});

window.addEventListener('scroll', function (e) {
  // console.log(this.scrollY);
  if (this.scrollY > 30) {
    ghost.style.display = 'flex';
  } else {
    ghost.style.display = 'none';
  }
});
