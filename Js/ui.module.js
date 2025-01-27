export class Ui {
    constructor() { };
    displayGames(data) {
        let gameCard = ``;
        for (let i = 0; i < data.length; i++) {
            gameCard += `
                    <div class="col-md-6 col-lg-4 col-xl-3 allCard">
                        <div class="main-card rounded-2" data-id="${data[i].id}">
                            <div class="card-body p-3">
                                <figure>
                                    <img src="${data[i].thumbnail}" class="w-100" alt="Game Logo">
                                </figure>
                                <figcaption>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h3 class="h6">${data[i].title}</h3>
                                        <span class="free-badge text-bg-primary fw-bold px-2 py-1 rounded-3">Free</span>
                                    </div>
                                    <p class="text-break py-3 mb-5 opacity-50">
                                        ${data[i].short_description.split(' ', 8)}
                                    </p>
                                </figcaption>
                            </div>
                            <div class="card-footer fixed-bottom px-3 py-2 d-flex justify-content-between">
                                <span class="text-uppercase px-1 rounded fw-bold">${data[i].genre}</span>
                                <span class="px-1 rounded fw-bold">${data[i].platform}</span>
                            </div>
                        </div>
                    </div>`
        }
        document.querySelector('.main-section .container .row').innerHTML = gameCard;
    };

    displaygameDetails(data) {
        let detailsBox = `
        <div class="col-md-4 mb-3 mb-md-0">
                    <div>
                        <img src="${data.screenshots[0].image ? data.screenshots[0].image : defaultImage}" class="w-100" alt="game photo 2">
                    </div>
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                    <div>
                        <img src="${data.screenshots[1].image ? data.screenshots[1].image : defaultImage}" class="w-100" alt="game photo 3">
                    </div>
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                    <div>
                        <img src="${data.screenshots[2].image ? data.screenshots[2].image : defaultImage}" class="w-100" alt="game photo 4">
                    </div>
                </div>
                <div class="col-12">
                    <div class="mt-3">
                        <h3 class="mb-3">Title: ${data.title}</h3>
                        <div class="d-flex align-items-center mb-3">
                            <span class="me-2">Category:</span>
                            <span class="category px-2 fw-bold d-flex rounded">${data.genre}</span>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <span class="me-2">Platform:</span>
                            <span class="category px-2 fw-bold d-flex rounded">${data.platform}</span>
                        </div>
                        <div class="d-flex align-items-center mb-3">
                            <span class="me-2">Status:</span>
                            <span class="category px-2 fw-bold d-flex rounded">${data.status}</span>
                        </div>
                    </div>
                    <div>
                        <p>${data.description}</p>
                        <a href="${data.game_url}" target="_blank" class="btn btn-warning">Show Game</a>
                    </div>
                </div>
        `
        document.getElementById('details-content').innerHTML = detailsBox;
    }
}




