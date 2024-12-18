function showSignupForm() {
  document.getElementById('signup-form').style.display = 'block';
  document.getElementById('login-form').style.display = 'none';
}
function showLoginForm() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('signup-form').style.display = 'none';
}
function showDashboard(user) {
  document.getElementById('auth-container').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('user-name').innerText = user.name;
  document.getElementById('user-dashboard').innerText = `Role: ${user.role}`;
}
function logout() {
  localStorage.removeItem('user');
  window.location.reload();
}
document.getElementById('signup').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const role = document.getElementById('signup-role').value;
  const user = { name, email, password, role };
  localStorage.setItem('user', JSON.stringify(user));

  alert('Sign Up Successful!');
  showLoginForm();
});
document.getElementById('login').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser && storedUser.email === email && storedUser.password === password) {
    showDashboard(storedUser);
  } else {
    alert('Invalid credentials!');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const user = localStorage.getItem('user');
  if (user) {
    showDashboard(JSON.parse(user));
  } else {
    showSignupForm();
  }
});