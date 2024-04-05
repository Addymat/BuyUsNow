import React, { useEffect, useState } from 'react';
import Banner from './Banner.svg';


const Body = () => {
  const [windowWidth,setWindowWidth]=useState(window.innerWidth);


  // useEffect(() => {
  //   const handleSize = () =>{
  //       setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize',handleSize);

  //   return () =>
  //   {
  //     window.removeEventListener('resize',handleSize);
  //   };
  // },[]);

    return(
    <div class="container">
        
    <nav class="navbar navbar-expand-lg bg-body-tertiary justify-contnet-start">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Book Us Now</a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
      <div class="searcholder">
      <form class="d-flex" role="search">
      <button class="btn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-justify" viewBox="0 0 25 19">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>Categories</button>
        <input class="searchbox" type="search" placeholder="Search" aria-label="Search"/>
        
      </form>
      </div>
      <div class="icons">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 15 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 15 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-justify" viewBox="0 1 6 11">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>

          </div>
      
      
    </div>
  {/* </div> */}
</nav>
<div class="scrollable-menu">
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Live Shows</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Streams</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Movies</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Plays</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Events</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Sports</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Activities</a>
  </li>
</ul>
</div>
{/* <div class="title"> */}
<div class="contained">
  <img class="restimg" alt="backgroundimg" src={Banner} />
<h1 class="title"> Discover Exciting Events Around You</h1>
<h2 class="titles">Near You Stay Tuned For Update</h2>
<p class="titlea">Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
<p class="titlee">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
{/* </div> */}

</div>
    
    </div>
    )

}

export default Body;