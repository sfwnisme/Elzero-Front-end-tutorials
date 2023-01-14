let fet = fetch(
  `https://api.freecurrencyapi.com/v1/latest?apikey=HiqjYX8Y4yTyuYCRJBe1HzlO2T2LEuTN3B96tX6q&currencies=EUR%2CUSD%2CCAD`
);

fet
  .then((api) => api.json())
  .then((data) => {
    console.log(data.data);
    let price = data.data;
    let cad = document.createElement("div");
    let eur = document.createElement("div");
    let usd = document.createElement("div");

    cad.innerHTML = `cad ${price.CAD}`;
    eur.innerHTML = `eur ${price.EUR}`;
    usd.innerHTML = `usd ${price.USD}`;

    let currency = document.createElement("section");
    currency.append(cad);
    currency.append(eur);
    currency.append(usd);

    document.body.append(currency);
  });
