if (localStorage.getItem("alreadyRead") === null) {
  localStorage.setItem("alreadyRead", "[]");
}

async function getApiKey() {
  let response = await fetch("../data/apiKeys.json");
  return response.json();
}

getApiKey().then((keys) => {
  let apiNewsKey = keys.apiKeys.newsKey;

  function activate(url) {
    async function getArticles() {
      const articles = await fetch(url);
      return articles.json();
    }

    getArticles().then((allArticles) => {
      let bigNewsImage = document.getElementById("bigNewsImage");
      let bigArticleText = document.getElementById("bigArticleText");
      let bigArticleAuthor = document.getElementById("bigArticleAuthor");
      let smallNewsContainer = document.getElementById("smallNewsContainer");

      bigNewsImage.src = allArticles.articles[0].urlToImage;
      bigArticleText.innerHTML = allArticles.articles[0].title;
      bigArticleAuthor.innerHTML = "- " + allArticles.articles[0].source.name;

      for (i = 1; i < 7; i++) {
        smallNewsContainer.children[i - 1].children[1].src =
          allArticles.articles[i].urlToImage;
        smallNewsContainer.children[i - 1].children[2].innerHTML =
          allArticles.articles[i].title;
        smallNewsContainer.children[i - 1].children[3].children[0].innerHTML =
          allArticles.articles[i].source.name;
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

      //barn [0] af small news
      let readImage = document.getElementById("readImage");
      let readLink = document.getElementById("readLink");
      let readAuthor = document.getElementById("readAuthor");
      let readTitle = document.getElementById("readTitle");
      let readText = document.getElementById("readText");

      function checkIfRead() {
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
      checkIfRead();

      function helper(button, index) {
        button.addEventListener("click", (e) => {
          readImage.src = allArticles.articles[index].urlToImage;
          readLink.href = allArticles.articles[index].url;
          readAuthor.innerHTML = allArticles.articles[index].source.name;
          readTitle.innerHTML = allArticles.articles[index].title;
          readText.innerHTML = allArticles.articles[index].content;

          function setLocaleStorage(parameter) {
            oldalreadyRead.push(allArticles.articles[parameter].title);
            localStorage.setItem("alreadyRead", JSON.stringify(oldalreadyRead));
          }

          setLocaleStorage(index);
          readTextArray[index - 1].style.visibility = "visible";

          document.getElementById("readLink").style.visibility = "visible";
        });
      }
      helper(btn0, 0);
      helper(btn1, 1);
      helper(btn2, 2);
      helper(btn3, 3);
      helper(btn4, 4);
      helper(btn5, 5);
      helper(btn6, 6);
    });
  }

  let searchField = document.getElementById("searchbar");

  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    `apiKey=${apiNewsKey}`;

  activate(url);

  document.getElementById("submit").addEventListener("click", () => {
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
      let readTextArray = [
        document.getElementById("readTextHelper1"),
        document.getElementById("readTextHelper2"),
        document.getElementById("readTextHelper3"),
        document.getElementById("readTextHelper4"),
        document.getElementById("readTextHelper5"),
        document.getElementById("readTextHelper6"),
      ];
      for (i = 0; i < readTextArray.length; i++) {
        readTextArray[i].style.visibility = "hidden";
      }
      activate(url);
    }
  });
});
