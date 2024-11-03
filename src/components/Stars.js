import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";

const Stars = ({ postId }) => {
  const [starred, setStarred] = useState(false);
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const postRef = doc(db, "blogPosts", postId);
        const postSnap = await getDoc(postRef);
        if (postSnap.exists()) {
          const data = postSnap.data();
          setStarCount(data.stars || 0);
        }
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    };

    const isStarred = localStorage.getItem(`starred_${postId}`);
    setStarred(isStarred === "true");

    fetchStarCount();
  }, [postId]);

  const handleStarClick = async () => {
    if (starred) return;

    try {
      const postRef = doc(db, "blogPosts", postId);
      await updateDoc(postRef, {
        stars: increment(1),
      });
      setStarred(true);
      setStarCount((prevCount) => prevCount + 1);
      localStorage.setItem(`starred_${postId}`, "true");
    } catch (error) {
      console.error("Error updating stars:", error);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        <button
          onClick={handleStarClick}
          disabled={starred}
          style={{
            color: "#ff00c3",
            backgroundColor: "#000",
            height: "7vh",
            width: "12vh",
            marginLeft: "10vh",
            marginBottom: "5vh",
            marginTop: "5vh",
            margin: "2vh",
            cursor: starred ? "not-allowed" : "pointer",
          }}
        >
          {starred ? "ty ily" : "✰"}
        </button>
        {starred && (
          <span>
            ✰ {starCount}
          </span>
        )}
      </div>
    </div>
  );
};

export default Stars;
