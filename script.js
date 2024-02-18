var a = document.querySelector('#contct');
var b = document.querySelector('.popup');
var c = document.querySelector('.close');
var d = document.querySelector('#cls');
var e = document.querySelector('.arrow');

a.addEventListener('click', function () {
  b.style.display = 'flex';
});

c.addEventListener('click', function () {
  b.style.display = 'none';
});

d.addEventListener('click', function () {
  b.style.display = 'none';
});

e.addEventListener('click', function () {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'end' });
});
