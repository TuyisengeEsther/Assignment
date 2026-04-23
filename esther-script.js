// Highlight active nav based on current page
(function () {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
})();

// Contact form - prevent default submit
const sendBtn = document.querySelector('.btn-send');
if (sendBtn) {
  sendBtn.addEventListener('click', function (e) {
    e.preventDefault();
    sendBtn.textContent = '✓ Message Sent!';
    sendBtn.style.background = '#2d8a4e';
    setTimeout(() => {
      sendBtn.textContent = 'Send Message';
      sendBtn.style.background = '';
    }, 3000);
  });
}
