//default



async function getApiKey() {
  let response = await fetch("../data/apiKeys.json");
  return response.json();
}

getApiKey().then((keys) => {
  
  let apiKey = keys.apiKeys.newsKey;
  let searchWord = "fruit";

  var url =
    "https://newsapi.org/v2/everything?" +
    `q=${searchWord}&` +
    "from=2022-11-24&" +
    "sortBy=popularity&" +
    `apiKey=${apiKey}`;

  async function getArticles() {
    const articles = await fetch(url);
    return articles.json();
  }

  getArticles().then((allArticles) => {
    let bigNewsImage = document.getElementById("bigNewsImage");
    let smallNewsContainer = document.getElementById("smallNewsContainer")

    bigNewsImage.src = allArticles.articles[0].urlToImage;
    
    for(i=1; i < 7; i++){
      smallNewsContainer.children[i-1].children[0].src = allArticles.articles[i].urlToImage;
      smallNewsContainer.children[i-1].children[1].innerHTML = allArticles.articles[i].description;
      smallNewsContainer.children[i-1].children[2].children[0].innerHTML = allArticles.articles[i].source.name;
      
      

    }

    

    console.log(allArticles.articles);
    
  });
});
