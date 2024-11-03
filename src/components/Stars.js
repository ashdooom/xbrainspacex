import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";

const Stars = ({ postId }) => {
  const [starred, setStarred] = useState(false);

  useEffect(() => {
    const isStarred = localStorage.getItem(`starred_${postId}`);
    setStarred(isStarred === "true");
  }, [postId]);

  const handleStarClick = async () => {
    if (starred) return;

    try {
      const postRef = doc(db, "blogPosts", postId);
      await updateDoc(postRef, {
        stars: increment(1),
      });
      setStarred(true);
      localStorage.setItem(`starred_${postId}`, "true");
    } catch (error) {
      console.error("Error updating stars:", error);
    }
  };

  return (
    <button 
    onClick={handleStarClick} 
    disabled={starred}
    style={{
      color: '#fff',
      backgroundColor: '#000',
      height: 25,
      width: 35,
      margin: 2,
      marginTop: 15,
      marginbotton: 15,
      cursor: starred ? "not-allowed" : "pointer"
    }}
    >
      {starred ? "ty ily" : "✰"}
    </button>
  );
};

export default Stars;
