const d = new Date();
document.getElementById('date').textContent =
  (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
