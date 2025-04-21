// script.js
function showRegistration() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("regSuccess").style.display = "none";
  }
  
  function goBackToLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }
  
  function login() {
    const userId = document.getElementById("loginUserId").value;
    const password = document.getElementById("loginPassword").value;
  
    if (userId && password) {
      alert("Login successful (Static check)");
    } else {
      alert("Please enter User ID and Password");
    }
  }
  
  function registerCustomer(event) {
    event.preventDefault();
  
    const consumerId = Math.floor(1000000000000 + Math.random() * 9000000000000);
    const billNumber = document.getElementById("billNumber").value;
    const title = document.getElementById("title").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const countryCode = document.getElementById("countryCode").value;
    const mobile = document.getElementById("mobile").value;
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (!/^\d{5}$/.test(billNumber)) {
      alert("Bill number must be a 5-digit number");
      return;
    }
  
    if (!/^\d{10}$/.test(mobile)) {
      alert("Mobile number must be a 10-digit number");
      return;
    }
  
    if (userId.length < 5 || userId.length > 20) {
      alert("User ID must be between 5 and 20 characters");
      return;
    }
  
    if (password.length > 30) {
      alert("Password must not exceed 30 characters");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    document.getElementById("ackConsumerId").textContent = consumerId;
    document.getElementById("ackName").textContent = name;
    document.getElementById("ackEmail").textContent = email;
    document.getElementById("regSuccess").style.display = "block";
  
    document.getElementById("registerForm").reset();
  }
  