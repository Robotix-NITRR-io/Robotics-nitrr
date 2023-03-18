import React  from "react";
import  "./card.css";
//CiMenu,Kebab   menu <FaBeer /> AiFillLike
import {AiOutlineEllipsis, AiOutlineBars,AiFillHeart,AiFillMessage } from "react-icons/ai";

const Card = () => {
  return (<>
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
        </>
  );
};
  
export default Card;
