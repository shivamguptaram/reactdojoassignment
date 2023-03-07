import React, { useState } from 'react';
import './Comment.css'
const Comment = ({ title, content,postid,addcomment }) => {
  const [isActive, setIsActive] = useState(false);
  const [newcomment, setnewcomment] = useState('');
// let handleComment=()=>{

//     }
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? <span>Hide Comment <i className="fa fa-angle-up" ></i></span> : <span>View Comment <i className="fa fa-angle-down" ></i></span> }</div>
      </div>
      {isActive && <div className="accordion-content">{content.map((comment)=>
      <div class="cardflex">
        <div class="flexcontainer">
            <div className='email'><b>{comment.email}</b></div>

            <div>{comment.body}</div>
        </div>
        </div>
       
      )} <input type="text" value={newcomment} onChange={(e)=>setnewcomment(e.target.value)}/>
      <button onClick={()=>addcomment(newcomment,postid)}>Comment</button>
      </div>}
    
    </div>
  );
};

export default Comment;