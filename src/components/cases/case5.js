import Footer from "../global/Footer";
import "../../styles/cases/case.css";
import "../../styles/commonStyles/header.css";
import { motion } from "framer-motion";
import img1 from "../../styles/imgs/SOCIAL MEDIA STRATEGY/New folder/KITE - Social Media Startegy Case Study-01.png";
import vid1 from "../../styles/imgs/SOCIAL MEDIA STRATEGY/New folder/KITE - Social Media Startegy Case Study-02.mp4";
import vid2 from "../../styles/imgs/SOCIAL MEDIA STRATEGY/New folder/KITE - Social Media Startegy Case Study-03.mp4";
import vid3 from "../../styles/imgs/SOCIAL MEDIA STRATEGY/New folder/KITE - Social Media Startegy Case Study-04.mp4";
import vid4 from "../../styles/imgs/SOCIAL MEDIA STRATEGY/New folder/KITE - Social Media Startegy Case Study-05.mp4";
import img2 from "../../styles/imgs/SOCIAL MEDIA STRATEGY/New folder/KITE - Social Media Startegy Case Study-06.png";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
function Case1() {
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <main className="case-container">
        <div className="case-text">
          <h2>Cheesecake: The social media strategist</h2>
          <p>
            Social media marketing is a way to get your information out to a
            large audience. Many companies are using social media marketing
            because this is where potential customers reside.
          </p>
        </div>
        <div className="fullImg-container">
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img1}
            alt=""
          />
        </div>

        <div>
          <video
            className="full-img"
            autoplay="true"
            loop="infinite"
            muted="true"
            src={vid1}
            type="vido/mp4"
          />
        </div>

        <div className="case-text">
          <h2>Build a strong social media profile</h2>
          <p>
            Social media is a powerful, effective tool for reaching an
            ever-growing audience. Social networks such as Instagram and Twitter
            can be used to effectively build relationships with fans.
          </p>
        </div>

        <div className="fullImg-container">
          <video
            className="full-img"
            autoplay="true"
            loop="infinite"
            muted="true"
            src={vid2}
            type="vido/mp4"
          />
        </div>

        <div className="case-text">
          <h2>Analyze your customer’s opinion</h2>
          <p>
            Social media marketing is the practice of interacting with customers
            through social media sites. Companies can use social media channels
            to research customer opinions about their products or services,
            reach new customers and guide them through the sales process, and
            communicate directly with consumers.
          </p>
        </div>
        <div className="fullImg-container">
          <video
            className="full-img"
            autoplay="true"
            loop="infinite"
            muted="true"
            src={vid3}
            type="vido/mp4"
          />
        </div>

        <div>
          <video
            className="full-img"
            autoplay="true"
            loop="infinite"
            muted="true"
            src={vid4}
            type="vido/mp4"
          />
        </div>

        <div className="case-text">
          <h2>Become an ace of social media</h2>
          <p>
            Do you want to master social media marketing? For starters, what do
            you want to achieve with your presence on social media? Is it about
            increasing sales, or engagement with an audience, or maybe even
            building trust.
          </p>
        </div>

        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img2}
            alt=""
          />
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}

export default Case1;
