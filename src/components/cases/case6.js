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
        <div className="case-text">
          <h2>Kite: Community of Artworks</h2>
          <p>
            Social media marketing is a very crowded field. Everyone is going to
            tell you how to do things, but how do you know who to listen to?
            Those on the bandwagon are out there and can be found easily. It is
            those that have gone before us and gone through the ringer that we
            should take notice of and listen to.
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
          <h2>The most creative and valuable place</h2>
          <p>
            Social media marketing can be a valuable tool in your marketing
            strategy as long as you know what to do and how to do it. We helped
            Kite in enhancing their social media channels, maximize their
            exposure and successfully ride the wave of social media marketing
            opportunities.
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
          <h2>Bring new audience everyday</h2>
          <p>
            If you want to recruit additional customers, you're going to need to
            consider using a social media marketing platform. Social media
            marketing is all about using popular sites like Facebook and Twitter
            to drive traffic and generate leads.
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
        <div className="case-text">
          <h2>Are you confused?</h2>
          <p>
            Sometimes it's hard to know exactly how to use these platforms. The
            thing with social media is that it's fast-paced so you need the
            right information in order to be successful.
          </p>
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
        <div className="case-text">
          <h2>Conclusion</h2>
          <p>
            The journey began on 10th may 2021 when they rolled up themselves
            with common passion to develop a marketplace for creative people to
            sell their unique artworks in digital format (PNG, JPG, Vector) at
            an affordable price.
          </p>
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
