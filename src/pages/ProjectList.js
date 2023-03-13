import React from "react";
import  { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import "./ProjectList.css";



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
      <img src="robotics_4.jpg" alt="1" className="img1"></img>
      <h1 className="ProjectList" >
    Explore Our New Projects
      </h1>
    <main>
      <h1 className="UserList">User List</h1>
      <ol className="ol"> 
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>
             <Card className="card" style={{ width: '350px', height:'350px'  }}>
             {userObj.name}
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title >{userObj.username}</Card.Title>
        <Card.Text>
        {userObj.company.catchPhrase}
        </Card.Text>
        
      </Card.Body>
    </Card></li>
           // <li key={userObj.id}>{userObj.username}</li>
           
          ))}
      </ol>
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