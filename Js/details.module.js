import { Ui } from "./ui.module.js";

export class Details {
    constructor() {
        document.querySelector('.close-btn').addEventListener('click', () => {
            document.getElementById('details').classList.add('d-none')
            document.getElementById('games').classList.remove('d-none')
        })
        this.loader = document.querySelector('.loading');
    }
    async getGameDetails(id) {
        this.loader.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1ee4bb6e7bmsh17b468336413295p18815bjsn1ca2ee54b5d9',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const requestApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        const response = await requestApi.json();
        this.loader.classList.add('d-none');
        new Ui().displaygameDetails(response);
    }
}