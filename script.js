// Detect if the browser is Google Chrome
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if (!isChrome) {
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('block-message').style.display = 'block';
} else {
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('block-message').style.display = 'none';
}
