import React from 'react';
import "./team.css";
import uimage from "../components/assets/img.jpeg"
  
const Team = () => {
  return (
    <div className="">
      <p className="team-head-text" id="ot-wrapper"><span id="ot-text">Our Team</span></p>
      {/* <p className="overall" id="overall">OVERALL</p> */}

      <main class="page-content" >
        <div class="card" style={{ backgroundImage: `url(${uimage})` }}>
          <div class="content">
            <h2 class="title">Ekant</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${uimage})` }}>
          <div class="content">
            <h2 class="title">Aman</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${uimage})` }}>
          <div class="content">
            <h2 class="title">Pratham</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
        <div class="card" style={{ backgroundImage: `url(${uimage})` }}>
          <div class="content">
            <h2 class="title">Aditya</h2>
            <p class="copy">4th year</p>

          </div>
        </div>

        <div class="card" style={{ backgroundImage: `url(${uimage})` }}>
          <div class="content">
            <h2 class="title">Jay Prakash</h2>
            <p class="copy">4th year</p>

          </div>
        </div>
      </main>

    </div>
  );
};
  
export default Team;