/*
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
  for (let i = 0; i < languageArray.length; i++) {
    for (let x = 0; x < categoryArray.length; x++) {
      if (searchField.value === languageArray[i]) {
        status = "active";
        let searchLanguageWord = searchField.value;
        url =
          "https://newsapi.org/v2/top-headlines?" +
          `language=${searchLanguageWord}&` +
          `apiKey=${apiNewsKey}`;

        for (let i = 0; i < readTextArray.length; i++) {
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

        for (let i = 0; i < readTextArray.length; i++) {
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
    for (let i = 0; i < readTextArray.length; i++) {
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
*/
