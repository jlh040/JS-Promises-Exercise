const $numDiv = $('.num-div');

Promise.all(makeRequests())
    .then(resp => {
        makeAndAppendCards(resp)
    })
    .catch(err => {
        $('body').html('<h1>Sorry, something went wrong :(</h1>')
    })

function makeAndAppendCards(respArr) {
    for (let resp of respArr) {
        $numDiv.append(`<div class="card">
                        <div class="card-body">
                            <h6 class="card-text">${resp.data.text}</h6>
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