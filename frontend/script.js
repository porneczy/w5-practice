// hasznosabb változókba menteni a fügyényeket
function loadEvent(){
    console.log("betöltődött");
    let rootElement = document.getElementById("root")
    
    let card2 = function(title, year, rate){
        return `
        <div class="card">
            <h2>${title}</h2>
            <h4>${year}</h4>
            <h5>${rate}</h5>
        </div>`
    }

    let renderAllCardElements = function(cardsArray){
        let renderedCardList = ""

        for (const i of cardsArray) {
            renderedCardList += `
                <div class="card">
                    <h2>${i.title}</h2>
                    <h4>${i.year}</h4>
                    <h5>${i.rate}</h5>
                </div>`
        }
        return renderedCardList
    } 
    
    let newGoodMovies = []

    for (const movieSend of movies) {
        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend)
        }   
    }
    newGoodMovies.sort(function(a, b){return a.year - b.year});

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies))
}
window.addEventListener("load", loadEvent);



