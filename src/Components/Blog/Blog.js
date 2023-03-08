import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Blog.css'
import Comment from './Comment';
const Blog = () => {
  const [post, setpost] = useState([]);
  const [title, settitle] = useState('');
  const [body, setbody] = useState('');
  const [comment, setcomment] = useState([])
  const navigate=useNavigate();
  const loggedInUser=useSelector((state)=>{
		console.log("registered user",state.loginReducer);
		return state.loginReducer.LoggedinUser.username
	});

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result)=>{
      console.log(result);
      setpost(result.data);
    })
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((result)=>{
      console.log(result);
      setcomment(result.data);
    })
    return () => {
      // second
    }
  },[]);

  let handlePost=(event)=>{
    event.preventDefault();
    let blogdata=
    {
      "userId": loggedInUser,
      "id": post.length+1,
      "title": title,
      "body": body
    }
    setpost(prev=>[blogdata,...prev]);
    settitle('');
    setbody('');
  }
  let handleLogout=()=>{
    navigate('/Login');
  }
  let addComment=(newcomment,postid)=>{

    let comment={
      "postId": postid,
      "id": 4,
      "name": "",
      "email": loggedInUser?loggedInUser:'DefualtUser',
      "body": newcomment
    }
    setcomment(prev=>[...prev,comment]);
    // setnewcomment()
    console.log("comments",comment);
    }
  return (
    <div>
      <div className='heading'>
      <h1 className="main-heading"> Welcome To Cuelogic Blog {loggedInUser} </h1>
      <button className='btn-Logout' onClick={handleLogout}>Logout</button>
      </div>
      {/* <div><button>Create</button></div> */}
    <div class="container">
  <div class="row">
    <div class="col-md-12">
      <form>
        <div class="form-group">
          <input type="text" class="form-control" name="title" placeholder="Title" value={title} onChange={((e)=>settitle(e.target.value))}/>
        </div>
        <div class="form-group">
          <textarea class="form-control bcontent" name="content" value={body} placeholder="Add blog description" onChange={((e)=>setbody(e.target.value))}></textarea>
        </div>
        <div class="form-group">
           <input type="submit" name="Submit" value="Publish" class="btn btn-primary form-control" onClick={handlePost} />
        </div>
      </form>
    </div>
  </div>
</div>

{/* 
    <form>
      <div>
      <label for='title'>Title</label>
      <input className='blog-title' id='title' value={title} onChange={((e)=>settitle(e.target.value))}>  
      </input>
      </div>
      <textarea rows='5' cols='40' name='Description' spellcheck='false' placeholder='Enter the blog description' 
      value={body} onChange={((e)=>setbody(e.target.value))}
      >
      </textarea>
      <button type='submit' className='btn-post' onClick={handlePost}>Post</button>
    </form> */}

     <div class="card border-0">
      {
      post.map((e)=><div class="card-body" key={e.id}>
          <h4 class="card-title">{e.title}</h4>
          <hr/>
          <p class="card-text">{e.body}</p>
          
          <Comment title='' postid={e.id} addcomment={addComment} content={comment.filter((e1)=>e1.postId===e.id)}/>

      </div>)
      }
      {/* <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <hr/>
        <p class="card-text">Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod proiden.</p>
      </div> */}


      {/* <div class="card-footer">
        <div class="media align-items-center">
          <div class="media-body"><a class="card-link text-uppercase" href="javascript://">Read More</a></div>
          <div class="footerright">
            <div class="tnlink3"><i class="fas fa-heart" aria-hidden="true"></i></div>
            <div class="tnlink3"><i class="fas fa-share-nodes" aria-hidden="true"></i></div>
          </div>
        </div>
      </div> */}
    </div>

    </div>
  )
}

export default Blog