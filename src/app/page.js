"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import xbrainstewx from "/public/xbrainstewx.png";
import selfie from "/public/selfie.png";
import onlineNow from "/public/onlineNow.gif";
import marioStar from "/public/marioStar.gif";
import diaryLogo from "/public/diary.png";
import mew from "/public/mew.gif";
import amy from "/public/amy.gif";
import extended from "/public/extended.png";
import Stars from "../components/Stars";
import MusicPlayer from "../components/MusicPlayer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogPosts"));
        const postsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          const date = data.date || "Date not available";

          return { id: doc.id, ...data, date };
        });
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.pageContainer}>
          {/* Header Section */}
          <div>
            <Image className={styles.brain} src={xbrainstewx} alt="Brain Image" />
          </div>
          <div>
            <p className={styles.promo}>
              want a website like this? need some artwork or a logo? visit my page at
              <a target="_blank" rel="noopener noreferrer" className={styles.brainLink} href="https://xbrainstewx.com"> xbrainstewx.com </a>
              or shoot me an email at
              <a href="mailto:ashley@xbrainstewx.com" className={styles.brainLink}> ashley@xbrainstewx.com</a> :3
            </p>
          </div>

          <div className={styles.boxContainer}>
            <div className={styles.leftColumn}>
              <div className={styles.aboutMe}>
                <div className={styles.aboutContainer}>
                  <div className={styles.selfieMusic}>
                    <Image className={styles.selfie} src={selfie} alt="Selfie" />
                    <div className={styles.music}>
                      <MusicPlayer />
                    </div>
                    <Image className={styles.amy} src={amy} alt="Amy Image" />
                  </div>

                  <div className={styles.infoContainer}>
                    <div className={styles.headlineContainer}>
                      <h1 className={styles.headline}>ashdooom!</h1>
                      <p className={styles.quote}>"is it still me who makes you sweat? am i who you think about in bed?"</p>
                      <Image className={styles.marioStar} src={marioStar} alt="Mario Star" />
                    </div>

                    <div className={styles.aslContainer}>
                      <h3 className={styles.asl}>
                        age: 27
                        <br />
                        sex: female
                        <br />
                        location: CT
                      </h3>
                      <Image className={styles.onlineNow} src={onlineNow} alt="Online Now" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.url}>
                <p>
                  <i>xbrainspacex urls:</i>
                  <br />
                  <a className={styles.urlText} href="https://xbrainstewx.com">main page</a>
                  <br />
                  <a className={styles.urlText} href="https://instagram.com/xbrainstewx.art">art instagram</a>
                  <br />
                  <a className={styles.urlText} href="https://instagram.com/xbrainstewx">personal instagram</a>
                  <br />
                  <a className={styles.urlText} href="https://x.com/brainxstew">x</a>
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.rightColumn}>
              <div className={styles.extended}>
                <div>
                  <p className={styles.url}>
                    <a className={styles.ashdooom} href="https://xbrainstewx.com">ashdooom!</a> is in your extended network
                  </p>
                </div>
              </div>
              <div className={styles.diary}>
                <div className={styles.diaryContainer}>
                  <Image className={styles.diaryLogo} src={diaryLogo} alt="Diary Logo" />
                  <div className={styles.diaryBoxContainer}>
                    <div className={styles.diaryBox}>
                      <div className={styles.mew}>
                        <Image className={styles.mew} src={mew} alt="Mew Image" />
                      </div>
                      {posts.length > 0 ? (
                        posts.map((post) => (
                          <div key={post.id} className={styles.diaryText}>
                            <div className={styles.dateMood}>
                              {post.date}
                              <br />
                              mood: {post.mood}
                            </div>
                            <p>{post.post}</p>
                            <Stars postId={post.id} />
                            <hr />
                          </div>
                        ))
                      ) : (
                        <p>Loading posts...</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
