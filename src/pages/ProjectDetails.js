import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
  
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


      <p>{user.name}</p>

    </div>
    </>
  );
};
  
export default ProjectDetails;