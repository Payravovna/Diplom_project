
import { footer } from "../../components/footer";
import { header } from "../../components/header";

header()
footer()

const apiKey = '7d0fa8da6d609b6cd02ad8e30db1ea24';
const params = new URLSearchParams(location.search);
const requestToken = params.get('request_token');
const approved     = params.get('approved');

if (approved === 'true' && requestToken) {
  const res = await fetch(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ request_token: requestToken })
    }
  );
  const { success, session_id } = await res.json();
  if (success) {
    localStorage.setItem('session_id', session_id); 
  } else {
    console.error('Не удалось получить session_id');
  }
}



let get_session_id = localStorage.getItem("session_id")
console.log(get_session_id);


fetch(`https://api.themoviedb.org/3/account?api_key=${apiKey}&session_id=${get_session_id}`)
.then(res=>res.json())
.then(data => reload_profile(data))


function reload_profile(profile) {
    console.log(profile.avatar.gravatar.hash);
const hash = profile.avatar.gravatar.hash;
const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=200`



let user_name = document.querySelector(".name")
let user_avatar = document.querySelector(".profile-img")

console.log(profile);

user_name.innerHTML = profile.username
user_avatar.src = gravatarUrl

}




