import Footer from "../global/Footer";
import "../../styles/cases/case.css";
import "../../styles/commonStyles/header.css";
import { motion } from "framer-motion";
import img1 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website THUMBNAIL.png";
import img3 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website_Case Study-02.png";
import img4 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website_Case Study-03.png";
import img5 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website_Case Study-04.png";
import img6 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website_Case Study-05.png";
import img7 from "../../styles/imgs/FRONTEND/CLONE WEBSITE/Clone Artist website_Case Study-06.png";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
function Case1() {
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <main className="case-container">
        <div className="case-text">
          <h2>Bravo! Your front end web page is live!</h2>
          <p>
            When you look for a frontend development service, you need to work
            with someone who listens to your needs and understands your vision.
            While working for Clone, we could take pride in our communication
            with clients.
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
            data-src={img3}
            alt=""
          />
        </div>

        <div className="case-text">
          <h2>Get what you deserve!</h2>
          <p>
            We take time to craft the best solution for your project and make
            ourselves available for questions and updates throughout the
            process. Our goal is to provide high quality interactive websites
            that are built to last a lifetime. And, we love meeting new clients
            and giving them an opportunity to work alongside us as we develop
            their project together.
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
          <h2>Conclusion</h2>
          <p>
            Whether you’re looking to build a new site or update an old one, we
            can point you in the right direction. We helped Clone with the
            strongest and easiest UI UX services.
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
      </main>

      <Footer />
    </motion.div>
  );
}

export default Case1;
