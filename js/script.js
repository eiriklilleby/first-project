const url = "https://flowerpowerstore.eu/wp-json/wc/store/products";
const specificUrl = "https://flowerpowerstore.eu/wp-json/wc/store/products/146";
const gameImage = document.querySelector(".games-container");
const mainImage = document.querySelector(".highlightedimg");

async function makeApiCall() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    gameImage.innerHTML = "";

    console.log(json);
    json.forEach((games) => {
      gameImage.innerHTML += `
      <div class="container-games">
      <div class="game">
      <a href="details.html?id=${games.id}">
      <img src="${games.images[0].src}" alt="game cover of ${games.name}"></img>
      </a>
      </div>
      <div class="box-info">
     
      <div class="spanbox">
      <span class="prev-featured">${games.prices.regular_price}£</span>
      <span class="current-featured">${games.prices.price}£</span>
      </div>
      <img id="steam" src="/images/icons/steamlogo.png" alt="Steam logo" />
      </div>
      <div class="buttonbox">
      <a href="checkout.html">
      <button class="boxgame1">
      <img id="shopping" src="images/icons/shopping-cart.png" alt="Shopping cart" />ADD TO CART
      </button></a>
      </div>
      </div>
                                                                `;
    });
  } catch (error) {
    gameImage.innerHTML = displayError();
    console.log("An error has occured");
  }
}

makeApiCall();

async function singleApiCall() {
  try {
    const response = await fetch(specificUrl);
    const json = await response.json();
    console.log(json.images[0].src);

    mainImage.innerHTML = "";

    mainImage.style.backgroundImage = `url(${json.images[0].src})`;
    mainImage.innerHTML = `<div class="highlighted-overlay">
          <div class="highlighted-game-text">
            <h2>
              <a href="details.html?id=${json.id}">${json.name}</a>
            </h2>
            <p>Standard Edtion</p>
            <p>PC</p>
          </div>
          <div class="price-container">
            <div class="discount">
              <p>-11%</p>
            </div>
            <p class="prices-info">
              <span class="prev-featured">${json.prices.regular_price}£</span>
      <span class="current-featured">${json.prices.price}£</span>
            </p>
          </div>
          <div class="container-btn">
            <a href="checkout.html">
              <button class="pre-purchase">
                <img id="shopping" src="/images/icons/shopping-cart.png" alt="Shopping cart" />
                PRE-PURCHASE
              </button></a
            >
          </div>
        </div>`;
  } catch (error) {
    mainImage.innerHTML = displayError();
    console.log(error);
  }
}

singleApiCall();
