import React from "react";
import  { useEffect, useState } from "react";
import  "./ProjectList.css";
import {Link} from "react-router-dom";
import arduino from "./../components/assets/arduino.png"
import axios from 'axios';

const ProjectList = () => {

const [user, setUser] = useState([]);

const fetchData = () => {
    axios.get("http://localhost:80/api/user/save").then(function(res){
    console.log(res.data);
    setUser(res.data);
  });    
  }


 

  useEffect(() => {
    fetchData();
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
        <Link to = {`/ProjectDetails/${userObj.id}`} key = {userObj.id}>

        <div className="card" style={{ backgroundImage:`url(${userObj.thumb})` }} >
          
          <div className="content">
            <h2 className="Title">{userObj.title}</h2>
            <div className="copy" dangerouslySetInnerHTML={{ __html: userObj.description}}  />

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