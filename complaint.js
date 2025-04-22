document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");
    document.getElementById("username").textContent = username || "User";
  
    document.getElementById("complaintForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const consumerNo = document.getElementById("consumerNo").value;
      const mobile = document.getElementById("mobile").value;
  
      if (!/^\d{13}$/.test(consumerNo)) {
        alert("Consumer number must be 13 digits");
        return;
      }
  
      if (!/^\d{10}$/.test(mobile)) {
        alert("Mobile number must be 10 digits");
        return;
      }
  
      const complaintId = "CMP" + Math.floor(100000 + Math.random() * 900000);
      document.getElementById("complaintId").textContent = complaintId;
      document.getElementById("complaintSuccess").style.display = "block";
      document.getElementById("complaintForm").reset();
    });
  });
  
  function populateCategory() {
    const type = document.getElementById("complaintType").value;
    const category = document.getElementById("category");
  
    const options = {
      Billing: ["High Bill", "Incorrect Charges", "No Bill"],
      Voltage: ["Low Voltage", "Fluctuations"],
      Disruption: ["Power Cuts", "Frequent Outages"],
      "Street Light": ["Not Working", "Blinking", "Pole Broken"],
      Pole: ["Leaning Pole", "Broken Pole"]
    };
  
    category.innerHTML = "";
    if (options[type]) {
      options[type].forEach(opt => {
        const option = document.createElement("option");
        option.text = opt;
        category.add(option);
      });
    }
  }
  
  function resetForm() {
    document.getElementById("complaintForm").reset();
    location.reload();
  }
  
  function logout() {
    localStorage.removeItem("username");
    window.location.href = "login.html";
  }
  