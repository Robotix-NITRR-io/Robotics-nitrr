import React  from "react";
import  "./card.css";

import {AiOutlineEllipsis, AiOutlineBars,AiFillHeart,AiFillMessage } from "react-icons/ai";
import favicon from "./../components/assets/favicon.png"
import gear from "./../components/assets/gear.png"

const Card = () => {
  return (<> 

  

  <div className="card1 ">
    <div className="Card_cantaner"> 
     <div className="card_img"></div>
     <div className="card_contex">
         <div className="card_user"></div>
         <div className="card_text"><b>Hack Game</b><p>alax</p></div>
         <div className="card_menu"><AiOutlineEllipsis/></div>
         <div className="icons_menu" ><AiOutlineBars/>
        </div>
     </div>
     <div className="display">
        <div className="card_icon">
          {/* <div className="icons"><AiFillLike/> <span>1</span> </div> */}
          <div className="icons"><AiFillHeart/> <span>2</span></div>
          <div className="icons"><AiFillMessage/> <span>3</span></div>
        </div>
        </div>
     </div>
     </div>

     <div className="rotation_box_position">
    <div className="rotation_box">
     <img className='favicon rotationL' src={favicon} alt="Logo" />
     <img className='gear rotationR' src={gear} alt="Logo" />
     </div> </div>
    
        </>
  );
};
  
export default Card;
