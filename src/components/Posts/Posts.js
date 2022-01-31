import Post from "../Post/Post";
import "./Posts.css";

function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map(p=>(
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}

export default Posts