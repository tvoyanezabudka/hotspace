
document.getElementById('toggle-theme').onclick = () => {
  const body = document.body;
  body.className = body.className === 'dark' ? 'light' : 'dark';
};
