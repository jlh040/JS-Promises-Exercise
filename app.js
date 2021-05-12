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
                            <h5 class="card-title">${num}</h5>
                            <h6 class="card-text">${data[num]}</h6>
                        </div>
                     </div>
                     `)
    }
}

getFacts()