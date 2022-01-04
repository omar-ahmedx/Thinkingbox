import Footer from "../global/Footer";
import "../../styles/cases/case.css";
import "../../styles/commonStyles/header.css";
import { motion } from "framer-motion";
import img1 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-01.png";
import img2 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-02.png";
import img3 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-03.png";
import img4 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-04.png";
import img5 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-05.png";
import img6 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-06.png";
import img7 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-07.png";
import img8 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-08.png";
import img9 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-09.png";
import img10 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-10.png";
import img11 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-11.png";
import img12 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-12.png";
import img13 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-13.png";
import img14 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-14.png";
import img15 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-15.png";
import img16 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-16.png";
import img17 from "../../styles/imgs/UI UX/INDIE/CASE STUDY/INDIE-17.png";

function Case1() {
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <main className="case-container">
        <div className="overlap">
          <img className="full-img" src={img1} alt="" />
          <img className="full-img img-top" src={img2} alt="" />
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
        <div>
          <img className="full-img" src={img8} alt="" />
        </div>
        <div>
          <img className="full-img" src={img9} alt="" />
        </div>
        <div>
          <img className="full-img" src={img10} alt="" />
        </div>
        <div>
          <img className="full-img" src={img11} alt="" />
        </div>
        <div>
          <img className="full-img" src={img12} alt="" />
        </div>
        <div>
          <img className="full-img" src={img13} alt="" />
        </div>
        <div>
          <img className="full-img" src={img14} alt="" />
        </div>
        <div>
          <img className="full-img" src={img15} alt="" />
        </div>
        <div>
          <img className="full-img" src={img16} alt="" />
        </div>
        <div>
          <img className="full-img" src={img17} alt="" />
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}

export default Case1;
