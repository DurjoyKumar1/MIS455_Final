function fetchCountry() {
    const input = document.getElementById("countryInput").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
  
    if (!input) {
      resultDiv.innerHTML = "<p>Please enter a country name.</p>";
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${input}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Country not found");
      }
      return response.json();
    })
    .then(countries => {
      countries.forEach(country => {
        const currencyObj = country.currencies;
        const currency = currencyObj ? Object.values(currencyObj)[0].name : "N/A";

        const card = document.createElement("div");
        card.className = "country-card";

        card.innerHTML = `
          <h2>${country.name.common}</h2>
          <img src="${country.flags.png}" alt="Flag of ${country.name.common}" />
          <p><strong>Capital:</strong> ${country.capital?.[0] || "N/A"}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          <p><strong>Currency:</strong> ${currency}</p>
          <p><strong>Languages:</strong> ${Object.values(country.languages || {}).join(', ')}</p>
        `;

        resultDiv.appendChild(card);
      });
    });

}