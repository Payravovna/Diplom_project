// export function Card(movie) {
//     let card = document.createElement("div");
//     let img = document.createElement("img");
//     let rating = document.createElement("div");
//     let info = document.createElement("div");
//     let title = document.createElement("div");
//     img.src =`https://image.tmdb.org/t/p/w500${movie.poster_path}`

//     card.className = "card";
//     rating.className = "rating";
//     info.className = "info";
//     title.className = "title";

//     rating.textContent = movie.vote_average;
//     title.textContent = movie.title;

//     info.append(title);
//     card.append(rating);
//     card.append(img);
//     card.append(info);

//     card.onclick = () => {
//       localStorage.setItem("movieId", movie.id); 
//       window.location.href = "/movie"; 
//     };
    
//     card.onmouseenter = () => {
//       if (movie.backdrop_path) {
//         card.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`;
//         card.style.backgroundSize = "cover";
//         card.style.backgroundPosition = "center";
//       }
//     };
//     card.onmouseleave = () => {
//       card.style.backgroundImage = ""; // чтобы фон исчезал при уходе мыши
//     };
    

//     return card;
//   }



export function Card(movie) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let rating = document.createElement("div");
  let info = document.createElement("div");
  let title = document.createElement("div");

  img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  card.className = "card";
  rating.className = "rating";
  info.className = "info";
  title.className = "title";

  rating.textContent = movie.vote_average;
  title.textContent = movie.title;

  info.append(title);
  card.append(rating);
  card.append(img);
  card.append(info);

  card.onclick = () => {
    localStorage.setItem("movieId", movie.id);
    window.location.href = "/movie";
  };

  const bg = document.querySelector(".cards-background");

  card.addEventListener("mouseenter", () => {
    if (movie.backdrop_path) {
      bg.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
      bg.style.opacity = "1";
    }
  });

  card.addEventListener("mouseleave", () => {
    bg.style.opacity = "0";
  });

  return card;
}
