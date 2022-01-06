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

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
function Case1() {
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <main className="case-container">
        <div className="case-text">
          <h2>Indie: The hub for all Subscriptions </h2>
          <p>
            Most of the applications that you come across in your day to day
            life, follow the same pattern. It’s fine and professionals can
            understand this rule. But when it comes to subscription based
            services, things change.
          </p>
        </div>
        <div className="overlap">
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img1}
            alt=""
          />
          <img className="full-img img-top" src={img2} alt="" />
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
          <h2>Journey And wireframes</h2>
          <p>
            An online subscription purchasing application offers a variety of
            benefits over traditional methods. The user interface is the face of
            the application, so it is important that it reflects professionalism
            and reliability. This post looks at the UI in order to provide
            insight into this specific design challenge.
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
          <h2>Capability of UI and UX</h2>
          <p>
            Investing in a huge redesign of your website might seem like a quick
            fix for improving your UI and overall UX. In fact, not long ago the
            old blog design was upgraded for the ultimate UIs and UXes. And what
            happened? Not a lot. Even though the web design was everything it
            could possibly be with the best images for faster UIs and super
            smooth UXes.
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
          <h2>All in one services possible with UI and UX</h2>
          <p>
            The design of the UI and UX of a subscription purchasing application
            is fundamentally important to customers. While you think they will
            be most influenced by the actual purchase, you may be incorrect. A
            good design can mean not just less refunds, but also more sales at a
            higher revenue.
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
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img16}
            alt=""
          />
        </div>
        <div>
          <img
            className="full-img lazyload"
            data-sizes="auto"
            data-src={img17}
            alt=""
          />
        </div>
        <div className="case-text">
          <h2>Conclusion</h2>
          <p>
            Most of the websites that you come across in your day to day life,
            follow the same pattern. It’s fine and professionals can understand
            this rule. But when it comes to subscription based services, things
            change. A converging user experience with a different approach is
            taken.
          </p>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}

export default Case1;
