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
          <h2>Kite: The ace of social media strategies</h2>
          <p>
            Have you seen the Kite social media strategy? We at Cheesecake were
            really excited to be working with them on this exciting project.
            This is something that we would love to get involved in in the
            future. We love a good challenge and this seems like it will
            certainly be a tough one.
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
          <h2>Build a strong presence</h2>
          <p>
            One of the problems you face when creating social media strategy for
            a client is how to structure everything in a way that different
            users can understand. Different people have different ways of
            perceiving and understanding things, so creating a unique strategy
            for each client is important.
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
          <h2>The social media hype!</h2>
          <p>
            For many businesses and brands, social media is one of the most
            effective tools available to reach new audiences and connect with
            existing fans and followers. However, many new and small businesses
            actually underestimate the power that can be unlocked by leveraging
            social media effectively.
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
          <h2>Our journey with Kite</h2>
          <p>
            Cheesecake design agency helped Kite social media strategy enhance
            the UI and UX of the website. As a partner agency, we were able to
            help Kite’s social media strategy with user experience and UI design
            ideas that lead to a much more streamlined user experience.
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
