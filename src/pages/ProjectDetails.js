import React from 'react';
import "./ProjectDetails.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import img from "../components/assets/projectdetail.jpg";
  
const ProjectDetails = () => {

  const params = useParams()
  const id = params.id
 
  
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((response) => response.json())
          .then((data) => setUser(data));
  },[])
  // const [img, setimg] = useState([]);
  // useEffect(() => {
  //   fetch(`https://randomuser.me/api`)
  //         .then((response) => response.json())
  //         .then((data) => setimg(data));
  // },[])



  return (<>
    <h1>ProjectDetails of {id}</h1>
    <div>
    <div className="head" style={{ backgroundImage:`url(${img})`}}>
    <p className="D_title" >{user.website}</p>
   </div>
   {/* <p >{user.company.catchPhrase}</p> */}
      <p>{user.name}</p>
  
    </div>
    </>
  );
};
  
export default ProjectDetails;