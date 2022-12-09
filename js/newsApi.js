

async function getApiKey() {
  let response = await fetch("../data/apiKeys.json");
  return response.json();
}

getApiKey().then((keys) => {
  let apiNewsKey = keys.apiKeys.newsKey;

  function startSearch(url) {
    async function getArticles() {
      const articles = await fetch(url);
      return articles.json();
    }

    getArticles()
      .then((allArticles) => {
        if (localStorage.getItem("alreadyRead") === null) {
          localStorage.setItem("alreadyRead", "[]");
        }
        function setBigArticleContent() {
          document.getElementById("bigNewsImage").src =
            allArticles.articles[0].urlToImage;
          document.getElementById("bigArticleText").innerHTML =
            allArticles.articles[0].title;
          document.getElementById("bigArticleAuthor").innerHTML =
            "- " + allArticles.articles[0].source.name;
        }
        function setSmallArticleContent() {
          for (i = 1; i < 7; i++) {
            let smallNewsContainer =
              document.getElementById("smallNewsContainer");
            smallNewsContainer.children[i - 1].children[1].src =
              allArticles.articles[i].urlToImage;
            smallNewsContainer.children[i - 1].children[2].innerHTML =
              allArticles.articles[i].title;
            smallNewsContainer.children[
              i - 1
            ].children[3].children[0].innerHTML =
              allArticles.articles[i].source.name;
          }
        }
        let btn0 = document.getElementById("button0");
        let btn1 = document.getElementById("button1");
        let btn2 = document.getElementById("button2");
        let btn3 = document.getElementById("button3");
        let btn4 = document.getElementById("button4");
        let btn5 = document.getElementById("button5");
        let btn6 = document.getElementById("button6");
        let readTextArray = [
          document.getElementById("readTextHelper1"),
          document.getElementById("readTextHelper2"),
          document.getElementById("readTextHelper3"),
          document.getElementById("readTextHelper4"),
          document.getElementById("readTextHelper5"),
          document.getElementById("readTextHelper6"),
        ];

        let oldalreadyRead = JSON.parse(localStorage.getItem("alreadyRead"));

        let readImage = document.getElementById("readImage");
        let readLink = document.getElementById("readLink");
        let readAuthor = document.getElementById("readAuthor");
        let readTitle = document.getElementById("readTitle");
        let readText = document.getElementById("readText");

        function checkIfArticleRead() {
          for (p = 0; p < 6; p++) {
            for (x = 0; x < oldalreadyRead.length; x++) {
              if (
                smallNewsContainer.children[p].children[2].innerHTML.slice(
                  0,
                  10
                ) === oldalreadyRead[x].slice(0, 10)
              ) {
                readTextArray[p].style.visibility = "visible";
              } 
              
            }
          }
        }
        

        function setReadArticleContent(button, index) {
          button.addEventListener("click", (e) => {
            document.getElementById("articleReadContainer").style.display =
              "flex";
            readImage.src = allArticles.articles[index].urlToImage;
            readLink.href = allArticles.articles[index].url;
            readAuthor.innerHTML = allArticles.articles[index].source.name;
            readTitle.innerHTML = allArticles.articles[index].title;
            readText.innerHTML = allArticles.articles[index].content;

            function setLocaleStorage(parameter) {
              oldalreadyRead.push(allArticles.articles[parameter].title);
              localStorage.setItem(
                "alreadyRead",
                JSON.stringify(oldalreadyRead)
              );
            }

            setLocaleStorage(index);
            readTextArray[index - 1].style.visibility = "visible";
            document.getElementById("readLink").style.visibility = "visible";
          });
        }
        
        function favouriteFunction(){
          if (localStorage.getItem("favouriteNews") === null) {
            localStorage.setItem("favouriteNews", "[]");
          }
  
          let mainContainer = document.getElementById("smallNewsContainer");
          let oldFavourite = JSON.parse(localStorage.getItem("favouriteNews"));
  
          function setFavourite(button, index) {
            button.addEventListener("click", () => {
              oldFavourite.push(
                {favouriteTitle: allArticles.articles[index+1].title, favouriteUrlImg : allArticles.articles[index+1].urlToImage, favouriteSource : allArticles.articles[index+1].source.name }
              );
              localStorage.setItem("favouriteNews", JSON.stringify(oldFavourite));
              checkFavourite();
            });
          }

          function checkFavourite(){
            for(u=0;u<6;u++){
              mainContainer.children[u].children[4].src = "../images/green-love.png";
            }

            for(i=0;i<oldFavourite.length;i++){
              for(p=0;p<6;p++){
                if(oldFavourite[i].favouriteTitle === allArticles.articles[p+1].title){
                  mainContainer.children[p].children[4].src = "../images/heartRed.png"
                }
              }
            }
          }
          
          checkFavourite();
  
          let favouriteButton1 = document.getElementById("favouriteButton1");
          let favouriteButton2 = document.getElementById("favouriteButton2");
          let favouriteButton3 = document.getElementById("favouriteButton3");
          let favouriteButton4 = document.getElementById("favouriteButton4");
          let favouriteButton5 = document.getElementById("favouriteButton5");
          let favouriteButton6 = document.getElementById("favouriteButton6");
  
          setFavourite(favouriteButton1, 0);
          setFavourite(favouriteButton2, 1);
          setFavourite(favouriteButton3, 2);
          setFavourite(favouriteButton4, 3);
          setFavourite(favouriteButton5, 4);
          setFavourite(favouriteButton6, 5);
          
        }
        setBigArticleContent();
        setSmallArticleContent();
        checkIfArticleRead();
        setReadArticleContent(btn0, 0);
        setReadArticleContent(btn1, 1);
        setReadArticleContent(btn2, 2);
        setReadArticleContent(btn3, 3);
        setReadArticleContent(btn4, 4);
        setReadArticleContent(btn5, 5);
        setReadArticleContent(btn6, 6);
        favouriteFunction();
      })
      .catch((err) => {
        console.log(err);
        alert("News didnt fully load");
      });
  }

  
 
  let url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    `apiKey=${apiNewsKey}`;

  startSearch(url);

  document.getElementById("submit").addEventListener("click", (e) => {
    let searchField = document.getElementById("searchbar");
    //prettier-ignore
    let languageArray = ["ar","de","en","es","fr","he","it","nl","no","pt","ru","sv","ud","zh",];
    //prettier-ignore
    let categoryArray = ["business","entertainment","general","health","science","sports", "technology",];

    let readTextArray = [
      document.getElementById("readTextHelper1"),
      document.getElementById("readTextHelper2"),
      document.getElementById("readTextHelper3"),
      document.getElementById("readTextHelper4"),
      document.getElementById("readTextHelper5"),
      document.getElementById("readTextHelper6"),
    ];
    let status = "unactive";

    function categoryAndLanguage() {
      for (i = 0; i < languageArray.length; i++) {
        for (x = 0; x < categoryArray.length; x++) {
          if (searchField.value === languageArray[i]) {
            status = "active";
            let searchLanguageWord = searchField.value;
            url =
              "https://newsapi.org/v2/top-headlines?" +
              `language=${searchLanguageWord}&` +
              `apiKey=${apiNewsKey}`;

            for (i = 0; i < readTextArray.length; i++) {
              readTextArray[i].style.visibility = "hidden";
            }
            startSearch(url);
            return;

          } else if (searchField.value === categoryArray[x]) {
            status = "active";
            let searchCategoryWord = searchField.value;
            url =
              "https://newsapi.org/v2/top-headlines?" +
              `category=${searchCategoryWord}&` +
              "language=en&" +
              `apiKey=${apiNewsKey}`;

            for (i = 0; i < readTextArray.length; i++) {
              readTextArray[i].style.visibility = "hidden";
            }
            startSearch(url);
            return;
          }
        }
      }
    }

    function searchWord() {
      if (searchField.value === "") {
        alert("error - no search value");
      } else {
        let searchWord = searchField.value;
        url =
          "https://newsapi.org/v2/everything?" +
          `q=${searchWord}&` +
          "from=2022-11-24&" +
          "sortBy=popularity&" +
          `apiKey=${apiNewsKey}`;
        for (i = 0; i < readTextArray.length; i++) {
          readTextArray[i].style.visibility = "hidden";
        }
        startSearch(url);
      }
    }

    categoryAndLanguage();
    if (status === "unactive") {
      searchWord();
    }

  }); 
});



