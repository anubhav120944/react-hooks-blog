import { useState, useEffect } from 'react';
import { colRef } from '../firebase';
import { Link } from 'react-router-dom';
import { onSnapshot } from 'firebase/firestore';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   onSnapshot(colRef,(snapshot)=>{
    const blog = snapshot.docs.map((doc)=> {
        return {
          id: doc.id,
          ...doc.data(),
        };
      })
      setPosts(blog);
   })
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Aakash</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
