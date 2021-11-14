import Header from "components/molecules/Header";
import { Container } from "styles/Home";
import Meta from "../components/atoms/Meta/Meta";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [blackHeader, setBlackHeader] = useState(false);
  const [topBtn, setTopBtn] = useState(false);

  function handleScrollTop() {
    var Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;

    scroll.scrollToTop();
  }

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 700) {
        setBlackHeader(true);
        setTopBtn(true);
      } else {
        setBlackHeader(false);
        setTopBtn(false);
      }
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <Meta />
      <Header black={blackHeader} />
      <Container>
        {topBtn && (
          <AnimatePresence>
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
                exit: {
                  opacity: 0,
                },
              }}
            >
              <button onClick={handleScrollTop} className="topBtn">
                <BiChevronUp size={40} />
              </button>
            </motion.div>
          </AnimatePresence>
        )}
        <section id="Hero" className="hero">
          <img src="/Logo.svg" alt="Logo" />
          <button>I WANT TO SIGN</button>
        </section>
        <section id="Plans" className="cards">
          <div className="arrow">
            <Link
              activeClass="active"
              to="Plans"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <BiChevronDown size={70} />
            </Link>
          </div>
          <div className="title-cards">
            <h1>Choose your plan</h1>
          </div>
          <div className="cards-wrap">
            <div className="card">
              <div className="card-top">
                <h1>Monthly plan</h1>
                <h2>$ 10,90/month</h2>
                <p>
                  Subscribe to TrashFlix's monthly plan and find series, movies
                  that are perfect for you.
                </p>
              </div>
              <div className="card-btn">
                <button>CHOOSE</button>
              </div>
            </div>
            <div className="card-middle">
              <div className="card-top">
                <div className="most">Most Popular</div>
                <h1>Quarterly plan</h1>
                <h2>$ 28,90/quarter</h2>
                <p>
                  Subscribe to TrashFlix's quarterly plan and find series,
                  movies that are perfect for you.
                </p>
              </div>
              <div className="card-btn">
                <button>CHOOSE</button>
              </div>
            </div>
            <div className="card">
              <div className="card-top">
                <h1>Year plan</h1>
                <h2>$ 100,00/year</h2>
                <p>
                  Enjoy a whole year for a promotional price and find more than
                  you like.
                </p>
              </div>
              <div className="card-btn">
                <button>CHOOSE</button>
              </div>
            </div>
          </div>
        </section>
        <section id="Footer" className="footer"></section>
      </Container>
    </>
  );
}
