function logout() {
    localStorage.removeItem("username");
    window.location.href = "login.html";
  }
  
  function navigateTo(page) {
    switch (page) {
      case "home":
        window.location.href = "home.html";
        break;
      case "pay":
        window.location.href = "paymet.html";
        document.getElementById("pay-bill-section").scrollIntoView({ behavior: "smooth" });
        break;
      case "complaint":
        window.location.href = "complaint.html";
        break;
      case "status":
        window.location.href = "complaint-status.html";
        break;
      default:
        alert("Invalid page");
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".bill-checkbox");
    const totalAmountSpan = document.getElementById("totalAmount");
  
    checkboxes.forEach((cb) => {
      cb.addEventListener("change", updateTotal);
    });
  
    function updateTotal() {
      let total = 0;
      checkboxes.forEach((cb) => {
        if (cb.checked) {
          total += parseFloat(cb.value);
        }
      });
      totalAmountSpan.textContent = total;
    }
  
    window.proceedToPayment = function () {
      window.location.href = "payment.html";
    };
  
    // Example: Set username dynamically
    const storedUsername = localStorage.getItem("username") || "User";
    document.getElementById("username").textContent = storedUsername;
  });