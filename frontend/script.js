// console.log(a)
// console.log(c)

// console.log("Hello Word!");
// console.log('Hello Word!');
// console.log(`Hello
//      Word!`);
// console.log(typeof 2);
// console.log(typeof NaN);
// console.log(0/0);
// console.log(2.14);
// console.log(true)
// console.log(false)
// console.log(undefined)
// console.log(null)
// console.log(typeof undefined)
// console.log(typeof null)
/* 
console.log({
    "title": "Start Coding",
    "type": "Solo",
    "difficulty": 4.1,
    "usefulness": 4.2,
    "enjoyability": 3.7,
    "materials": 3.4,
    "tasks": [
        {
            title: "Bank accounts",
            description:""
        },
        {
            title: "100 doors",
            description:""
        },
        {
            title: "Word filter",
            description:""
        }
    ]
}) */
/* 

var a = "asd"
let b = "asd2"
const c = "asd3"

console.log(a)
console.log(b)
console.log(c)
 */


/* function d (){
    if(1 + 1 === 2){
        
    }
    var a = "asd"
    let b = "asd2"
    const c = "asd3"
    console.log(a)
    console.log(b)
    console.log(c)
}
d() */

/* let e = 1
console.log(e)
e = 2
console.log(e)
e = e * 2
console.log(e) */


/* function multiplyByTwo(num){
    console.log(num)
    return num*2
}
let f = multiplyByTwo(1)
console.log(f)
console.log( multiplyByTwo(10) )
console.log(num)
 */
/* let g = {
    myMethod: function(){
        console.log("hello")
    }
}
g.myMethod()
 */

//                              ez nem fog működni csak megnéztük hogy működik egy fg a motorháztető alatt, példánkon az window addeyent
/* let window = {
    addEventListener: function (eventName, eventFunction){
        if( eventName === "load" ){
            eventFunction()
        }
    }
}
window.addEventListener("load", loadEvent) */

/* 
let h = {
    anotherMethod: function (text){
        return `You sent the following argument to this method: ${text}`
    }
}

let i = h.anotherMethod("sdasdaasd")
console.log(i)
console.log(h.anotherMethod("kurva easy")); */

// metódus: ha elmentünk egy kulcsra egy függyént az a metódus

/* let myString = "mikkamakka";
let mySecondString = myString;
let myThirdString = "mikkamakka";
console.log(myString);
console.log(mySecondString);
console.log(myString === mySecondString);
console.log(myString === myThirdString); */


/* let myObject = {
    myString : "mikkamakka"
}
let mySecondObject = myObject;
let myThirdObject = {
    myString : "mikkamakka"
}
 console.log(myThirdObject === myObject);

mySecondObject.myString = "dömdömdöm"; */


//let myFourthObject = {...myObject}  //másol egy másik objektumot, és ezt ha megyáltoztatod akkor a myObjectbe nem lesz változás
//myFourthObject.myString = "Vacskamati"
//console.log(myObject.myString);
//console.log(myFourthObject.myString);
//primitivek meg az oibjektumok máshogy viselkednek összehasonlitásnál, memória szinten máshol tárolódnak el

/* console.log("" === "");
console.log({} === {}); */
//amint létrehozunk egy objektumot, egyből egy új ujbjektum lesz 

/* window.addEventListener("load", function(){
    console.log("betöltödött");
})
 */

// hasznosabb változókba menteni a fügyényeket
function loadEvent(){
    console.log("betöltődött");
    let rootElement = document.getElementById("root")
    /* let card = function(movieRecived){
        return `<div class="card">
            <h2>${movieRecived.title}</h2>
            <h4>${movieRecived.year}</h4>
            <h5>${movieRecived.rate}</h5>
        </div>`
    }  */
    let card2 = function(title, year, rate){
        return `<div class="card">
            <h2>${title}</h2>
            <h4>${year}</h4>
            <h5>${rate}</h5>
        </div>`
    } 
    /* for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card(movieSend))
    } */
    let anotherFavouriteMovie = {
        title: "The Last Scout Boy",
        year: 1991,
        rate: 7.0
    }
    rootElement.insertAdjacentHTML("beforeend", card2(anotherFavouriteMovie.title, anotherFavouriteMovie.year, anotherFavouriteMovie.rate))
    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate))
    }
}
window.addEventListener("load", loadEvent);

//kibőviteni úgy hogy kerüljön bele html-be css-el az "year" és "rate"
// külön html tagekbe legyenek
//3 oszlopos flex formázás
//egész root divben a kártyák 3 oszlopban és flexel

//mintha kártyák lennének
//5-kor tali

