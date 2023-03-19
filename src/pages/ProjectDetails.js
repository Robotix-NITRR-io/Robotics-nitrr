import React from 'react';
import "./ProjectDetails.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import D_user_img from "./../components/assets/favicon.png"


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
    <div className="D_body">
    <div className="D_continer"> 

    <div className="head" style={{ backgroundImage:`url(${ispost.thumb})`}}> </div>
   
   <div className='D_context'>
    <div className="D_title "><div className='D_center'>{ispost.title}</div></div>
      <div className='D_paragraphTitle'><p><b>{id}:{ispost.title}</b></p></div>
        <p className='post_descriptoin' dangerouslySetInnerHTML={{ __html: ispost.description}}/>
        <p>Looks like we need to do ctrl+shift+p and search for User Settings. Filter for the emmet settings and select the Trigger expansion on tab then the ! is replaced with the corresponding emmet snippet.

I also selected Show suggestions as snippets, but the intellisense / snippet is still not showing up</p>
<p>Been very annoyed for many, many long minutes by the boilerplate shortcut's suddenly, inexplicably not working (maugre much extension-de-installing and intalling and re-installing, even with VS Code uninstalls and re-installs, but what I'm come up with from mining various forums (what does seem to work and doesn't appear to be settings-dependent or peculiar to my laptop) is</p>
      </div>
       <div className='D_footer'>
        <div className='D_user'> <img className='D_user_img' src={D_user_img} alt="Logo" /></div>
        <div className='D_user_name'>
          <p className='D_user_name Author '><b>Author</b></p>
          <p className='D_user_name name '>Aman</p>

        </div>
       </div>

    </div>
    </div>
    </>
  );
};
  
export default ProjectDetails;