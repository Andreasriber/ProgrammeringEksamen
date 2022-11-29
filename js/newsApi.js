
async function getApiKey() {
  let response = await fetch("../data/apiKeys.json");
  return response.json();
}

getApiKey().then((keys) => {
  let apiNewsKey = keys.apiKeys.newsKey;
  var url =

  'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `apiKey=${apiNewsKey}`;

  async function getArticles() {
    const articles = await fetch(url);
    return articles.json();
  }

  getArticles().then((allArticles) => {
    console.log(allArticles)
    let bigNewsImage = document.getElementById("bigNewsImage");
    let bigArticleText = document.getElementById("bigArticleText")
    let bigArticleAuthor = document.getElementById ("bigArticleAuthor")
    let smallNewsContainer = document.getElementById("smallNewsContainer")

    bigNewsImage.src = allArticles.articles[0].urlToImage;
    bigArticleText.innerHTML = allArticles.articles[0].title
    bigArticleAuthor.innerHTML = "- " +allArticles.articles[0].source.name
    
    for(i=1; i < 7; i++){
      smallNewsContainer.children[i-1].children[1].src = allArticles.articles[i].urlToImage;
      smallNewsContainer.children[i-1].children[2].innerHTML = allArticles.articles[i].title;
      smallNewsContainer.children[i-1].children[3].children[0].innerHTML = allArticles.articles[i].source.name;
    }
    
    /*
    for(i=0;i<6;i++){
      let number = toString(i);
      document.getElementById(`button${number}`)
      
    } */

    let btn0 = document.getElementById("button0")
    let btn1 = document.getElementById("button1")
    let btn2 = document.getElementById("button2")
    let btn3 = document.getElementById("button3")
    let btn4 = document.getElementById("button4")
    let btn5 = document.getElementById("button5")
    let btn6 = document.getElementById("button6")

    let readImage = document.getElementById("readImage")
    let readLink = document.getElementById("readLink")
    let readAuthor = document.getElementById("readAuthor")
    let readTitle = document.getElementById("readTitle")
    let readText = document.getElementById("readText")

    btn0.addEventListener("click",(e)=>{
      readImage.src = allArticles.articles[0].urlToImage
      readLink.href = allArticles.articles[0].url
      readAuthor.innerHTML = allArticles.articles[0].source.name
      readTitle.innerHTML = allArticles.articles[0].title
      readText.innerHTML = allArticles.articles[0].content
      if(localStorage.getItem("alreadyRead") == null){
        localStorage.setItem("alreadyRead", "[]")
        }
        let oldalreadyRead = JSON.parse(localStorage.getItem("alreadyRead"));
        oldalreadyRead.push(allArticles.articles[0].title)
        localStorage.setItem("alreadyRead", JSON.stringify(oldalreadyRead))  
      
    })
    btn1.addEventListener("click",(e)=>{
      readImage.src = allArticles.articles[1].urlToImage
      readLink.href = allArticles.articles[1].url
      readAuthor.innerHTML = allArticles.articles[1].source.name
      readTitle.innerHTML = allArticles.articles[1].title
      readText.innerHTML = allArticles.articles[1].content
      if(localStorage.getItem("alreadyRead") == null){
        localStorage.setItem("alreadyRead", "[]")
        }
        let oldalreadyRead = JSON.parse(localStorage.getItem("alreadyRead"));
        oldalreadyRead.push(allArticles.articles[1].title)
        localStorage.setItem("alreadyRead", JSON.stringify(oldalreadyRead))  
    })
    btn2.addEventListener("click",(e)=>{
      readImage.src = allArticles.articles[2].urlToImage
      readLink.href = allArticles.articles[2].url
      readAuthor.innerHTML = allArticles.articles[2].source.name
      readTitle.innerHTML = allArticles.articles[2].title
      readText.innerHTML = allArticles.articles[2].content
      if(localStorage.getItem("alreadyRead") == null){
        localStorage.setItem("alreadyRead", "[]")
        }
        let oldalreadyRead = JSON.parse(localStorage.getItem("alreadyRead"));
        oldalreadyRead.push(allArticles.articles[2].title)
        localStorage.setItem("alreadyRead", JSON.stringify(oldalreadyRead))  
    })
    btn3.addEventListener("click",(e)=>{
      readImage.src = allArticles.articles[3].urlToImage
      readLink.href = allArticles.articles[3].url
      readAuthor.innerHTML = allArticles.articles[3].source.name
      readTitle.innerHTML = allArticles.articles[3].title
      readText.innerHTML = allArticles.articles[3].content
      if(localStorage.getItem("alreadyRead") == null){
        localStorage.setItem("alreadyRead", "[]")
        }
        let oldalreadyRead = JSON.parse(localStorage.getItem("alreadyRead"));
        oldalreadyRead.push(allArticles.articles[3].title)
        localStorage.setItem("alreadyRead", JSON.stringify(oldalreadyRead))  
    })
    btn4.addEventListener("click",(e)=>{
      readImage.src = allArticles.articles[4].urlToImage
      readLink.href = allArticles.articles[4].url
      readAuthor.innerHTML = allArticles.articles[4].source.name
      readTitle.innerHTML = allArticles.articles[4].title
      readText.innerHTML = allArticles.articles[4].content
      if(localStorage.getItem("alreadyRead") == null){
        localStorage.setItem("alreadyRead", "[]")
        }
        let oldalreadyRead = JSON.parse(localStorage.getItem("alreadyRead"));
        oldalreadyRead.push(allArticles.articles[4].title)
        localStorage.setItem("alreadyRead", JSON.stringify(oldalreadyRead))  
    })
    btn5.addEventListener("click",(e)=>{
      readImage.src = allArticles.articles[5].urlToImage
      readLink.href = allArticles.articles[5].url
      readAuthor.innerHTML = allArticles.articles[5].source.name
      readTitle.innerHTML = allArticles.articles[5].title
      readText.innerHTML = allArticles.articles[5].content
      if(localStorage.getItem("alreadyRead") == null){
        localStorage.setItem("alreadyRead", "[]")
        }
        let oldalreadyRead = JSON.parse(localStorage.getItem("alreadyRead"));
        oldalreadyRead.push(allArticles.articles[5].title)
        localStorage.setItem("alreadyRead", JSON.stringify(oldalreadyRead))  
    })
    btn6.addEventListener("click",(e)=>{
      readImage.src = allArticles.articles[6].urlToImage
      readLink.href = allArticles.articles[6].url
      readAuthor.innerHTML = allArticles.articles[6].source.name
      readTitle.innerHTML = allArticles.articles[6].title
      readText.innerHTML = allArticles.articles[6].content
      if(localStorage.getItem("alreadyRead") == null){
        localStorage.setItem("alreadyRead", "[]")
        }
        let oldalreadyRead = JSON.parse(localStorage.getItem("alreadyRead"));
        oldalreadyRead.push(allArticles.articles[6].title)
        localStorage.setItem("alreadyRead", JSON.stringify(oldalreadyRead))  
    })
  });
});


