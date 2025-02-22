document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const scriptURL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
    
    fetch(scriptURL, { method: "POST", body: formData })
        .then(response => document.getElementById("response-message").innerText = "Message sent successfully!")
        .catch(error => document.getElementById("response-message").innerText = "Error sending message.");
    
    this.reset();
});
