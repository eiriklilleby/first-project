const url = "https://flowerpowerstore.eu/wp-json/wc/store/products";
const specificUrl = "https://flowerpowerstore.eu/wp-json/wc/store/products/146";
const gameImage = document.querySelector(".games-container");
const bestContainer = document.querySelector(".container-best");
const mainImage = document.querySelector(".highlightedimg");

async function makeApiCall() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    gameImage.innerHTML = "";
    bestContainer.innerHTML = "";

    let count = 1;

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

      bestContainer.innerHTML += `
            <div class="container-long">
              <div class="small-box-best">
                <p>${count++}</p>
              </div>
              <div class="small-game-box">
                <a href="details.html?id=${games.id}">
                  <img src="${games.images[0].src}" alt="The outer worlds" />
                </a>
              </div>
              <div class="container-game-info">
                <div class="game-name">
                  <a href="details.html?id=${games.id}">
                    <p>${games.name}</p>
                  </a>
                </div>
                <div class="game-price">
                  <span class="prev-featured">${games.prices.regular_price}£</span>
                  <span class="current-featured">${games.prices.price}£</span>
                </div>
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

// toggles a class when you scroll down to games.

window.addEventListener("scroll", () => {
  const gameSelect = document.querySelector(".gamenav");
  const homeSelect = document.querySelector("#home");
  const windowPosition = window.scrollY > 800;

  if (window.scrollY < 800) {
    homeSelect.classList.add("target");
  } else {
    homeSelect.classList.remove("target");
  }

  gameSelect.classList.toggle("target", windowPosition);
});
