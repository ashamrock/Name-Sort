var array = ["Sally", "Andrew", "Miller kitten", "Hazel", "Hannah"];
var names = [];
var firstName = [];
var maxLength = 0;
var place = 0;

do {
array.forEach(sort);
function sort(value, index, array) {
     console.log(" max=" + maxLength + " val=" + value.length + " index=" + place);

    if (maxLength < value.length){
        maxLength = value.length;
        place = index;
        firstName = value
    };   
};
    
    names.push(" " + firstName);
    array.splice(place,1);
    maxLength = 0;
    console.log("---------------------")  

}while (array.length > 0);

document.write(names)