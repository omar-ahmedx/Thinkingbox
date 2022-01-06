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
          <h2>Enter into the world of digital arts</h2>
          <p>
            If you’ve been searching for digital art or vector images to spice
            up your website or blog, Kite Digital is here to help. We offer the
            best stock of scalable vector graphics and templates on the web. Not
            only are they high quality images, they’re affordable as well.
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
          <h2>Become aesthetically active</h2>
          <p>
            Art for websites that engage visitors and inspire conversation is
            disappearing. Many companies want to increase website conversions,
            web design trends are evolving, and the content you are creating
            needs to be painted a new light. Getting inspired will make every
            aspect of your website better.
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
          <h2>Your all-time favorite digital arts</h2>
          <p>
            ART is the perfect solution for those who want to do something
            special, something that stands out. Whether you choose posters or
            paintings, photographs or digital art, our prints will decorate your
            home in an attractive and elegant manner.
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
          <h2>Achieve your goals</h2>
          <p>
            It is important to understand the needs of the client and come up to
            their expectations accordingly. For Kite digital arts we had to
            think aesthetically and make the navigation easier for the users
            who’d come to browse the site.
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
          <h2>Make the correct choice</h2>
          <p>
            Kite Digital is a great choice for websites, professional designs
            for art. Big selection of any kind of digital art, it's easy to
            purchase online with our process. You can find great designs in our
            catalogue, with full support from our team.
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
        <div className="case-text">
          <h2>Conclusion</h2>
          <p>
            Kite Digital is a full-service digital art agency, specializing in
            the creation of graphics for online use. Whatever your design needs
            you can be sure to find an artist who fits the brief. Our artists
            have worked on many designs including album cover artwork and
            websites.
          </p>
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
