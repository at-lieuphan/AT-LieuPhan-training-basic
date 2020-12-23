var collapse = document.querySelector('.collapse');
document.addEventListener('click', function(e) {
  if (!collapse.classList.contains('show') && e.target.classList.contains('fa-search')) {
    collapse.classList.add('show');
  } else if(e.target.classList.contains('input-search')) {
    collapse.classList.add('show');
  } else {
    collapse.classList.remove('show');
  }
})

function clickOpenMenu() {
  var x = document.getElementById('js-nav-bar');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
