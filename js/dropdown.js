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
