import React, { useState, useEffect } from "react";

const PostsList = (props) => {
    const [filter, setFilter] = useState(props.children);
  
    useEffect(() => {
      setFilter(props.children);
    }, [props.children]);
  
    const getSearch = () => {
      if (filter) {
        return filter;
      }
      return props.children;
    };
    const postSearch = getSearch();
  
    const onChange = (e) => {
      setFilter(
        props.children.filter((post) =>
          post.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    };
  
    return (
      <>
        {props.search && (
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">search</i>
              <textarea
                id="icon_prefix2"
                class="materialize-textarea"
                onChange={onChange}
              ></textarea>
            </div>
          </div>
        )}
        <div>
            <h5>Title</h5>
            <div>Body</div>
            <div>Delete</div>
            <button>AddInModalWindow</button>
          
                
        
        {props.children &&
            postSearch.map((post) => (
            <div key={post.id}>
              <h5>{post.title}</h5>
              <div>{post.body}</div>
            

            <div>
                <i
                    className="material-icons"
                    onClick={() => props.deletePost(post.id)}
                  >
                    delete
                  </i>
            </div>
            <button onClick={()=>props}>AddInModalWindow</button>
            </div>
            ))}
            
        </div>
      </>
    );
  };
  
  export default PostsList;