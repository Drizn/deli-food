document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var sent = form.querySelector('.sent');
      if (sent) {
        sent.style.display = 'block';
      }
    });
  }
});
