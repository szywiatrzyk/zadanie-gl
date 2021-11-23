function main(str)
{
    var regexAlph = /[\p{L}0-9]+/giu;
    var regexNoAlph = /[^\p{L}0-9]+/giu;
    var alph = str.match(regexAlph).reverse();
    var nonalph = str.match(regexNoAlph);

    if (str[0].match(regexAlph) !== null) {
        return concatenation(alph, nonalph);
    }
    else { 
        return concatenation(nonalph, alph);
    }
}

function concatenation(first, second) {
    var arrayLength = Math.max(first.length, second.length);
    var finalStr = "";

    for(var i =0; i<arrayLength; i++) {
        if(first[i] !== undefined) {
            finalStr += first[i];
        }
        
        if(second[i] !== undefined) {
            finalStr += second[i];
        }
    }

    return finalStr;
}   

if (process.argv[2] !== undefined) {
    console.log(main(process.argv[2]));
}
else {
    console.error("no string detected");
}


/* "_Jeden..Dwa...Trzy;;;;Cztery_Pięć_" */