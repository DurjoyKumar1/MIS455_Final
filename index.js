function fetchCountry() {
    const input = document.getElementById("countryInput").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
  
    if (!input) {
      resultDiv.innerHTML = "<p>Please enter a country name.</p>";
      return;
    }
    

}