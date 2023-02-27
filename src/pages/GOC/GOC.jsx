import React,{useEffect,useState} from 'react';
import axios from "axios";
import getParams from "../../utils/getParams.js";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./GOC.css";
const GOC = (props) => {
  
  const params = getParams(props.location.pathname);
 
   const [user,setUser] = useState([]);
   const [score,setScore] = useState('');
   const [users,setUsers] = useState([]);

  useEffect(() =>{
    const postData = async()=>{
       const {data} = await axios.get('https://robotixnitrr.herokuapp.com/api/recruitment/retrieve/');
       
       
       
       setUser(data);
    }
    
    postData();
    
  },[]);

 

  const userData = user.filter((user)=> user.id === params);
 console.log(userData[0]);
 const AnswerLang = userData[0]?.QnA[0]?.Answer_Given;
 const Answer1 = userData[0]?.QnA[1]?.Answer_Given;
 const Answer2 = userData[0]?.QnA[2]?.Answer_Given;
 //according question same we can render all answer 




const submitScore =(e)=>{
  e.preventDefault();
  setUsers({...userData,score:score});

  localStorage.setItem("users", JSON.stringify(users));
}


  return (
    
          <div className="userShow">
         
         <div className="userContainer">
         <div className="userShowBottom1">
         <div className="userShowTop">
         <AccountCircleIcon style={{margin : "5px"}} className="userShowImg" />
           
            <div className="userShowTopTitle">
              <span className="userShowUsername">{userData[0]?.Name}</span>
              <span className="userShowUserTitle"> {userData[0]?.Branch} {userData[0]?.Year} Year </span>
              
            </div>
          </div>
            <span className="userShowTitle">Languages</span>
            <div className="userShowInfo">
             
              <span className="userShowInfoTitle">{AnswerLang}</span>
            </div>
            
            <span className="userShowTitle">Designation</span>
            <div className="userShowInfo">
             
              <span className="userShowInfoTitle">{Answer1}</span>
            </div>
            <div className="userShowInfo">
            
              <span className="userShowInfoTitle">{Answer2}</span>
            </div>
            
          </div>
          <div className="userShowBottom2">
            <span className="userShowTitle">More info</span>
            <div className="userShowInfo">
             
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">About</span>
            <div className="userShowInfo">
             
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
            
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            
          </div>
         </div>
         <div className="inputContainer" >
           <span className="inputTitle" >Give Score </span>
           <div className="inputFiled" style={{display:"flex",justifyContent: "space-around"}}>
           <input type="number" placeholder="Please give the score"   className="userUpdateInput" onChange={(e)=> setScore(e.target.value)} />
           <button className="userUpdateButton" onClick={submitScore} >Submit</button>
           </div>
         </div>
        </div>
      
    
  )
}

export default GOC