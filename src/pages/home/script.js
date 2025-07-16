  import { footer } from "../../components/footer";
  import { Genre } from "../../components/genre";
  import { header } from "../../components/header";
  import { Card } from "../../components/now_playing";
  import { peopleCard } from "../../components/peopleCard";
   import { seacher } from "../../components/seacher";
  import { TrailerCard } from "../../components/TrailerCard";
  import { api } from "../../utils/api";
  import { render } from "../../utils/utils";

  header()
  footer()



  let movie = document.querySelector(".now_playing")
  let popularBox = document.querySelector(".popular")
  let news = document.querySelector(".news")
  let trailersBox = document.querySelector(".small-trailers")
  let people = document.querySelector(".popular_people")
  let genreBox = document.querySelector(".filters") 
  let iframe = document.querySelector(".trailer");
  let reseach = document.querySelector(".seacher") 

  const promise1 = api.get("/movie/now_playing");
  const promise2 = api.get("/movie/popular");
  const promise3 = api.get("/movie/upcoming");
  const promise4 = api.get("/person/popular")
  const promise5 = api.get("/genre/movie/list")
  const promise6 = api.get ("/search/movie")

  
  

Promise.all([promise1, promise2, promise3, promise4 , promise5 , promise6])
  .then(([nowPlaying, popular, upcoming, celebrity , genre , seach]) => {
    render(nowPlaying.data.results.slice(0, 8), movie, Card);
    render(popular.data.results.slice(0, 4), popularBox, Card);
    render(upcoming.data.results.slice(0, 4), news, Card);
    render(upcoming.data.results.slice(0, 12), trailersBox, TrailerCard);
    render(celebrity.data.results.slice(2, 6),people, peopleCard);
    render(genre.data.genres.slice(0, 6),genreBox, Genre);  
    render(seach.data.results.slice(0 ,8) , reseach , seacher )


    let firstMovie = popular.data.results[0]

    api.get(`/movie/${firstMovie.id}/videos`)
      .then(res => {
        let found = res.data.results.find(
          (video) => video.type.toLowerCase() === "trailer"
        );
        if (found) {
          iframe.src = `https://www.youtube.com/embed/${found.key}`;
        }
      })


let blocks = [
  document.querySelector(".person_first"),
  document.querySelector(".person_second")
];
const topTwoPeople = celebrity.data.results.slice(0, 2);

topTwoPeople.forEach((person, index) => {
  let container = blocks[index];
  container.querySelector(".picture").src = `https://image.tmdb.org/t/p/w500${person.profile_path}`
})



  })
  .catch((error) => console.error(error));




  