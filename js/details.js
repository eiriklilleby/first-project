const detailContainer = document.querySelector(".container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function makeApiCall() {
  try {
    const response = await fetch("https://flowerpowerstore.eu/wp-json/wc/store/products/" + id);

    const json = await response.json();
    console.log(json);
    detailContainer.innerHTML = "";

    detailContainer.innerHTML = `
    <div class="game-img">
    <img src="${json.images[0].src}" alt="game cover of ${json.name}" />
    </div>
    <div class="game-info">
    <h1>${json.name}</h1>
    <span class="prev-price">>${json.prices.regular_price}£</span>
    <span class="current-price">${json.prices.price}£</span>
    <p class="description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolor eos nisi non, dolorum rem omnis
    numquam voluptatibus repudiandae sequi cum magnam. Assumenda eaque magni obcaecati cupiditate, nisi est id
    non dicta corporis ab accusantium reiciendis doloribus odio molestiae quos neque quae ratione quam provident
    veniam excepturi deleniti animi nostrum.
    </p>
    <a class="gamebutton" href="checkout.html">Add to cart</a>
    </div>
    <div class="game-images">
    <img src="${json.images[1].src}" alt="game image of${json.name}" />
    <img src="${json.images[2].src}" alt="game image of${json.name}" />
    </div>
       `;

    document.title = json.name;
  } catch (error) {
    detailContainer.innerHTML = displayError();
    console.log(error);
  }
}

makeApiCall();
