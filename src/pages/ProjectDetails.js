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
    
    <div>
    <div className="head" style={{ backgroundImage:`url(${img})`}}>
    <div className="D_head "><div className='D_center'>{user.name}</div></div>
    <p className="D_title">{user.website}</p>

   </div>
   {/* <p >{user.company.catchPhrase}</p> */}
   <div className="D_contaner">
      <div className='D_paragraphTitle'><p><b>{id}:{user.name}</b></p></div>
      <p className='D_paragraph'>
        The vision of Extended Reality (XR) systems is living in a hybrid reality or "Metaverse" where real and virtual elements seamlessly and contextually augment experiences of ourselves and the worlds we inhabit. While this integration promises exciting opportunities for the future of XR, it comes at the risk of experiential distortions and feelings of dissociation, especially related to virtual reality. When transitioning from a virtual world to the real, users often report experiential structures to linger on, as sort-of after images, causing disruptions in a user's daily life. In this work, we define these atypical experiences as experiential artifacts and present preliminary results from an informal survey conducted online with 76 VR users to highlight different types and their durations. Based on models of cognition as situated, we propose Situated VR, which blends the real and virtual in novel ways, as a method that can potentially help reduce the artifacts and simultaneously increase the user's sense of presence. 
      </p>
      </div>
    </div>
    </>
  );
};
  
export default ProjectDetails;