import Footer from "../global/Footer";
import "../../styles/cases/case.css";
import "../../styles/commonStyles/header.css";
import { motion } from "framer-motion";
import img1 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-01.png";
import img2 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-02.png";
import img3 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-03.png";
import img4 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-04.png";
import img5 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-05.png";
import img6 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-06.png";
import img7 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-07.png";
import img8 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-08.png";
import img9 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-09.png";
import img10 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-10.png";
import img11 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-11.png";
import img12 from "../../styles/imgs/TECHNIEK SOCIAL MEDIA ARTWORK CASE STUDY/TECHNIEK - Social Media_Case Study 2-12.png";

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
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img2}
            alt=""
          />
        </div>
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img3}
            alt=""
          />
        </div>

        <div className="case-text">
          <h2>Create a strong social media profile</h2>
          <p>
            Social media is a powerful, effective tool for reaching an
            ever-growing audience. Social networks such as Instagram and Twitter
            can be used to effectively build relationships with fans.
          </p>
        </div>

        <div className="fullImg-container">
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img4}
            alt=""
          />
        </div>
        <div className="fullImg-container">
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img5}
            alt=""
          />
        </div>

        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img6}
            alt=""
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

        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img7}
            alt=""
          />
        </div>
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img8}
            alt=""
          />
        </div>
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img9}
            alt=""
          />
        </div>
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img10}
            alt=""
          />
        </div>
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img11}
            alt=""
          />
        </div>
        <div className="case-text">
          <h2>Become an ace of social media strategies</h2>
          <p>
            Do you want to master social media marketing? For starters, what do
            you want to achieve with your presence on social media? Is it about
            increasing sales, or engagement with an audience, or maybe even
            building trust?
          </p>
        </div>
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img12}
            alt=""
          />
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}

export default Case1;
