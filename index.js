
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(arr){
    return arr.push('Ralph')

}

function destructivelyPrependCat(arr, el){
     return arr.unshift(el)

}


function  destructivelyRemoveLastCat(arr){
    return arr.pop();

}

function   destructivelyRemoveFirstCat(arr){
    return arr.shift();
}

function  appendCat(arr,el){

    return [...arr, el];

}

function removeLastCat(arr){

    return arr.slice(-1);

}

function  removeFirstCat(arr){
    return arr.slice(1);
}
