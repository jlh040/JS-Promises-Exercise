const numContainer = document.querySelector('.nums-container');

function getFacts () {
    let fourFacts = axios.get('http://numbersapi.com/1..3,17?json');
    fourFacts
        .then(resp => console.log(resp.data))
}

function makeCard(data) {
    for (let num in data) {
        return `<div class="card">
                    <div class="card-body">
                        <div class="card-title">${num}</div>
                        <div class="card-text">${data[num]}</div>
                    </div>
                </div>
                `
    }
}