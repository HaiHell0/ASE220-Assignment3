//parsedAnimal[0]=$animalName, parsedAnimal[1]=$Type, parsedAnimal[2]=$Breed, parsedAnimal[3]=Second Breed 
//parsedAnimal[4]=$Sex, parsedAnimal[5]=$Color, parsedAnimal[6]=$Spayed/Neutered 
//parsedAnimal[7]=$Age, parsedAnimal[8]=$Details, parsedAnimal[9]=$ID, parsedAnimal[10]=$MicroChipNo, 
//parsedAnimal[11]=$Suit, parsedAnimal[12]=$AbtMe, parsedAnimal[13]=$Pics, parsed[14] = $Declawed

function displayAnimalDetails(parsedAnimal) {
    let animal = document.createElement("div");
    animal.innerHTML +=`<a href = "detail.html?index=${parsedAnimal[0]}">${parsedAnimal[0]}</a><br>`
    animal.innerHTML += `Name: ${parsedAnimal[0]}<br>`;
    animal.innerHTML += `Type: ${parsedAnimal[1]}<br>`;
    animal.innerHTML += `Breed: ${parsedAnimal[2]}<br>`;
    animal.innerHTML += `Second Breed: ${parsedAnimal[3]}<br>`;
    animal.innerHTML += `Sex: ${parsedAnimal[4]}<br>`;
    animal.innerHTML += `Declawed: ${parsedAnimal[14]}<br>`;
    animal.innerHTML += `Color: ${parsedAnimal[5]}<br>`;
    animal.innerHTML += `Sprayed/Neutered: ${parsedAnimal[6]}<br>`;
    animal.innerHTML += `Age: ${parsedAnimal[7]["Years"]} years, ${parsedAnimal[7]["Months"]} months, ${parsedAnimal[7]["Weeks"]} weeks ${parsedAnimal[7]["approx"] ? "(approx)" : ""}<br>`;
    animal.innerHTML +=
        `My health has been ${(parsedAnimal[8]["Health"]) ? "checked" : "not checked"}.
    <br>My vaccniations are ${parsedAnimal[8]["Vacc"] ? "" : "not"} up to date.
    <br>My worming is ${parsedAnimal[8]["Worming"] ? "" : "not"} up to date.
    <br>I have ${(parsedAnimal[8]["Microchipped"]) ? "" : "not"} been microchipped.
    <br>`;
    animal.innerHTML += `ID: ${parsedAnimal[9]}<br>Micro Chip Number: ${parsedAnimal[10]}<br>`;
    animal.innerHTML += `Suitability: ${parsedAnimal[11]}<br>`;
    animal.innerHTML += `About me: ${parsedAnimal[12]}<br>`;
    animal.innerHTML += `Pics:<br>`;
    for(var pics in parsedAnimal[13]){
        animal.innerHTML += `<img src=${parsedAnimal[13][pics]}>`;
    }
    animal.innerHTML += `<br><br>`;

    document.body.insertBefore(animal, $demo);
}
function main(){
    console.log(getAllUrlParams()["index"]);
    displayAnimalDetails(parseAnimal(getAnimalByName(getAllUrlParams()["index"])));
}
main()