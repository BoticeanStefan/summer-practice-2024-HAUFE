import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import myPlayer from './components/myPlayer';
import { Link } from 'react-router-dom';
import Logo from "./4f829e85866bd52d062ca58b4e1ecef5.jpg";
import Viking from "./MV5BZWNlZmNiNzItYWMwNC00ODYxLThlNjYtMjU3NzlmNDQxMTY2XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg"


function App() {
    const handleClick = () => {
 alert('Recomandation added!');
  };

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
                        <a href="#movies">Movies</a>
                    </li>
                    <li>
                        <a href="#recommendations">Recommendations</a>
                    </li>
                    <li>
                        <a href="#friends">Friends</a>
                    </li>
       
                </ul>
 
                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
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
                            <p></p>
                           <strong> Under the shadow </strong>: Under the Shadow deftly blends seemingly disparate genres to deliver an effective chiller with timely themes and thought-provoking social subtext.
                            <p></p>
                            <strong> Paddington </strong>: Paddington brings a beloved children's character into the 21st century without sacrificing his essential charm, delivering a family-friendly adventure as irresistibly cuddly as its star.
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
                        <h1 class="text-big" id="program">
                       
                        </h1>
                        <p class="text-small">
                           
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                  
                        </h1>
                        <p class="text-small">
                            
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    @Haufe Group
                </p>
            </footer>
            
        </div>
    );
}
 
export default App;