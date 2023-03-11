import React from 'react';
import {useParams} from 'react-router-dom';
import  { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';


const ProjectDetails = () => {

  const params = useParams()
  const id = params.id
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/${id}')
          .then((response) => response.json())
          .then((data) => setUser(data));      
           }
//https://jsonplaceholder.typicode.com/users
//http://localhost:8080/users
  useEffect(() => {
    fetchData();
  },[])


  return (<>
    
    <h1>ProjectDetails of {id}</h1>
    { user && user.length > 0 && user.map((userObj, index) => (
      <li key={userObj.id}>
        {/* <NavLink to="/ProjectList" activeStyle>
        {userObj.id}
          </NavLink> */}
      <Card className="card" style={{ width: '600px'  }}>
             {userObj.name}
      <Card.Img variant="top" src="holder.js/100px180" />

      <Card.Body>
        <Card.Title >{userObj.username}</Card.Title>
        <Card.Text>
        {userObj.company.catchPhrase}
        </Card.Text>
      </Card.Body>
    </Card>
    </li>
           // <li key={userObj.id}>{userObj.username}</li>
           
          ))}
          </>
  );
};
  
export default ProjectDetails;