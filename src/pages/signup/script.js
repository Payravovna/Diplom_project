


    const apiKey = '7d0fa8da6d609b6cd02ad8e30db1ea24';


    const tokenRes = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`);
    const { request_token, session_id  } = await tokenRes.json();

    console.log('Token:', request_token);

    const redirectUrl = encodeURIComponent("http://localhost:5173/profile");
    window.location.href = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${redirectUrl}`;
    
localStorage.setItem("session_id", session_id)