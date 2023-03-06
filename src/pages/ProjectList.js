import React from "react";
import  { useEffect, useState } from "react";
  
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
    <main>
      <h1>User List</h1>
      <ol > 
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}___{userObj.username}</li>
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