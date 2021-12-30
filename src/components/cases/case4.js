import Footer from "../global/Footer";
import "../../styles/cases/case.css";
import "../../styles/commonStyles/header.css";
import { motion } from "framer-motion";
import img1 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website THUMBNAIL.png";
import img2 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website_Case Study-01 a.png";
import img3 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website_Case Study-02.png";
import img4 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website_Case Study-03.png";
import img5 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website_Case Study-04.png";
import img6 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website_Case Study-05.png";
import img7 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website_Case Study-06.png";
function Case1() {
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <header>
        <div className="slide-header">
          <h1>
            <span className="scribble">
              <span className="scribble-text">We are a globa</span>
              <span className="scribble-container"></span>
            </span>
            l
            <br />
            <span>creative collective.</span>
          </h1>
          <h2>
            <span>
              <p>We shape the future of brands</p>
              <p>through craft and curiosity</p>
            </span>
          </h2>
        </div>
      </header>

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
          <img className="full-img" src={img2} alt="" />
        </div>
        <div>
          <img className="full-img" src={img3} alt="" />
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
          <img className="full-img" src={img4} alt="" />
        </div>
        <div className="fullImg-container">
          <img className="full-img" src={img5} alt="" />
        </div>

        <div>
          <img className="full-img" src={img6} alt="" />
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
          <img className="full-img" src={img7} alt="" />
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}

export default Case1;
