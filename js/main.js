
/*
Building block characters:
⊂ = \u2282 = c (TBD)
l = \u7c = l (good)
ı = \u0131 = i (good)
• = \u2022 = * (good)
⋂ = \u22c2 = n (TBD)
ȷ = \u0237 = j (good)
ↄ = \u0186 = > (pretty bad but you know)
υ = \u3c5 = u (TBD)
 */

/*
const Unicodes1 = {
    "c": "\u0441",
    "l": "\u007c",
    "i": "\u0131",
    "*": "\u2022",
    "n": "\u22c2",
    "j": "\u0237",
    ">": "\u0254",
    "u": "\u1d41"
}



const Unicodes = {
    "C": "C",
    "L": "L",
    "I": "I",
    "*": "*",
    "N": "N",
    "J": "J",
    ">": ">",
    "U": "U"
} */

const Encodings = {
    a: "CI",
    b: "L>",
    c: "C*",
    d: "CL",
    e: "CC",
    f: "NL",
    g: ">J",
    h: "LN",
    i: "I*",
    j: "J*",
    k: "LC",
    l: "L*",
    m: "NN",
    n: "N*",
    o: "NU",
    p: "J>",
    q: "CJ",
    r: "NI",
    s: "C>",
    t: "IC",
    u: "U*",
    v: "II",
    w: "UU",
    x: "UN",
    y: "UJ",
    z: ">C"
}

const Decodings = {
    "CI": "a",
    "L>": "b",
    "C*": "c",
    "CL": "d",
    "CC": "e",
    "NL": "f",
    ">J": "g",
    "LN": "h",
    "I*": "i",
    "J*": "j",
    "LC": "k",
    "L*": "l",
    "NN": "m",
    "N*": "n",
    "NU": "o",
    "J>": "p",
    "CJ": "q",
    "NI": "r",
    "C>": "s",
    "IC": "t",
    "U*": "u",
    "II": "v",
    "UU": "w",
    "UN": "x",
    "UJ": "y",
    ">C": "z"
}

function encrypt(){
    let input = document.getElementById("input").value;
    if(!input.match(/[a-z\*\>CINLUJ\s]/) ){
        document.getElementById("output").innerHTML = "Your input is invalid!";
        return;
    }
    let runningString = "";
    input.split(" ").forEach(word => {
        runningString += recode(swap(encode(word) ) );
        runningString += " ";
    });
    document.getElementById("output").innerHTML = runningString.trim();
}

function encode(input){
    let runningString = "";
    input.split("").forEach(letter => {
        if(letter in Encodings){
            runningString += Encodings[letter]
        } else {
            runningString += letter;
        }
    });
    return runningString;
}

function swap(encoded){
    let runningString = "";
    for(let i = 0; i < encoded.length; i++){
        if(i === 0 || i === encoded.length - 1){
            runningString += encoded.charAt(i);
        } else {
            if(i % 2 === 0){
                runningString += encoded.charAt(i - 1);
            } else {
                runningString += encoded.charAt(i + 1);
            }
        }
    }
    return runningString;
}

function recode(swapped){
    let runningString = "";
    for(let i = 0; i < swapped.length; i++){
        if(i < swapped.length - 1 && swapped.substring(i, i + 2) in Decodings){
            runningString += Decodings[swapped.substring(i, i + 2) ];
            i++;
        } else {
            runningString += swapped.charAt(i);
        }
    }
    return runningString;
}
