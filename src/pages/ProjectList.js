import React from "react";
import {Link} from 'react-router-dom';
import  { useEffect, useState } from "react";
import "./ProjectList.css";
import {Link} from "react-router-dom";
import img from "./img.jpg";



const ProjectList = () => {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));      
  }
//https://jsonplaceholder.typicode.com/users
//http://localhost:8080/users
  useEffect(() => {
    fetchData();
  },[])
  return (<>
    <div>
      <h1>
    ProjectList
      </h1>
    </div>

    <main className="test">
      <h1>User List</h1> 
      <div className="project-continer">
        {user && user.length > 0 && user.map((userObj, index) => (
          
          // <div className="card" style={{ backgroundImage: `url(${})` }}></div>
          <Link to = {`/ProjectDetails/${userObj.id}`}>

        <div className="card" style={{ backgroundImage:`url(${img})` }} >
          
          <div className="content">
            <h2 className="title">{userObj.name}</h2>
            <p className="copy">{userObj.company.catchPhrase}</p>
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