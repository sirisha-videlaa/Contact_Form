# Contact_Form
#html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Contact Us</h2>
    <form class="contact-form" id="contactForm">
    <div class="form-group">
      <label for="name">Name *</label>
      <input type="text" id="name" required>
      <div class="error" id="nameError"></div>
    </div>

    <div class="form-group">
      <label for="email">Email *</label>
      <input type="email" id="email" required>
      <div class="error" id="emailError"></div>
    </div>

    <div class="form-group">
      <label for="message">Message *</label>
      <textarea id="message" required></textarea>
      <div class="error" id="messageError"></div>
    </div>

    <button type="submit" class="submit-btn">Send</button>
    <div class="success-message" id="successMessage"></div>
  </form>
  <script src="script.js"></script>
</body>
</html>

#css

* {
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }

  body {
    background: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .contact-form {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }

  .contact-form h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: pink;
    outline: none;
  }

  .form-group textarea {
    resize: vertical;
    height: 100px;
  }

  .error {
    color: red;
    font-size: 0.85em;
    margin-top: 5px;
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(orange, gold);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .submit-btn:hover {
    background: orange;
  }

  .success-message {
    color: green;
    text-align: center;
    margin-top: 10px;
  }

  #javascript

 
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
