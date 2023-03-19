import React from 'react';
import "./ProjectDetails.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import img from "../components/assets/projectdetail.jpg";
import {AiFillHeart} from "react-icons/ai";
import axios from 'axios';
  
const ProjectDetails = () => {


const {id} = useParams();

const [ispost, setpost] = useState([]);
useEffect(() => {
    viewPost();
}, []);



function viewPost(){
  axios.get(`http://localhost:80/api/user/${id}`).then(function(res){
    console.log(res.data);
    setpost(res.data[0]);
  })
}



  return (<>
    <div>
    <div className="head" style={{ backgroundImage:`url(${ispost.thumb})`}}>
    <div className="D_head "><div className='D_center'>{ispost.title}</div></div>
    <p className="D_title">{ispost.description}</p>

   </div>
   <div className="D_contaner">
      <div className='D_paragraphTitle'><p><b>{id}:{ispost.title}</b></p></div>
      <p className='D_paragraph'><AiFillHeart/>
        <p className='post_descriptoin' dangerouslySetInnerHTML={{ __html: ispost.description}}/>
      </p>
      </div>
    </div>

    </>
  );
};
  
export default ProjectDetails;