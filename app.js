const $numDiv = $('.num-div');

function getFacts () {
    let fourFacts = axios.get('http://numbersapi.com/1..8,17?json');
    fourFacts
        .then(resp => makeAndAppendCards(resp.data))
}

function makeAndAppendCards(data) {
    for (let num in data) {
        $numDiv.append(`<div class="card">
                        <div class="card-body">
                            <div class="card-title">${num}</div>
                            <div class="card-text">${data[num]}</div>
                        </div>
                     </div>
                     `)
    }
}

getFacts()