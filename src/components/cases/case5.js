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

function Case1() {
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <main className="case-container">
        <div className="fullImg-container">
          <img className="full-img" src={img1} alt="" />
        </div>
        <div className="case-text">
          <h2>Rise and shine</h2>
          <p>
            Mountain Dew wanted to launch their new mental-boosting,
            immune-supporting, no-sugar-added morning beverage with a bang, so
            we created a dynamic, kinetic and shoppable web experience. Working
            with agency partners Laundry Service, who provided a design inspired
            by Rise’s bright and bold packaging, we brought the cans and flavors
            to life in a smooth-scrolling WebGL site that is always in motion.
          </p>
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
          <h2>Rise and shine</h2>
          <p>
            Mountain Dew wanted to launch their new mental-boosting,
            immune-supporting, no-sugar-added morning beverage with a bang, so
            we created a dynamic, kinetic and shoppable web experience. Working
            with agency partners Laundry Service, who provided a design inspired
            by Rise’s bright and bold packaging, we brought the cans and flavors
            to life in a smooth-scrolling WebGL site that is always in motion.
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
          <h2>Rise and shine</h2>
          <p>
            Mountain Dew wanted to launch their new mental-boosting,
            immune-supporting, no-sugar-added morning beverage with a bang, so
            we created a dynamic, kinetic and shoppable web experience. Working
            with agency partners Laundry Service, who provided a design inspired
            by Rise’s bright and bold packaging, we brought the cans and flavors
            to life in a smooth-scrolling WebGL site that is always in motion.
          </p>
        </div>

        <div>
          <img className="full-img" src={img2} alt="" />
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}

export default Case1;
