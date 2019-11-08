import React, { useState } from "react";
const App = () => {
  const rates = {
    AED: 4.184818,
    AFN: 86.247717,
    ALL: 124.299351
  };
  const [currency1, setCurrency1] = useState("");
  const [currencyName, setCurrencyname] = useState("");

  const handleChange = event => {
    const value = event.target.value;
  };

  const handleCurrency1Change = event => {
    const value = event.target.value;
    setCurrency1(value);
  };
  const handlecurrencyNameChange = event => {
    const value = event.target.value;
    setCurrencyname(value);
  };
  const handleSubmit = event => {
    const result = currency1 * rates[currencyName];
    return result; // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    console.log(result);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Votre montant"
          type="text"
          name="email"
          value={currency1}
          onChange={handleCurrency1Change}
        />

        <input
          placeholder="Le nom de la devise"
          type="text"
          name="password"
          value={currencyName}
          onChange={handlecurrencyNameChange}
        />

        <input type="submit" value="Submit" />
      </form>

      <div class="results">
        <h3>{handleSubmit()}</h3>
      </div>
    </div>
  );
};
export default App;
