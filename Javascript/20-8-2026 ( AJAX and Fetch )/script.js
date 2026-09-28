/* --- API --- */
// Dog API
// Corona API
// Movie API
// Cricket API

/* --- Dog API --- */

function getDog() {
    const url = "https://dog.ceo/api/breeds/image/random";
    const url1 = "https://dog.ceo/api/breeds/image/random";
    const url2 = "https://dog.ceo/api/breeds/image/random";

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById("dogResult").innerHTML = `
            <div class="card">
                <img src="${data.message}" alt=""/>
            </div>`
        })
        .catch(error => {
            console.log(error);
            document.getElementById("dogResult").innerHTML = "Something went wrong"
        })
    fetch(url1)
        .then(response => {
            return response.json();
        })
        .then(data1 => {
            console.log(data1);
            document.getElementById("dogResult1").innerHTML = `
            <div class="card">
                <img src="${data1.message}" alt=""/>
            </div>`
        })
        .catch(error => {
            console.log(error);
            document.getElementById("dogResult1").innerHTML = "Something went wrong"
        })
    fetch(url2)
        .then(response => {
            return response.json();
        })
        .then(data2 => {
            console.log(data2);
            document.getElementById("dogResult2").innerHTML = `
            <div class="card">
                <img src="${data2.message}" alt=""/>
            </div>`
        })
        .catch(error => {
            console.log(error);
            document.getElementById("dogResult2").innerHTML = "Something went wrong"
        })
}

/* --- Movies API --- */

function getMovie() {
    const url = "http://localhost:3000/movies";

    const random = Math.floor(Math.random() * 12);
    const random1 = Math.floor(Math.random() * 12);
    const random2 = Math.floor(Math.random() * 12);

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(movies => {
            const movie = movies[random];
            console.log(movie);
            document.getElementById("movieResult").innerHTML = `<div class="movieCard">
                    <img src="${movie.Poster}" alt="" />
                    <h2 class="mvtitle">${movie.Title}</h2>
                    <div class="flex yeartime">
                        <h3 class="year">Year : ${movie.Year}</h3>
                        <h3 class="time">Runtime : ${movie.Time}</h3>
                    </div>
                </div>`
        })
        .catch(error => {
            console.log(error);
            document.getElementById("movieResult").innerHTML = "Something went wrong"
        })

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(movies => {
            const movie = movies[random1];
            console.log(movie);
            document.getElementById("movieResult1").innerHTML = `<div class="movieCard">
                    <img src="${movie.Poster}" alt="" />
                    <h2 class="mvtitle">${movie.Title}</h2>
                    <div class="flex yeartime">
                        <h3 class="year">Year : ${movie.Year}</h3>
                        <h3 class="time">Runtime : ${movie.Time}</h3>
                    </div>
                </div>`
        })
        .catch(error => {
            console.log(error);
            document.getElementById("movieResult").innerHTML = "Something went wrong"
        })

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(movies => {
            const movie = movies[random2];
            console.log(movie);
            document.getElementById("movieResult2").innerHTML = `<div class="movieCard">
                    <img src="${movie.Poster}" alt="" />
                    <h2 class="mvtitle">${movie.Title}</h2>
                    <div class="flex yeartime">
                        <h3 class="year">Year : ${movie.Year}</h3>
                        <h3 class="time">Runtime : ${movie.Time}</h3>
                    </div>
                </div>`
        })
        .catch(error => {
            console.log(error);
            document.getElementById("movieResult").innerHTML = "Something went wrong"
        })
}

/* --- COVID-19 API --- */

function getInfo() {

    const val = document.querySelector("#country");
    const country = String(val.value).toLowerCase();
    const ctHd = document.getElementById("countryHeader");
    const population = document.getElementById("population");
    const totalCs = document.getElementById("totalCases");
    const recv = document.getElementById("recovered");
    const active = document.getElementById("activeCase");
    const critical = document.getElementById("criticalCase");

    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            ctHd.innerText = `${data.country}`
            population.innerText = `Total Population: ${data.population}`
            totalCs.innerText = `Total Cases: ${data.cases}`
            recv.innerText = `Recovered Cases: ${data.recovered}`
            active.innerText = `Active Cases: ${data.active}`
            critical.innerText = `Crititcal Cases: ${data.critical}`
        })
        .catch(err => {
            console.log(err);
        })
}

