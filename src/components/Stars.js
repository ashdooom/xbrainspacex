import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../app/firebaseConfig";
import styles from "../app/page.module.css"

const Stars = ({ postId }) => {
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    const fetchStarCount = async () => {
      const postRef = doc(db, "blogPosts", postId); 
      const postSnap = await getDoc(postRef);

      if (postSnap.exists()) {
        setStarCount(postSnap.data().starCount || 0);
      }
    };

    fetchStarCount();
  }, [postId]);

  const handleStarClick = async () => {
    setStarCount((prevCount) => prevCount + 1);

    const postRef = doc(db, "blogPosts", postId);
    await updateDoc(postRef, {
      starCount: increment(1),
    });
  };

  return (
    <div className={styles.reactions}>
      <button onClick={handleStarClick} className={styles.reactionButton}>
        ✰ <span>{starCount}</span>
      </button>
    </div>
  );
};

export default Stars;
