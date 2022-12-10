let favouriteNews = JSON.parse(localStorage.getItem("favouriteNews"));

for (let i = 0; i < favouriteNews.length; i++) {
  let createContainer = document.createElement("div");
  createContainer.className = "smallNews";
  document.getElementById("content").appendChild(createContainer);

  let createImage = document.createElement("img");
  createImage.className = "articleImage";
  createImage.src = favouriteNews[i].favouriteUrlImg;
  createContainer.appendChild(createImage);

  let createArticleText = document.createElement("p");
  createArticleText.className = "articleText";
  createArticleText.innerHTML = favouriteNews[i].favouriteTitle;
  createContainer.appendChild(createArticleText);

  let createPublisherName = document.createElement("p");
  createPublisherName.className = "publisherName";
  createPublisherName.innerHTML = favouriteNews[i].favouriteSource;
  createContainer.appendChild(createPublisherName);
}
