import { useEffect, useState } from "react";

const Posts = () => {
  // https://jsonplaceholder.typicode.com/posts
  // in react we use state variables to store API data
  const [posts, setPosts] = useState([]);

  /* 
    we use the useEffect hook to make API calls in React (by far the most common case for useEffect)
    
    -with an empty dependency array, we call fetch on our API during the initial render in order to retrieve the data
    
    -after receiving the data, we store it in a state variable that we can utilize to render our data

    - without useEffect, the API call would trigger whenever the component is re-rendered, which is whenver its state changes.  we don't want this!  especially because we are changing state whenever we make an API call to store the data
  */
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      // console.log(data)
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div>
          <h3>
            {post.id}. {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
