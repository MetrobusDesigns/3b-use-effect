import { useEffect, useState } from "react";

const SinglePost = () => {
  // state to keep track of our post data
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  // state to keep track of the id we submit
  const [submitId, setSubmitId] = useState(1);

  useEffect(() => {
    // utilizing the submitId in the URL
    const url = `https://jsonplaceholder.typicode.com/posts/${submitId}`;
    const fetchPost = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setPost(data);
    };
    fetchPost();
    // dependency for submitId, when we get a new ID, we run the callback function to make an API call
  }, [submitId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitId(id);
  };

  return (
    <>
      <h2>Single Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select an ID: </label>
          <input
            type="number"
            min={1}
            max={100}
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
      <div>
        <h3>
          {post.id}. {post.title}
        </h3>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default SinglePost;
