import Footer from "../global/Footer";
import "../../styles/cases/case.css";
import "../../styles/commonStyles/header.css";
import { motion } from "framer-motion";
import img1 from "../../styles/imgs/UI UX/PORTFOLIO WEBSITE/CASE STUDY/cream portfolio-05.png";
import img2 from "../../styles/imgs/UI UX/PORTFOLIO WEBSITE/CASE STUDY/cream portfolio-06.png";
import img3 from "../../styles/imgs/UI UX/PORTFOLIO WEBSITE/CASE STUDY/cream portfolio-07.png";
import img4 from "../../styles/imgs/UI UX/PORTFOLIO WEBSITE/CASE STUDY/cream portfolio-17.png";
import img5 from "../../styles/imgs/UI UX/PORTFOLIO WEBSITE/CASE STUDY/cream portfolio-18.png";
import img6 from "../../styles/imgs/UI UX/PORTFOLIO WEBSITE/CASE STUDY/cream portfolio-19.png";
import img7 from "../../styles/imgs/UI UX/PORTFOLIO WEBSITE/CASE STUDY/cream portfolio-20.png";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
function Case1() {
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <main className="case-container">
        <div className="case-text">
          <h2>Highly interactive website</h2>
          <p>
            In today's tech-savvy world, improving user interfaces and
            experiences is crucial to staying competitive. a single or one-page
            website has only one HTML page. One page websites are more
            responsive, attractive and mobile-friendly. Cheesecake is proud to
            offer an array of UI UX design services to help your business
            generate better revenue.
          </p>
        </div>
        <div className="fullImg-container">
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img1}
            alt=""
          />
        </div>

        <div>
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img2}
            alt=""
          />
        </div>
        <div>
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img3}
            alt=""
          />
        </div>

        <div className="case-text">
          <h2>The UI Hub</h2>
          <p>
            Have you ever had trouble finding design inspiration? You’re not
            alone. I’m sure you’ve created an amazing website, but still don’t
            know how to improve UI/UX for your users. I frequently find myself
            in that dilemma and I know a lot of people are too embarrassed to
            ask for help.
          </p>
        </div>

        <div className="fullImg-container">
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img4}
            alt=""
          />
        </div>
        <div className="case-text">
          <h2>Design System</h2>
          <p>
            One of the things that make the user interface design work is
            iconography. A lot of people think that icons are just a way to make
            buttons and interfaces look better. The main purpose, however, is
            quite different. Frontend Development Company can improve how users
            interact with your website and make it easier to understand and use.
          </p>
        </div>
        <div className="fullImg-container">
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img5}
            alt=""
          />
        </div>

        <div>
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img6}
            alt=""
          />
        </div>

        <div className="case-text">
          <h2>Conclusion</h2>
          <p>
            Achieving the best user experience is the trend of modern web
            development. When it comes to solving any task and reaching success,
            a good UI UX design firm can be really helpful. Here we suggest to
            you our advanced UI UX design services.
          </p>
        </div>

        <div>
          <img
            className="full-img lazyload blur-img"
            data-sizes="auto"
            data-src={img7}
            alt=""
          />
        </div>
      </main>

      <Footer />
    </motion.div>
  );
}

export default Case1;
