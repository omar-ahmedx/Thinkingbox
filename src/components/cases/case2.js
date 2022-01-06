import Footer from "../global/Footer";
import "../../styles/cases/case.css";
import "../../styles/commonStyles/header.css";
import { motion } from "framer-motion";
import img1 from "../../styles/imgs/UI UX/KITE/CASE STUDY/kite llc-01.png";
import img2 from "../../styles/imgs/UI UX/KITE/CASE STUDY/kite llc-02.png";
import img3 from "../../styles/imgs/UI UX/KITE/CASE STUDY/kite llc-03.png";
import img4 from "../../styles/imgs/UI UX/KITE/CASE STUDY/kite llc-04.png";
import img5 from "../../styles/imgs/UI UX/KITE/CASE STUDY/kite llc-05.png";
import img6 from "../../styles/imgs/UI UX/KITE/CASE STUDY/kite llc-06.png";

import holder from "../../styles/imgs/holder.jpg";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
function Case1() {
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <main className="case-container">
        <div className="fullImg-container">
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img1}
            src={holder}
            alt=""
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
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img2}
            src={holder}
            alt=""
          />
        </div>
        <div>
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img3}
            src={holder}
            alt=""
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
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img4}
            src={holder}
            alt=""
          />
        </div>
        <div className="fullImg-container">
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img5}
            src={holder}
            alt=""
          />
        </div>

        <div>
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img6}
            src={holder}
            alt=""
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
      </main>

      <Footer />
    </motion.div>
  );
}

export default Case1;
