const $numDiv = $('.num-div');





function makeAndAppendCards(respArr) {
    for (let resp of respArr) {
        $numDiv.append(`<div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${resp.number}</h5>
                            <h6 class="card-text">${resp.text}</h6>
                        </div>
                     </div>
                     `)
    }
}

function makeRequests() {
    const numFacts = [];
    for (let i = 0; i < 4; i++) {
        numFacts.push(axios.get('http://numbersapi.com/23?json'));
    }

    return numFacts;
}