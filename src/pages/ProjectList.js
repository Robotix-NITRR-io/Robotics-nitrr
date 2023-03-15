import React from "react";
import  { useEffect, useState } from "react";
import  "./ProjectList.css";
import {Link} from "react-router-dom";
import arduino from "./../components/assets/arduino.png"

const ProjectList = () => {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch("https://640f6bfccde47f68db4a4b91.mockapi.io/api/aman/aman")
          .then((response) => response.json())
          .then((data) => setUser(data));      
  }
//https://640f6bfccde47f68db4a4b91.mockapi.io/api/aman/aman
//https://jsonplaceholder.typicode.com/users
//http://localhost:8080/users
  useEffect(() => {
    fetchData();
  },[])
  return (<>
      <div className="header">
        <div className="img1">
         <img  className="img1" src={arduino} alt="arduino.png" />
         <h1 className="ProjectList" >Explore Our New Projects</h1>
         </div>
      </div>
       <main className="test">
       <h1 className="UserList">User List</h1>

      <div className="project-continer">
        {user && user.length > 0 && user.map((userObj, index) => (
             <Link to = {`/ProjectDetails/${userObj.id}`}>

        <div className="card" style={{ backgroundImage:`url(${userObj.img})` }} >
          
          <div className="content">
            <h2 className="title">{userObj.name}</h2>
            <p className="copy">{userObj.team}</p>
          </div>
         
        </div>
        </Link>

           // <li key={userObj.id}>{userObj.username}</li>
           
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