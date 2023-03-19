// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push('Ralph');
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
cats.splice(-1)
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(){
    let copyofcats= [...cats,'Broom']
    return copyofcats
}
function prependCat(){
    let copyofcats = ["Arnold",...cats]
    return copyofcats
}

function removeLastCat(){
    let copyofcats = [...cats.slice(0,2)]
    return copyofcats
}

function removeFirstCat(){
    let copyofcats = [...cats.slice(1)]
    return copyofcats
}