"use client";

import Image from "next/image";
import styles from "./page.module.css";
import xbrainstewx from '/public/images/xbrainstewx.png';
import selfie from '/public/images/selfie.webp';
import onlineNow from '/public/images/onlineNow.gif';
import marioStar from '/public/images/marioStar.gif';
import diary from '/public/images/diary.png';
import mew from '/public/images/mew.gif';
import MusicPlayer from "./Components/MusicPlayer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.pageContainer}>
          <div>
            <Image className={styles.brain} src={xbrainstewx} />
          </div>
          <div>
          <p className={styles.promo}>
  want a website like this? need some artwork or a logo? visit my page at 
  <a 
    target="_blank" 
    rel="noopener noreferrer" 
    className={styles.brainLink} 
    href="https://xbrainstewx.com"
  > xbrainstewx.com
  </a>, 
  or shoot me an email at 
  <a 
    href="mailto:ashley@xbrainstewx.com" 
    className={styles.brainLink}
  > ashley@xbrainstewx.com</a> :3
</p>

          </div>
          <div className={styles.boxContainer}>
            <div className={styles.aboutMe}>
              <div className={styles.aboutContainer}>
                <div className={styles.selfieMusic}>
                  <Image className={styles.selfie} src={selfie} />
                  <div className={styles.music}>
                    <MusicPlayer />
                  </div>
                </div>
                <div className={styles.aslContainer}>
                  <Image className={styles.marioStar} src={marioStar} />
                  <h1 className={styles.name}>
                    ashdooom!
                  </h1>
                  <h3 className={styles.asl}>
                    age: 27
                    <br />
                    sex: female
                    <br />
                    location: CT
                  </h3>
                  <div>
                    <Image className={styles.onlineNow} src={onlineNow} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.diary}>
              <div className={styles.diaryContainer}>
                <Image className={styles.diaryLogo} src={diary} />
                <div className={styles.diaryBoxContainer}>
                  <div className={styles.diaryBox}>
                    <div className={styles.diaryText}>
                      <div className={styles.dateMood}>
                        <Image className={styles.mew} src={mew} />
                        <br />
                        <br />
                        11.2.24
                        <br />
                        <br />
                        mood: satisfied
                        <br />
                        <br />
                        </div>
                        <p className={styles.diaryText}>
                          whoaaaa welcome!! i was bored and decided to revamp my original myspace-esque website i initially created! it was my first project (which is something i adore and cherish) and it took me 2 months!!!! but this website i wrapped up in a single night. its crazy how far my coding has come, its true when they say practice makes perfect. im going to be updating my blog periodically and of course if you want to request a commission feel free hmu, i am happy to work within budgets or even the bartering system if you feel like you have something to swap i will hear you out!!!! but ya im exhausted now and my eyes hurt from staring at the screen so g2g ima go eep. :3
                        </p>
                        <br />
                        <br />
                        <div className={styles.dateMood}>
                        2.24.23
                        <br />
                        <br />
                        mood: excited!
                        </div>
                      <br />
                      <br />
                      new diary entry! i havent updated this since i launched my little website. i had a few bugs here
                      and there
                      so my page was down for maintenance. i actually had a blast creating the construction page i
                      cooked up. ive
                      definitely improved and sped up. my awesome and sexy husband Ryan is helping me sign up for a
                      coding
                      bootcamp to help turn me from a freelance fun coder to a full stack web developer in only 11
                      months. im so
                      nervous and i have a nasty case of imposter syndrome. then again how many people can say they
                      built their
                      own website from scratch top to bottom using 100% of their own code? not to disparage people who
                      use
                      websites to build their websites. but there is something magical and satisfying to create
                      something with
                      your own two hands. anyway im talking too much .. thanks for checking out my website. next step
                      is to
                      intergrate some mf JAVASCRIPT in this bitch. nervous but excited :3 smell ya later
                      <br />
                      <br />
                      <br />
                      <br />
                      <div className={styles.dateMood}>
                        1.11.23
                        <br />
                        <br />
                        mood: accomplished + exhausted
                      </div>
                      <br />
                      <br />
                      yo im almost done building my website. id like to shoutout redbull, youtube, and my little hands
                      for helpin
                      me out with this fun project. my husband ryan also gets lots of props for supporting, cherishing
                      and pushing
                      me through my school werk and the building of this website. this page is soley for the girls
                      gays and theys.
                      enjoy my little babies.
                      <br />
                      <br />
                      <br />
                      <br />
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
