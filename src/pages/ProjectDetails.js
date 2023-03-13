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
    <div className="D_head "><div className='D_center'>{user.name}</div></div>
    <p className="D_title" >{user.website}</p>

   </div>
   {/* <p >{user.company.catchPhrase}</p> */}
      <p>{user.name}</p>
      <p>New generative AI technologies (such as the Generative Adversarial Network, or GAN) can allow us to imagine new species.
         Hidden within the neural network, there are millions of these "ganimals" that no one has ever seen before.
         These ganimals occupy a digital landscape not unlike our own, where attention is short, and engagement is necessary to survive
         Meet the Ganimals is a collaborative social experiment to discover new species, breed your own, and feed the ones you love.
         The data you provide about the ganimals is their "food." Unfed ganimals are quickly forgotten, so ganimals you engage with have a genetic advantage, and breed more often.
         Thus, to withstand the harsh conditions of the attention economy, ganimals adapt to the crowd’s opinions and preferences. So the question remains, which ganimals do you want to thrive? 
         We built Meet the Ganimals to showcase how artificial intelligence can not only generate images of realistic animals,
         but also images of believable hybrid animals. These hybrid animals are created with a Generative Adversarial Network (GAN), which we baked into their name: ganimals. When we comb</p>
  
    </div>
    </>
  );
};
  
export default ProjectDetails;