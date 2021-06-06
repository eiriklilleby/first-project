const detailContainer = document.querySelector(".container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function makeApiCall() {
  try {
    const response = await fetch("https://flowerpowerstore.eu/wp-json/wc/store/products/" + id);

    const json = await response.json();

    detailContainer.innerHTML = "";

    detailContainer.innerHTML = `
  <div class="game-img">
    <img src="${json.images[0].src}" alt="game cover of ${json.name}" data-original="${json.images[0].src}" />
          </div>
           <div class="image-show">
            <img src="${json.images[0].src}" alt="" class="max-img" />
          </div>
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
          <div class="game-img small-img">
          <img src="${json.images[1].src}" alt="game image of${json.name}" data-original="${json.images[1].src}" />
          <img src="${json.images[2].src}" alt="game image of${json.name}" data-original="${json.images[2].src}" />
        </div>
    
       `;

    const showImage = document.querySelector(".image-show");
    const preview = document.querySelectorAll(".game-img img");
    const original = document.querySelector(".max-img");

    preview.forEach((previews) => {
      previews.addEventListener("click", () => {
        showImage.classList.add("open");
        original.classList.add("open");
        // Targetting the right source for every image
        const srcOrignal = previews.getAttribute("data-original");
        original.src = `${srcOrignal}`;
      });
    });

    showImage.addEventListener("click", (e) => {
      if (e.target.classList.contains("image-show")) {
        showImage.classList.remove("open");
        original.classList.remove("open");
      }
    });

    document.title = json.name;
  } catch (error) {
    detailContainer.innerHTML = displayError();
    console.log(error);
  }
}

makeApiCall();
