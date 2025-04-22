document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");
    document.getElementById("username").textContent = username || "User";
  
    document.getElementById("statusForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const id = document.getElementById("complaintId").value.trim();
  
      if (!/^CMP\d{6}$/.test(id)) {
        alert("Please enter a valid Complaint ID (e.g., CMP123456)");
        return;
      }
  
      // Simulated complaint data - replace with API call as needed
      const dummyComplaint = {
        id: id,
        status: "In Progress",
        description: "Our technician has been assigned and will contact you shortly."
      };
  
      document.getElementById("resultId").textContent = dummyComplaint.id;
      document.getElementById("resultStatus").textContent = dummyComplaint.status;
      document.getElementById("resultDescription").textContent = dummyComplaint.description;
      document.getElementById("statusResult").style.display = "block";
    });
  });
  
  function logout() {
    localStorage.removeItem("username");
    window.location.href = "login.html";
  }
  