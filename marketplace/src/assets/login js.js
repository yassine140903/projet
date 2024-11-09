window.myCustomFunction = function() {
    console.log("myCustomFunction is called!");
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return false;
    } else {
        message.textContent = ""; 
        return true;
    }
  };