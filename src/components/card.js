import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardEl = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthorEl = document.createElement("div");
  const imgContainer = document.createElement("div");
  const cardAuthorPhoto = document.createElement("img");
  const cardAuthorName = document.createElement("span");

  cardEl.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthorEl.classList.add("author");
  imgContainer.classList.add("img-container");
  cardAuthorPhoto.setAttribute("src", article.authorPhoto);

  cardHeadline.textContent = article.headline;
  cardAuthorName.textContent = article.authorName;

  cardEl.appendChild(cardHeadline);
  imgContainer.appendChild(cardAuthorPhoto);
  cardAuthorEl.appendChild(imgContainer);
  cardAuthorEl.appendChild(cardAuthorName);
  cardEl.appendChild(cardAuthorEl);

  cardEl.addEventListener("click", () => {
    console.log(article.headline);
  });

  return cardEl;
};

// for (let i = 0; i < articles.length; i++) {
//   cardAppender(articles[i]);
// }

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios
    .get(`http://localhost:5000/api/articles`)
    .then((resp) => {
      console.log(resp.data);
      const jsArticles = resp.data.articles.javascript;
      const bootstrapArticles = resp.data.articles.bootstrap;
      const techArticles = resp.data.articles.technology;
      const jqArticles = resp.data.articles.jquery;
      const nodeArticles = resp.data.articles.node;

      const allArticles = jsArticles.concat(
        bootstrapArticles,
        techArticles,
        jqArticles,
        nodeArticles
      );
      for (let i = 0; i < allArticles.length; i++) {
        document.querySelector(selector).appendChild(Card(allArticles[i]));
      }
    })
    .catch((err) => console.error(err));
};

export { Card, cardAppender };
