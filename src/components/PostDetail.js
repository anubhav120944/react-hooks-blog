import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { colRef } from '../firebase';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect( async () => {
    // firestore
    //   .collection('posts')
    //   .doc(postId)
    //   .get()
    //   .then((snapshot) => {
    //     console.log('snapshot', snapshot.data());
    //     setPost(snapshot.data());
    //   });
    const postdetail = await getDoc(doc(colRef,postId))
    // console.log(postdetail.data())
    setPost(postdetail.data());

  }, []);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
