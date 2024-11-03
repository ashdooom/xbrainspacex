"use client";

import Image from "next/image";
import styles from "./page.module.css";
import xbrainstewx from '/public/images/xbrainstewx.png';
import selfie from '/public/images/selfie.png';
import onlineNow from '/public/images/onlineNow.gif';
import marioStar from '/public/images/marioStar.gif';
import diary from '/public/images/diary.png';
import mew from '/public/images/mew.gif';
import amy from '/public/images/amy.gif';
import extended from '/public/images/extended.png';
import MusicPlayer from "./Components/MusicPlayer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.pageContainer}>
          <div>
            <Image className={styles.brain} src={xbrainstewx} alt="Brain Image" />
          </div>
          <div>
            <p className={styles.promo}>
              want a website like this? Need some artwork or a logo? visit my page at
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
                  xbrainspacex urls:
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

            <div className={styles.rightColumn}>
              <div className={styles.extended}>
                <Image className={styles.extendedImg} src={extended} alt="Extended Image" />
              </div>

              <div className={styles.diary}>
                <div className={styles.diaryContainer}>
                  <Image className={styles.diaryLogo} src={diary} alt="Diary Logo" />
                  <div className={styles.diaryBoxContainer}>
                    <div className={styles.diaryBox}>
                      <div className={styles.diaryText}>
                        <div className={styles.dateMood}>
                          <Image className={styles.mew} src={mew} alt="Mew Image" />
                          <br />
                          11.2.24
                          <br />
                          mood: satisfied
                        </div>
                        <p className={styles.diaryText}>
                          whoaaaa welcome!! i was bored and decided to revamp my original myspace-esque website i initially created! it was my first project (which is something i adore and cherish) and it took me 2 months!!!! but this website i wrapped up in a single night. its crazy how far my coding has come, its true when they say practice makes perfect. im going to be updating my blog periodically and of course if you want to request a commission feel free hmu, i am happy to work within budgets or even the bartering system if you feel like you have something to swap i will hear you out!!!! but ya im exhausted now and my eyes hurt from staring at the screen so g2g ima go eep. :3
                        </p>

                        <div className={styles.dateMood}>
                          2.24.23
                          <br />
                          mood: excited!
                        </div>
                        <p>
                          new diary entry! i havent updated this since i launched my little website. i had a few bugs here
                          and there, so my page was down for maintenance. my awesome and sexy husband Ryan is helping me sign up for a coding bootcamp... nervous but excited :3 smell ya later
                        </p>

                        <div className={styles.dateMood}>
                          1.11.23
                          <br />
                          mood: accomplished + exhausted
                        </div>
                        <p>
                          yo im almost done building my website. id like to shoutout redbull, youtube, and my little hands for helpin me out with this fun project. enjoy my little babies.
                        </p>
                      </div>
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
