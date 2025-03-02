import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeActiveLink(link);
        const category = link.getAttribute("data-category");
        this.getGamesCategory(category);
      });
    });
    this.loader = document.querySelector(".loading");
    this.ui = new Ui();
    this.getGamesCategory("mmorpg");
    this.games = document.getElementById("games");
    this.detailsSection = document.getElementById("details");
  }
  async changeActiveLink(link) {
    document.querySelector(".navbar-nav .active").classList.remove("active");
    link.classList.add("active");
  }
  async getGamesCategory(cat) {
    this.loader.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1ee4bb6e7bmsh17b468336413295p18815bjsn1ca2ee54b5d9",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const requestApi = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
      options
    );
    const response = await requestApi.json();
    this.loader.classList.add("d-none");
    this.ui.displayGames(response);
    document.querySelectorAll(".main-card").forEach((item) => {
      item.addEventListener("click", () => {
        this.games.classList.add("d-none");
        this.detailsSection.classList.remove("d-none");
        new Details().getGameDetails(item.getAttribute("data-id"));
      });
    });
  }
}
