import React from 'react';
import favicon from "../../components/assets/favicon.png"
import circit from "../../components/assets/pngegg.jpeg"
import  "./style.css";
// import  "./ProjectList.css";
// import"./card.css";
import gear from "../../components/assets/gear.png"


const Home = () => {

  return (
    <div className='index'>
     
     <img  className="circit" src={circit} alt="arduino.png" />
      
     <section className="home flex-center " id="home">
      <div className="home-container">
        <div className="media-icons">
          <a href="#">
              <i className="fab fa-facebook"></i></a>
          <a href="#">
              <i className="fab fa-instagram"></i></a>
          <a href="#">
             <i className="fab fa-linkedin"></i></a>
           <a href="#">
              <i className="fab fa-github"></i></a>
        </div>
       

        <div className="info">
        <h1 className="title">
                      ROBOTI
                      <span className="X" style={{ fontSize: "75px" }}>
                        X
                      </span>{" "}
                      CLUB
                    </h1>
         <h3>National Institute of Technology, Raipur</h3>
     <p>
     The Robotix Club of NIT Raipur is the perfect combination of innovators, contributors and experts in the field of Robotics. The club has been inspiring minds ever since its inception in 2014. The foundation of Robotix Club was laid by a group of enthusiastic and ardent students with a vision to promote the versatile field of robotics and it’s ever growing application in present time. We make sure that every student seeking the knowledge gets it .The club is guided by our esteemed faculty In charge Dr. Rajesh Doriya (Department of Information Technology) who makes sure there is proper functioning of the club.
     </p>

     <h4 className="title">Our Vision</h4>
                            <p>Robotix Club NITRR strives to develop technological skills in the diverse field of mechatronics and robotics by transcending the theoretical knowledge into live application and providing live simple yet creative solution for real world complex problems. The club's focus has always been on student specific events and workshops to increase the reach of robotics in the college. Major part of the club has been involved with students as well as teachers working together as a cohesive unit.</p>
      
        </div>
            <div className="home-img">
         
          <img  className="img X "  src={favicon} alt="favicon.png" />
             </div>
      </div>
     
 

    </section>




    <div className="rotation_box_position">
    <div className="rotation_box">
    
     <img className='gear rotationR' src={gear} alt="Logo" />
     </div> </div>
    </div>
  )
}

export default Home