import React from 'react';
import {useParams} from 'react-router-dom';
import  { useEffect, useState } from "react";

import axios from 'axios';



const ProjectDetails = () => {
  
  const params = useParams()
  const id = params.id
  const URL = 'https://jsonplaceholder.typicode.com/users/1'
  
  const [user, setUser] = useState(null);

   axios.get(URL)
   .then((response) =>{setUser(response.data)})

  
  useEffect(() => {
    
  },[])


  return (<>
    
    <h1>ProjectDetails of {id}</h1>
    
     
          
           
          
          </>
  );
};
  
export default ProjectDetails;