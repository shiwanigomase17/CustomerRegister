// Get the username from localStorage and display it
document.getElementById("username").textContent = localStorage.getItem("username") || "Guest";

// Logout function
function logout() {
    localStorage.removeItem("username");
    window.location.href = "login.html"; // Redirect to login page
}

// Redirect back to home page
function goBackToHome() {
    window.location.href = "home.html"; // Redirect to home page
}

// Show the credit card payment screen
function proceedToPayment() {
    document.querySelector(".payment-details").style.display = "none";
    document.querySelector(".card-details").style.display = "block";
}

// Handle card payment
function makePayment() {
    const cardNumber = document.getElementById("cardNumber").value;
    const cardHolderName = document.getElementById("cardHolderName").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;

    if (cardNumber.length === 16 && cardHolderName.length >= 10 && expiryDate && cvv.length >= 3) {
        const transactionId = "TX" + Math.floor(Math.random() * 1000000);
        document.getElementById("transactionId").textContent = transactionId;
        document.querySelector(".card-details").style.display = "none";
        document.querySelector(".transaction-details").style.display = "block";
    } else {
        alert("Please enter valid card details.");
    }
}

// Handle receipt download
function downloadReceipt() {
    const transactionDetails = {
        transactionId: document.getElementById("transactionId").textContent,
        amountPaid: document.getElementById("totalAmount").textContent,
    };
    
    const blob = new Blob([JSON.stringify(transactionDetails, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "receipt.json";
    link.click();
}
