import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from "./4f829e85866bd52d062ca58b4e1ecef5.jpg";
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import CreateGroup from './components/Groups/CreateGroups';
import Rate from './components/Ratings/Rating';

function App() {
    const handleClick = () => {
 alert('Recommendation added!');
  };

  const handleSearch = () => {
      alert('Searching...');
  };

  const [rating, setRating] = useState(3);

  const [likesCount, setLikesNumber] = useState(2);
    return (
        
        <div>
            <nav class="navbar background">
            
                <ul class="nav-list">
                    <div class="logo">
                        <img src={Logo} alt="Home"
                        />
                    </div>
                    <li>
                        <a href="/.">Movies</a>
                    </li>
                    <li>
                        <a href="#recommendations">Recommendations</a>
                    </li>
                    <li>
                        <a href="/grouplists">Friends</a>
                    </li>
                    <li>
                    <a href="/login">Login</a>
                    </li>
                    <li>
                    <a href="/signup">Sign Up</a>
                    </li>
                    <li>
                    <a href="/creategroups">Create a group</a>
                    </li>
                </ul>
 
                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        <button type="button" onClick={handleSearch}>Search</button>
                    </button>
                </div>
            </nav>
 
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Daily series and movies recommendations:
                        </h1>
                        <div>
                        <input
                        type="text"
                        name="search"
                        id="search"
                    />
                            <button type="button" onClick={handleClick}>Add recommendation</button>
                        </div>
                        <p class="text-small">
                           <strong> His house </strong>:  Featuring genuine scares through every corridor.
                            His House is a terrifying look at the specters of the refugee experience and a stunning feature debut for Remi Weekes.
                            <a href="https://www.rottentomatoes.com/m/his_house"> Read more</a>
                            <p></p>
                           <strong> Under the shadow </strong>: Under the Shadow deftly blends seemingly disparate genres to deliver an effective chiller with timely themes and thought-provoking social subtext.
                             <a href="https://www.rottentomatoes.com/m/under_the_shadow"> Read more</a>
                           <p></p>
                            <strong> Paddington </strong>: Paddington brings a beloved children's character into the 21st century without sacrificing his essential charm, delivering a family-friendly adventure as irresistibly cuddly as its star.
                        <a href="https://www.rottentomatoes.com/m/paddington_2014"> Read more</a>
                            </p>
                    </div>
                </div>
            </section>
            
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                           Top movies and series trailers
                        </h1>
                        <p class="text-small">
                       <strong> Vikings </strong>
                        <p>Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore and raid the distant shores across the ocean.
                        Vikings has a rating of 8.5/10 on IMDb.
                 
                       
                         <a href="https://www.youtube.com/watch?v=9GgxinPwAGc"> Trailer</a>
                         
                        </p>
                       <strong> Friends: The Reunion </strong>
                        <p>"Friends (1994)" reunion special hosted by James Corden in which the main cast revisit the sets of the original show, 
                        meet with celebrity guests, do table reads and re-enactments of episodes, and share behind-the-scenes footage.
                        Friends: The Reunion has a rating of 8.0/10 on IMDb.
                        <a href="https://www.youtube.com/watch?v=RasWhgd4vao"> Trailer</a></p>
                        <button onClick={() => setLikesNumber(likesCount + 1)}>Like</button>
      <button onClick={() => setLikesNumber(likesCount - 1)}>Dislike</button>
      <h4>Total likes for today's picks: {likesCount}</h4>
                        </p>

                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <p class="text-small">
                           <iframe width="320" height="200" src="https://www.youtube.com/embed/9GgxinPwAGc?si=4-_O2sZ8R78pTew9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      {" "}<iframe width="320" height="200" src="https://www.youtube.com/embed/RasWhgd4vao?si=mGlWIAnMJOCF7XeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                   <a href="/src/components/Ratings/Rating">Rate the content</a>
                 
                        </h1>
                        
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    @HaufeGroup
                </p>
            </footer>
            
        </div>
    );
}
 
export default App;