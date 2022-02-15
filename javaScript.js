let $demo = document.getElementById("demo")

function parseAnimal(dict) {
    var $animalName, $Type, $Breed, $SecondBread ,$Sex, $Color,$SprayedNeutered, $Age, $Details, $ID, $MicroChipNo,$Suit, $AbtMe, $Pics,$Declawed
    for (var k in dict) {
        switch (k) {
            case "Name": $animalName = dict[k]; break;
            case "Type": $Type = dict[k]; break;
            case "Breed": $Breed = dict[k]; break;
            case "SecondBreed": $SecondBreed = dict[k]; break;
            case "Sex": $Sex = dict[k]; break;
            case "Color": $Color = dict[k]; break;
            case "SprayedNeutered": $SprayedNeutered = dict[k]; break;
            case "Age": $Age = dict[k]; break;
            case "Details": $Details = dict[k]; break;
            case "AnimalId": $ID = dict[k]["ID"];$MicroChipNo = dict[k]["MicroChipNo"];break;
            case "Suitability": $Suit = dict[k];break;
            case "AbtMe": $AbtMe = dict[k]; break;
            case "Pics": $Pics = dict[k]; break;
            case "Declawed": $Declawed = dict[k];break;
        }
    }
    console.log("Parse dog: ", $animalName, $Type, $Breed, $SecondBread ,$Sex, $Color,$SprayedNeutered, $Age, $Details, $ID, $MicroChipNo,$Suit, $AbtMe, $Pics,$Declawed);
    return [$animalName, $Type, $Breed, $SecondBread ,$Sex, $Color,$SprayedNeutered, $Age, $Details, $ID, $MicroChipNo,$Suit, $AbtMe, $Pics,$Declawed];
}

function getAnimalByName(animalName) {
    var $animalName

    for (var key in animalList) {

        if (animalList[key]["Name"].toLowerCase() === animalName.toLowerCase()) {
            $animalName = key;
            return (animalList[key]);
        }
    }
}


