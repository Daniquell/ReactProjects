import React, { useState,useEffect } from "react";
import PostsList from "../components/PostsList";
import MyModal from "../components/MyButton/MyModal/MyModal";
import axios from 'axios';
import Loader from 'react-loader-spinner'


const Posts=()=>{

  const[loading, setLoading]=useState(true);

  
  

const fetchPosts=async()=>{
    const posts=await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(posts.data)
    setLoading(false)
}
useEffect(() => {
    fetchPosts();
   
  },[]);



  const [posts, setPosts]=useState(null);
  const [post, setPost]=useState(
    {
      title:'',
      body:'',
    }
    );


  const onChange=(e)=>{
    if (e.target.id=="title"){
      setPost({...post, title: e.target.value});
    }
    else{
      setPost({...post, body: e.target.value});
    }
    
  };

  const addPost=()=>{
    const id=Math.random()*1
    setPost({...post,id:id})
    setPosts([...posts,post]);
    setPost({
      title:'',
      body:'',
    })
  }

  const removePost=(id)=>{
    const confirm=window.confirm("Реально удалить?");
    if (confirm) setPosts(posts.filter((post)=>post.id!==id))
    
  };



  const clear=()=>{
    setPost({title:'',body:''})
  }

console.log(posts);

const [showModal,setShowModal]=useState(false)


  

return(
  <div className="App">
    <div className="container">
        <button onClick={()=>fetchPosts()}>fetchPosts</button>
  

<MyModal visible={showModal} setVisible={setShowModal}>{
    <>
        <div className="input-field col s6">
          <i className="material-icons prefix"></i>
          <input id="title" type="text" class="validate" value={post.title} placeholder="EnterTitle"
           onChange={onChange}/>
         
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix"></i>
          <input id="body" type="tel" class="validate" value={post.body} placeholder="EnterBody" onChange={onChange}/>
        </div>
          
        
      


           <a id="Add" className="waves-effect waves-light btn m-1"
            onClick={()=>addPost()}
            >
            Add</a>
            <a className="waves-effect waves-light right btn m-1"
            onClick={()=>clear()}
          >Cancel</a>
        
        </>} 
           </MyModal>  

            <div className="row m-1">
      <div className="col s4">
        <a className="waves-effect waves-light btn"
        onClick={()=>setShowModal(true)}
        >
          Add post
        </a>
      </div>
      <div className="col s8">
        <a className="waves-effect waves-light btn"
      onClick={()=>setShowModal(true)}
        >
          Open post
        </a>        
      </div>
    </div>
    {loading? (
    <Loader
      className="center"
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      />
    ):
    (<PostsList search deletePost={removePost}>
      {posts}
    </PostsList>
    )}
  </div> </div>
          );

};

export default Posts;