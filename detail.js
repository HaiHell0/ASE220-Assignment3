var urlParam = getAllUrlParams()["index"];
function displayAnimalDetails(urlParam) {
  var dog = animalList[urlParam];
  document.getElementById(
    "detail"
  ).innerHTML += `<h2>${dog.Name}'s Details</h2>`;
}
displayAnimalDetails(urlParam);
