var buttonTranslator = document.querySelector("#btn-click");
var textInputValue = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var url = "	https://api.funtranslations.com/translate/yoda.json";

function getTranslatedUrl(text) {
  return url + "?" + "text=" + text;
}

function catchEventHandler(error) {
  console.log("Oops! Error occured..." + error);
  alert("Oops! Some error occured. Please, try again after some time");
}

function clickHandler() {
  console.log("Clicked");
  var textInput = textInputValue.value;
  fetch(getTranslatedUrl(textInput))
    .then((reponse) => reponse.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerHTML = translatedText;
    })
    .catch(catchEventHandler);
}

buttonTranslator.addEventListener("click", clickHandler);


