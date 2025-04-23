document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    // Input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Name validation
    if (name.length < 2) {
      document.getElementById('nameError').textContent = 'Please enter a valid name.';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email.';
      isValid = false;
    }

    // Message validation
    if (message.length < 10) {
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
      isValid = false;
    }

    // If valid, show success
    if (isValid) {
      document.getElementById('successMessage').textContent = 'Message sent successfully!';
      // Optionally reset form
      this.reset();
    }
  });