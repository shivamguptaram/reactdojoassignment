import React,{useEffect,useState} from 'react'
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBlog,addComment,addUserBlog, addUserComment,addBlogApi, addCommentApi } from '../../Redux/blog/blogActions';
// import axios from 'axios';
import './Blog.css'
import Comment from './Comment';
const Blog = (props) => {
  // const [post, setpost] = useState([]);
  const [title, settitle] = useState('');
  const [body, setbody] = useState('');
  // const [comment, setcomment] = useState([]);
  const [userPost, setuserPost] = useState([]);
  const [userComment, setuserComment] = useState([]);
  const [createBlog, setcreateBlog] = useState(false);

  const navigate=useNavigate();
  var loggedInUser=useSelector((state)=>{
		return state.loginReducer.LoggedinUser.username
	});
  // const loginuser=window.localStorage.getItem('Login');
  // if(LoggedinUser)
  if(!loggedInUser){
    loggedInUser=JSON.parse(window.localStorage.getItem('Login')).username;
  }

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then((result)=>{
    //   props.addblog(result.data);
      
    //   const userpost =JSON.parse(window.localStorage.getItem('userpost'));
    //   if(userpost){
    //       props.addblog([...userpost,...result.data]);
    //       setuserPost(userpost)

    //     }
    // }).catch((error)=>console.log(error))
    props.addBlogApi();
    console.log("props in  blog",props.blog);
      const userpost =JSON.parse(window.localStorage.getItem('userpost'));
      if(userpost){
          props.addblog([...userpost]);
          setuserPost(userpost)
        }
    // axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    // .then((result)=>{
    //   props.addcomment(result.data);
    //   const usercomment =JSON.parse(window.localStorage.getItem('usercomment'));
    //   if(usercomment){
    //     props.addcomment([...result.data,...usercomment]);
    //     setuserComment(usercomment);
    //   }
    // })
    props.addCommentApi();
       const usercomment =JSON.parse(window.localStorage.getItem('usercomment'));
      if(usercomment){
        props.addcomment([...usercomment]);
        setuserComment(usercomment);
      }
    
    return () => {
      // second
      window.localStorage.clear();
    }
  },[]);

  let handlePost=(event)=>{
    event.preventDefault();
    let blogdata=
    {
      "userId": loggedInUser,
      "id": props.blog.length+userPost.length+1,
      "title": title,
      "body": body
    }
    // User custom blog post
    props.addUserBlog(blogdata);
    setuserPost(prev=>{window.localStorage.setItem('userpost',JSON.stringify([blogdata,...prev]))

     return [blogdata,...prev]
    });
    settitle('');
    setbody('');

  }
  let handleLogout=()=>{
    navigate('/Login');
  }
  let addComment=(newcomment,postid)=>{

    let comment1={
      "postId": postid,
      "id": props.comment.length+userComment.length+1,
      "name": "",
      "email": loggedInUser?loggedInUser:'DefaultUser',
      "body": newcomment
    }
    props.addusercomment(comment1);
    setuserComment(prev=>{
      window.localStorage.setItem('usercomment',JSON.stringify([...prev,comment1]));
      return [...prev,comment1]
    });
    
    }
  return (
    <div>
      <div className='heading'>
      <h1 className="main-heading"> Welcome To Cuelogic Blog {loggedInUser} </h1>
      <button className='btn-Logout' onClick={handleLogout}>Logout</button>
      </div>

    <div className="container">
  <div className="row">
    {!createBlog?<button className='createBlog' onClick={()=>setcreateBlog(true)}>Create New Blog</button>:''}
    {createBlog?
    <div className="col-md-12">
      <form>
        <div className="form-group">
        <i className="fa fa-close" id="closeBlog" onClick={()=>setcreateBlog(false)}></i>
          <input type="text" className="form-control" name="title" placeholder="Title" value={title} onChange={((e)=>settitle(e.target.value))}/>
        </div>
        <div className="form-group">
          <textarea className="form-control bcontent" name="content" value={body} placeholder="Add blog description" onChange={((e)=>setbody(e.target.value))}></textarea>
        </div>
        <div className="form-group">
           <input type="submit" name="Submit" value="Publish" className="btn btn-primary form-control" onClick={handlePost} />
        </div>
      </form>
    </div>:''}
  </div>
</div>
     <div className="card border-0">
     
      {
      props.blog.map((e)=><div className="card-body" key={e.id}>
          <h4 className="card-title">{e.title}</h4>
          <hr/>
          <p className="card-text">{e.body}</p>
          
          <Comment title='' postid={e.id} addcomment={addComment} content={props.comment.filter((e1)=>e1.postId===e.id)}/>

      </div>)
      }
    </div>
    </div>
  )
}

const mapStateToProps = state=>{
	return {
	 blog: state.blogReducer.blog,
   comment:state.blogReducer.comment
	}
 }
 const mapDispatchToProps=dispatch=> {
	return {
	  addblog: (data)=>dispatch(addBlog(data)),
    addUserBlog: (data)=>dispatch(addUserBlog(data)),
    addcomment:(data)=>dispatch(addComment(data)),
    addusercomment:(data)=>dispatch(addUserComment(data)),
    addBlogApi:()=>dispatch(addBlogApi()),
    addCommentApi:()=>dispatch(addCommentApi())
	}
  }
export default connect(mapStateToProps,mapDispatchToProps)(Blog);