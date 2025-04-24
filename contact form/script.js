document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMessage').textContent = '';
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;
    if (name.length < 2) {
      document.getElementById('nameError').textContent = 'Please enter a valid name.';
      isValid = false;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email.';
      isValid = false;
    }
    if (message.length < 10) {
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
      isValid = false;
    }
    if (isValid) {
      document.getElementById('successMessage').textContent = 'Message sent successfully!';
      this.reset();
    }
  });