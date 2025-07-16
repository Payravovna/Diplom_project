import { api } from "../utils/api";
import { redirect } from "../utils/helpers";
import { seacher } from "./seacher";
export function header() {
  let header = document.querySelector("header");
  header.innerHTML = `
    <div class="logo-section">
      <img src="/img/logo.png" alt="logo" class="logo"/>
    </div>

    <nav class="nav">
      <a href="#">Афиша</a>
      <a href="#">Медиа</a>
      <a href="#">Фильмы</a>
      <a href="#">Актёры</a>
      <a href="#">Новости</a>
      <a href="#">Подборки</a>
      <a href="#">Категории</a>
    </nav>

    <div class="burger" id="burger">&#9776;</div>

    <div class="modal" id="modal">
      <div class="modal-content">
        <span class="close" id="close">&times;</span>
        <nav class="nav mobile-nav">
          <a href="#">Афиша</a>
          <a href="#">Медиа</a>
          <a href="#">Фильмы</a>
          <a href="#">Актёры</a>
          <a href="#">Новости</a>
          <a href="#">Подборки</a>
          <a href="#">Категории</a>
        </nav>
      </div>
    </div>

    <div class="right-section">
      <button class="search-btn">
        <img src="/img/Vector (1).png" alt="search">
      </button>
<div class="search-modal" id="search-modal">
  <div class="modal-content">
    <span class="search-close" id="search-close">✖</span>
    <input type="text" id="search-input" placeholder="Введите название фильма..." />
    <div class="seacher"></div>
  </div>
</div>
      <button class="login-btn">Войти</button>
    </div>
  `;


  const burger = document.getElementById("burger");
  const modal = document.getElementById("modal");
  const close = document.getElementById("close");

  burger.addEventListener("click", () => {
    modal.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal.classList.remove("show");
  });


  let btn = document.querySelector(".login-btn")
  btn.onclick = () => {
    redirect("signup")
  }


  let searchBtn = document.querySelector(".search-btn");
  let searchModal = document.getElementById("search-modal");
  let searchClose = document.getElementById("search-close");
  let searchInput = document.getElementById("search-input");
  let searchResultsBox = document.querySelector(".seacher");

  searchBtn.onclick = () => {
    searchModal.classList.add("show");
    searchInput.focus();
  };
  searchClose.onclick = () => {
    searchModal.classList.remove("show");
    searchInput.value = "";
    searchResultsBox.innerHTML = "";
  };

  searchInput.oninput = async () => {
    const query = searchInput.value.trim();
    if (query.length < 2) {
      searchResultsBox.innerHTML = "";
      return;
    }

    try {
      const res = await api.get(`/search/movie?query=${query}`);
      const results = res.data.results.slice(0, 4);

      searchResultsBox.innerHTML = "";
      results.forEach(movie => {
        const card = seacher({
          poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          title: movie.title,
          originalTitle: movie.original_title,
          genres: [], 
          rating: movie.vote_average
        });
        searchResultsBox.append(card);
      });
    } catch (err) {
      console.error("Ошибка поиска:", err);
    }
  };

}


