import Footer from "../global/Footer";
import "../../styles/cases/case.css";
import "../../styles/commonStyles/header.css";
import { motion } from "framer-motion";
import img1 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-01.png";
import img2 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-02.png";
import img3 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-03.png";
import img4 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-04.png";
import img5 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-05.png";
import img6 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-06.png";
import img7 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-07.png";
import img8 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-08.png";
import img9 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-09.png";
import img10 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-10.png";
import img11 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-11.png";
import img12 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-12.png";
import img13 from "../../styles/imgs/KITE SOCIAL MEDIA ARTWORK/KITE- Social Media_Case Study - 2-13.png";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
function Case1() {
  return (
    <motion.div exit={{ opacity: 0 }} className="sections-padding">
      <main className="case-container">
        <div className="case-text">
          <h2>Kite social media artworks</h2>
          <p>
            We recently did some social media artworks for the Kite social media
            artworks. Cheesecake's work for Kite shows the power of storytelling
            in social media.
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
          <h2>How did it begin?</h2>
          <p>
            What started as a simple and straightforward request soon evolved
            into something a lot more complex, detailed and tailored to meet our
            own specific requirements. We’re talking about the audiovisual
            communication strategy with the “Kite Social Media Artworks.”
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
          <h2>Where did we reach?</h2>
          <p>
            Once we put our minds to it and got going with the project, several
            unexpected obstacles arose, mainly due to the fast-growing digital
            age! We ended up creating small and engaging reels for Kite which
            was then uploaded on the social media handles to hit the target
            audience who came across the post.
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
          <h2>Take it easy!</h2>
          <p>
            Cheesecake Agency helped kite with social media artworks. Our
            clients needed detailed, but flexible designs for our social media
            marketing graphics. It was asked to develop a series of graphic
            artworks that would be shared on social media.
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
        <div className="case-text">
          <h2>Hence, satisfied!</h2>
          <p>
            It is always exciting when you work with a new brand for the first
            time, especially for an agency that is just starting out. The old
            saying 'work begets work' is 100% true. When we were approached by
            the Kite team to create social media content for the launch of their
            new platform, we were pretty excited! We know how much time and
            effort goes into creating social media content and this went to be
            no different.
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
      </main>

      <Footer />
    </motion.div>
  );
}

export default Case1;
