var a = document.querySelector('#contct');
var b = document.querySelector('.popup');
var c = document.querySelector('.close');

a.addEventListener('click', function () {
  b.style.display = 'flex';
});

c.addEventListener('click', function () {
  b.style.display = 'none';
});
