import Footer from "../global/Footer";
import "../../styles/cases/case.css";
import "../../styles/commonStyles/header.css";
import { motion } from "framer-motion";
import img1 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-01.png";
import img2 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-02.png";
import img3 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-03.png";
import img4 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-04.png";
import img5 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-06.png";
import img6 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-07.png";
import img7 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-08.png";
import img8 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-09.png";
import img9 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-10.png";
import img10 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-12.png";
import img11 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-13.png";
import img12 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-14.png";
import img13 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-15.png";
import img14 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-16.png";
import img15 from "../../styles/imgs/WEBSITE ARTWORK/New folder/KITE - Web Art_Case Study 4-18.png";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
function Case1() {
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <main className="case-container">
        <div className="fullImg-container">
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img1}
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
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img12}
            alt=""
          />
        </div>
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img13}
            alt=""
          />
        </div>
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img14}
            alt=""
          />
        </div>
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img15}
            alt=""
          />
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}

export default Case1;
