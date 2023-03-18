import React from "react";
import  { useEffect, useState } from "react";
import  "./ProjectList.css";
import"./card.css";
import {Link} from "react-router-dom";
import arduino from "./../components/assets/arduino.png"
import axios from 'axios';
import {AiOutlineEllipsis, AiOutlineBars,AiFillHeart,AiFillMessage } from "react-icons/ai";


const ProjectList = () => {

const [user, setUser] = useState([]);
const fetchData1 = () => {
  return fetch("https://640f6bfccde47f68db4a4b91.mockapi.io/api/aman/aman")
        .then((response) => response.json())
        .then((data) => setUser(data));      
}
const fetchData = () => {
    axios.get("https://640f6bfccde47f68db4a4b91.mockapi.io/api/aman/aman/${id}")
    .then(function(res){
    console.log(res.data);
    setUser(res.data);
  });    
  }

  //https://640f6bfccde47f68db4a4b91.mockapi.io/api/aman/aman
//https://jsonplaceholder.typicode.com/users
//http://localhost:8080/users


 

  useEffect(() => {
    fetchData();
    fetchData1();
  },[])
  return (<>
      <div className="header">
        <div className="contaner">
         <img  className="img" src={arduino} alt="arduino.png" />
         <h1 className="ProjectList" >Explore Our New Projects</h1>
         </div>
      </div>
       <main className="test">
       <div className="contaner_ul">
       <h1 className="UserList">User List</h1>
       </div>

      <div className="project-continer">
        {user && user.length > 0 && user.map((userObj, index) => (
        <Link to = {`/ProjectDetails/${userObj.id}`}>
        <div className="card" style={{ backgroundImage:`url(${userObj.img})` }} >
          <div className="content">
            <h2 className="Title">{userObj.title}</h2>
            <div className="copy" dangerouslySetInnerHTML={{ __html: userObj.description}}  />
          </div>
        </div>
        </Link>
          ))}
          {user && user.length > 0 && user.map((userObj, index) => (
        <Link to = {`/ProjectDetails/${userObj.id}`}>
        <div className="Card_cantaner"> 
     <div className="card_img" style={{ backgroundImage:`url(${userObj.img})` }}></div>
     <div className="card_contex">
         <div className="card_user"></div>
         <div className="card_text"><b>{userObj.name}</b><p>{userObj.team}</p></div>
         <div className="card_menu"><AiOutlineEllipsis/></div>
         <div className="icons_menu" ><AiOutlineBars/>
        </div>
     </div>
     <div className="display">
        <div className="card_icon">
          {/* <div className="icons"><AiFillLike/> <span>1</span> </div> */}
          <div className="icons"><AiFillHeart/> <span>2</span></div>
          <div className="icons"><AiFillMessage/> <span>3</span></div>
        </div>
        </div>
     </div>
        </Link>
          ))}
      </div>
    </main>
   
    </>
  );
};
  
export default ProjectList;
// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };