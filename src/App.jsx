import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import rightImg from './assets/right.png';
import logoImg from './assets/logo_transparent.png';
import lemonImg from './assets/lemon.png';
import pudinaImg from './assets/pudina.png';
import chillyImg from './assets/chilly.png';
import strawberryImg from './assets/strawberrycream.png';
import cheeseBowlImg from './assets/cheese_bowl.png';
import chocolateBowlImg from './assets/chocolate_bowl.png';
import pop1Img from './assets/pop1.png';
import pop2Img from './assets/pop2.png';
import pop3Img from './assets/pop3.png';
import lemon2Img from './assets/lemon2.png';
import chilly2Img from './assets/chilly2.png';
import caramelImg from './assets/caramel.png';
import periperiImg from './assets/periperi.png';
import chocolateImg from './assets/chocolate.png';
import saltedImg from './assets/salted.png';
import magicmasalaImg from './assets/magicmasala.png';
import creamonionImg from './assets/creamonion.png';
import pudinapunchImg from './assets/pudinapunch.png';


const FirstPageContent = () => {
  const screenRef = useRef(null);

  const floatingImages = [
    // Original 9
    { src: lemonImg, alt: 'Lemon', classes: 'top-[15%] left-[5%] w-24 sm:w-32 md:w-40 rotate-[-15deg]' },


    { src: pop3Img, alt: 'Popcorn 3', classes: 'top-[8%] left-[30%] w-14 sm:w-20 md:w-28 rotate-[110deg]' },
    { src: lemon2Img, alt: 'Lemon 2', classes: 'bottom-[12%] right-[25%] w-16 sm:w-24 md:w-32 rotate-[-10deg]' },


    // 5 more Popcorns
    { src: pop1Img, alt: 'Popcorn', classes: 'top-[20%] left-[8%] w-12 sm:w-16 md:w-20 rotate-[45deg]' },
    { src: pop2Img, alt: 'Popcorn', classes: 'bottom-[35%] left-[10%] w-10 sm:w-14 md:w-16 rotate-[-20deg]' },
    { src: pop3Img, alt: 'Popcorn', classes: 'bottom-[10%] left-[20%] w-14 sm:w-18 md:w-24 rotate-[80deg]' },
    { src: pop1Img, alt: 'Popcorn', classes: 'bottom-[35%] right-[8%] w-12 sm:w-16 md:w-20 rotate-[-60deg]' },
    { src: pop2Img, alt: 'Popcorn', classes: 'top-[12%] right-[25%] w-10 sm:w-12 md:w-16 rotate-[15deg]' },

    // 4 more Chilly
    { src: chillyImg, alt: 'Chilly', classes: 'top-[50%] left-[4%] w-16 sm:w-20 md:w-24 rotate-[60deg]' },
    { src: chilly2Img, alt: 'Chilly', classes: 'bottom-[8%] left-[35%] w-14 sm:w-18 md:w-24 rotate-[-15deg]' },
    { src: chillyImg, alt: 'Chilly', classes: 'top-[25%] right-[12%] w-18 sm:w-24 md:w-32 rotate-[120deg]' },
    { src: chilly2Img, alt: 'Chilly', classes: 'bottom-[30%] right-[4%] w-16 sm:w-20 md:w-28 rotate-[-45deg]' },

    // 3 more Lemon
    { src: lemon2Img, alt: 'Lemon', classes: 'top-[5%] right-[40%] w-16 sm:w-20 md:w-24 rotate-[75deg]' },
    { src: lemonImg, alt: 'Lemon', classes: 'bottom-[8%] left-[25%] w-20 sm:w-24 md:w-28 rotate-[-40deg]' },
    { src: lemon2Img, alt: 'Lemon', classes: 'top-[65%] left-[5%] w-14 sm:w-18 md:w-20 rotate-[15deg]' },

    // 4 more Pudina
    { src: pudinaImg, alt: 'Pudina', classes: 'top-[5%] left-[45%] w-10 sm:w-14 md:w-16 rotate-[-30deg]' },
    ,
    { src: pudinaImg, alt: 'Pudina', classes: 'top-[75%] left-[4%] w-8 sm:w-12 md:w-14 rotate-[15deg]' },


    // 3 more Strawberry

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const titleWordVariants = {
    hidden: { y: "110%", rotateX: -20 },
    visible: {
      y: 0,
      rotateX: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="w-full h-screen bg-[#FFFBF2] text-black flex flex-col justify-between overflow-hidden relative">
      {/* Invisible constraint box inset from the edges so bounces don't go off-screen */}
      <div ref={screenRef} className="absolute inset-8 sm:inset-16 pointer-events-none" />
      {/* Floating Decorative Elements */}
      {floatingImages.map((img, idx) => (
        <motion.img
          key={idx}
          src={img.src}
          alt={img.alt}
          className={`absolute ${img.classes} object-contain z-15 pointer-events-auto mix-blend-multiply brightness-110 contrast-125 cursor-grab active:cursor-grabbing`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
          transition={{
            opacity: { duration: 1, delay: 0.8 + idx * 0.2 },
            scale: { duration: 1, delay: 0.8 + idx * 0.2, type: "spring", bounce: 0.4 },
            y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: idx * 0.3 }
          }}
          drag
          dragConstraints={screenRef}
          dragElastic={0.5}
          dragMomentum={true}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
          whileHover={{ scale: 1.25, rotate: 15 }}
          whileTap={{ scale: 0.9, cursor: "grabbing" }}
        />
      ))}

      <header className="w-full flex justify-between items-center p-3 sm:p-4 z-20 text-[10px] sm:text-xs font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex items-center shrink-0"
        >
          <img src={logoImg} alt="Logo" className="h-6 sm:h-8 md:h-12 object-contain invert" />
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-end gap-3 sm:gap-6 md:gap-6 pointer-events-auto mt-2 sm:mt-0"
        >
          {['Home', 'Our Products', 'About', 'Your Order', 'Login', 'Your Profile'].map((item) => (
            <span key={item} className="cursor-pointer relative group pb-1">
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
            </span>
          ))}
        </motion.nav>
      </header>

      <main className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative text-center flex flex-col items-center justify-center w-full px-4 pointer-events-auto"
        >
          {/* Top text positioned absolutely so it doesn't affect main title centering */}
          <div className="absolute bottom-full left-0 w-full flex justify-center">
            <div className="overflow-hidden mb-2 sm:mb-0 mt-12">
              <motion.h2
                variants={itemVariants}
                className="font-cardinal italic text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5rem] text-gray-900"
              >
                HAPPY BITES
              </motion.h2>
            </div>
          </div>

          <div className="font-founders font-bold text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] leading-[0.8] tracking-[-0.04em] uppercase text-black flex flex-col items-center">
            <div className="overflow-hidden py-2">
              <motion.div variants={titleWordVariants} className="origin-bottom">POP A LITTLE</motion.div>
            </div>
            <div className="overflow-hidden py-2 -mt-[0.1em]">
              <motion.div variants={titleWordVariants} className="origin-bottom">HAPPINESS.</motion.div>
            </div>
          </div>

          {/* Bottom text positioned absolutely */}
          <div className="absolute top-full left-0 w-full flex justify-center">
            <div className="overflow-hidden mt-6 sm:mt-10">
              <motion.div
                variants={itemVariants}
                className="text-[0.65rem] sm:text-xs font-bold tracking-[0.2em] uppercase max-w-[200px] sm:max-w-xs mx-auto leading-relaxed"
              >
                Freshly popped. Perfectly crunchy. Made to make every moment delicious.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-48 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none"
      />
    </div>
  );
};

const OurProductsContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };
  const titleWordVariants = {
    hidden: { y: "110%", rotateX: -20 },
    visible: { y: 0, rotateX: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full h-screen bg-[#FFFBF2] text-black flex flex-col justify-between overflow-hidden relative">
      <main className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 pointer-events-none">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center flex flex-col items-center justify-center w-full px-4 pointer-events-auto">
          <div className="overflow-hidden mb-2 sm:mb-0">
            <motion.h2 variants={itemVariants} className="font-cardinal italic text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5rem] text-gray-900">
              Freshly Popped
            </motion.h2>
          </div>
          <div className="font-founders font-bold text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] leading-[0.8] tracking-[-0.04em] uppercase text-black flex flex-col items-center">
            <div className="overflow-hidden py-2">
              <motion.div variants={titleWordVariants} className="origin-bottom">OUR</motion.div>
            </div>
            <div className="overflow-hidden py-2 -mt-[0.1em]">
              <motion.div variants={titleWordVariants} className="origin-bottom">FLAVOURS</motion.div>
            </div>
          </div>
          <div className="overflow-hidden mt-6 sm:mt-10">
            <motion.div variants={itemVariants} className="text-[0.65rem] sm:text-xs font-bold tracking-[0.2em] uppercase max-w-[200px] sm:max-w-xs mx-auto leading-relaxed">
              Sweet, Spicy &<br />Simply Irresistible
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

function App() {
  const { scrollY } = useScroll();
  const topHalfY = useTransform(scrollY, [0, 800], ["0vh", "-50vh"]);
  const bottomHalfY = useTransform(scrollY, [0, 800], ["0vh", "50vh"]);
  const displayFirstPage = useTransform(scrollY, (y) => y > 800 ? "none" : "block");

  // Our Products Split Animation
  const ourProductsRef = React.useRef(null);
  const { scrollYProgress: ourProductsProgress } = useScroll({
    target: ourProductsRef,
    offset: ["start start", "center start"]
  });
  const ourProductsTopHalfY = useTransform(ourProductsProgress, [0, 1], ["0vh", "-50vh"]);
  const ourProductsBottomHalfY = useTransform(ourProductsProgress, [0, 1], ["0vh", "50vh"]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const titleWordVariants = {
    hidden: { y: "110%", rotateX: -20 },
    visible: {
      y: 0,
      rotateX: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="w-full bg-[#FFFBF2] text-black selection:bg-black selection:text-white">
      {/* Split First Page Overlay */}
      <motion.div style={{ y: topHalfY, display: displayFirstPage, clipPath: 'inset(0 0 50% 0)' }} className="fixed inset-0 z-50 pointer-events-auto">
        <FirstPageContent />
      </motion.div>
      <motion.div style={{ y: bottomHalfY, display: displayFirstPage, clipPath: 'inset(50% 0 0 0)' }} className="fixed inset-0 z-50 pointer-events-auto">
        <FirstPageContent />
      </motion.div>

      {/* Spacer for First Page scroll */}
      <div className="w-full h-screen" />

      {/* Second Page */}
      <section className="relative w-full min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center py-20 px-6 sm:px-12 selection:bg-[#FFFBF2] selection:text-black">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col items-center"
        >
          {/* Subtitle */}
          <motion.div variants={itemVariants} className="overflow-hidden mb-4 sm:mb-8">
            <h3 className="font-cardinal italic text-2xl sm:text-3xl text-gray-400">
              Why Mucha?
            </h3>
          </motion.div>

          {/* Large Heading */}
          <div className="font-founders font-bold text-[15vw] sm:text-[12vw] md:text-[10vw] leading-[0.85] tracking-[-0.04em] uppercase text-center mb-16 sm:mb-24 flex flex-col items-center">
            <div className="overflow-hidden py-2">
              <motion.div variants={titleWordVariants} className="origin-bottom">WE BELIEVE</motion.div>
            </div>
            <div className="overflow-hidden py-2 -mt-[0.1em]">
              <motion.div variants={titleWordVariants} className="origin-bottom">IN HAPPINESS</motion.div>
            </div>
          </div>

          {/* Paragraph */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center mb-24 px-4 sm:px-8">
            <p className="font-cardinal text-xl sm:text-2xl md:text-3xl leading-relaxed text-gray-300">
              At Happy Bites, we believe happiness comes in the smallest, crunchiest bites. From the sweetness of golden <span className="italic">caramel</span> to the bold kick of <span className="italic">peri peri</span>, every flavour is crafted to make ordinary moments extraordinary. We bring together irresistible taste, delightful crunch, and a little bit of <span className="italic">magic</span> to turn every snack break into a happy memory.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-sm sm:max-w-md aspect-[3/4] relative overflow-hidden bg-gray-800"
          >
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              src={caramelImg}
              alt="Portrait of Alphonse Mucha"
              className="w-full h-full object-cover filter grayscale"
            />
          </motion.div>
        </motion.div>
      </section>
      {/* Third Page */}
      <section className="w-full h-auto bg-[#FFFBF2] text-black py-12 px-4 sm:px-12 md:px-24 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-24 items-center md:items-end justify-between relative overflow-hidden">

        {/* Left Column (Small Image) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/3 flex flex-col justify-end md:pb-24 z-10"
        >
          <div className="bg-[#e4e9e7] p-2 sm:p-4 shadow-sm relative">
            <img
              src={periperiImg}
              alt="Untitled from Document décoratifs"
              className="w-full h-auto object-cover border border-gray-300/30"
            />
          </div>
          <p className="mt-2 sm:mt-4 text-[0.45rem] sm:text-[0.6rem] md:text-xs font-bold tracking-widest text-gray-800">
            Untitled from Document décoratifs (1902)
          </p>
        </motion.div>

        {/* Right Column (Large Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-[60vh] md:h-[100vh] flex items-end justify-end mt-8 md:mt-20 border border-black overflow-hidden"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={chocolateImg}
            alt="Mucha Art"
            className="w-full h-full object-cover object-center cursor-pointer"
          />
        </motion.div>
      </section>

      {/* New Our Products Page (Splitting on Scroll) */}
      <section ref={ourProductsRef} className="relative w-full h-[200vh] -mb-[100vh]">
        <div className="sticky top-0 w-full h-screen overflow-hidden z-20 pointer-events-none">
          {/* Top Half */}
          <motion.div style={{ y: ourProductsTopHalfY, clipPath: 'inset(0 0 50% 0)' }} className="absolute inset-0 z-50 pointer-events-auto">
            <OurProductsContent />
          </motion.div>
          {/* Bottom Half */}
          <motion.div style={{ y: ourProductsBottomHalfY, clipPath: 'inset(50% 0 0 0)' }} className="absolute inset-0 z-50 pointer-events-auto">
            <OurProductsContent />
          </motion.div>
        </div>
      </section>

      {/* Fourth Page */}
      <section className="w-full h-auto bg-[#FFFBF2] text-black py-12 px-6 sm:px-12 md:px-24 flex flex-col justify-center gap-16 sm:gap-24 relative overflow-hidden">

        {/* Large Centered Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-cardinal text-3xl sm:text-4xl md:text-[3rem] leading-[1.15] text-gray-900 tracking-[-0.02em]">
            Bringing joy to snack lovers with irresistibly crunchy popcorn, bold flavours, and a little sweetness in every bite. At Happy Bites, we turn everyday snacking into a celebration of taste, happiness, and togetherness.
          </h2>
        </motion.div>

        {/* Bottom Right Text Block */}
        <div className="w-full md:w-[65%] ml-auto mt-8 sm:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-12"
          >
            <div className="sm:w-1/4 shrink-0">
              <span className="font-cardinal italic text-gray-500 text-lg sm:text-xl md:text-2xl whitespace-nowrap">
                (The Happy Bites Experience)
              </span>
            </div>
            <div className="sm:w-3/4">
              <p className="font-cardinal text-md md:text-lg leading-relaxed text-gray-950 font-medium tracking-wide">
                Happy Bites is all about making ordinary moments deliciously memorable. From our golden, buttery-sweet Caramel Popcorn to the fiery kick of Peri Peri, the tangy twist of Lemon Spicy, and the indulgence of Chocolate Popcorn, every flavour brings its own personality to the table. We believe great snacks are more than just food — they're part of movie nights, laughter with friends, family moments, and little everyday celebrations. With Happy Bites, every handful is an invitation to savour the flavour, share a smile, and make happiness pop.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fifth Page */}
      <section className="w-full h-auto bg-[#FFFBF2] text-black py-12 px-6 sm:px-12 md:px-24 flex flex-col md:flex-row gap-12 md:gap-24 items-start justify-between relative overflow-hidden">
        {/* Left Column (Image) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 lg:w-5/12 flex flex-col"
        >
          <div className="relative shadow-xl">
            <img
              src={caramelImg}
              alt="Caramel Crunch — Sweet"
              className="w-full h-auto object-cover border border-gray-300/30 shadow-md"
            />
          </div>
        </motion.div>

        {/* Right Column (Text) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 flex pt-4 md:pt-24"
        >
          <div className="flex gap-4 sm:gap-6 max-w-xl">
            <div className="flex flex-col gap-4">
              <h3 className="font-cardinal font-bold text-3xl sm:text-4xl text-gray-900 tracking-[-0.01em]">Caramel Crunch — Sweet</h3>
              <p className="font-cardinal text-base sm:text-lg md:text-[1.35rem] leading-[1.4] text-gray-700 tracking-wide">
                Creating a rich visual identity inspired by golden caramel, buttery sweetness, and warm amber tones. Glossy caramel textures and flowing graphic elements create a premium, indulgent, and irresistible look.
              </p>
              <button className="mt-4 sm:mt-6 w-fit bg-[#111] hover:bg-gray-800 text-[#FFFBF2] px-8 py-3 rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sixth Page (Mirrored) */}
      <section className="w-full h-auto bg-[#FFFBF2] text-black py-12 px-6 sm:px-12 md:px-24 flex flex-col-reverse md:flex-row gap-12 md:gap-24 items-start justify-between relative overflow-hidden">
        {/* Left Column (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 flex pt-4 md:pt-24 justify-start md:justify-end"
        >
          <div className="flex gap-4 sm:gap-6 max-w-xl">
            <div className="flex flex-col gap-4">
              <h3 className="font-cardinal font-bold text-3xl sm:text-4xl text-gray-900 tracking-[-0.01em]">Peri Peri Blast — Spicy</h3>
              <p className="font-cardinal text-base sm:text-lg md:text-[1.35rem] leading-[1.4] text-gray-700 tracking-wide">
                Creating a bold visual identity inspired by fiery peri peri spices and intense heat. Vibrant red and orange tones with dynamic graphic elements communicate an energetic, adventurous, and spicy flavour experience.
              </p>
              <button className="mt-4 sm:mt-6 w-fit bg-[#111] hover:bg-gray-800 text-[#FFFBF2] px-8 py-3 rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-[45%] flex flex-col"
        >
          <div className="relative shadow-xl">
            <img
              src={periperiImg}
              alt="Peri Peri Blast — Spicy"
              className="w-full h-auto object-cover border border-gray-300/30 shadow-md"
            />
          </div>
        </motion.div>
      </section>

      {/* Seventh Page */}
      <section className="w-full h-auto bg-[#FFFBF2] text-black py-12 px-6 sm:px-12 md:px-24 flex flex-col md:flex-row gap-12 md:gap-24 items-start justify-between relative overflow-hidden">
        {/* Left Column (Image) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 lg:w-5/12 flex flex-col"
        >
          <div className="relative shadow-xl">
            <img
              src={chocolateImg}
              alt="Chocolate Blast — Sweet"
              className="w-full h-auto object-cover border border-gray-300/30 shadow-md"
            />
          </div>
        </motion.div>

        {/* Right Column (Text) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 flex pt-4 md:pt-24"
        >
          <div className="flex gap-4 sm:gap-6 max-w-xl">
            <div className="flex flex-col gap-4">
              <h3 className="font-cardinal font-bold text-3xl sm:text-4xl text-gray-900 tracking-[-0.01em]">Chocolate Blast — Sweet</h3>
              <p className="font-cardinal text-base sm:text-lg md:text-[1.35rem] leading-[1.4] text-gray-700 tracking-wide">
                Creating a luxurious visual identity inspired by rich chocolate, smooth cocoa textures, and deep brown tones. Chocolate-inspired patterns and glossy elements create a decadent, indulgent dessert aesthetic.
              </p>
              <button className="mt-4 sm:mt-6 w-fit bg-[#111] hover:bg-gray-800 text-[#FFFBF2] px-8 py-3 rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Eighth Page (Mirrored) */}
      <section className="w-full h-auto bg-[#FFFBF2] text-black py-12 px-6 sm:px-12 md:px-24 flex flex-col-reverse md:flex-row gap-12 md:gap-24 items-start justify-between relative overflow-hidden">
        {/* Left Column (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 flex pt-4 md:pt-24 justify-start md:justify-end"
        >
          <div className="flex gap-4 sm:gap-6 max-w-xl">
            <div className="flex flex-col gap-4">
              <h3 className="font-cardinal font-bold text-3xl sm:text-4xl text-gray-900 tracking-[-0.01em]">Salted Popcorn — Classic</h3>
              <p className="font-cardinal text-base sm:text-lg md:text-[1.35rem] leading-[1.4] text-gray-700 tracking-wide">
                Creating a clean, inviting visual identity inspired by the simple goodness of classic salted popcorn. Warm buttery yellow, creamy white, and subtle golden tones create a timeless, minimal look. Soft textures and elegant graphic elements communicate a light, crispy, and satisfying snacking experience.
              </p>
              <button className="mt-4 sm:mt-6 w-fit bg-[#111] hover:bg-gray-800 text-[#FFFBF2] px-8 py-3 rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-[45%] flex flex-col"
        >
          <div className="relative shadow-xl">
            <img
              src={saltedImg}
              alt="Salted Popcorn — Classic"
              className="w-full h-auto object-cover border border-gray-300/30 shadow-md"
            />
          </div>
        </motion.div>
      </section>

      {/* Ninth Page */}
      <section className="w-full h-auto bg-[#FFFBF2] text-black py-12 px-6 sm:px-12 md:px-24 flex flex-col md:flex-row gap-12 md:gap-24 items-start justify-between relative overflow-hidden">
        {/* Left Column (Image) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 lg:w-5/12 flex flex-col"
        >
          <div className="relative shadow-xl">
            <img
              src={magicmasalaImg}
              alt="Magic Masala — Spicy"
              className="w-full h-auto object-cover border border-gray-300/30 shadow-md"
            />
          </div>
        </motion.div>

        {/* Right Column (Text) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 flex pt-4 md:pt-24"
        >
          <div className="flex gap-4 sm:gap-6 max-w-xl">
            <div className="flex flex-col gap-4">
              <h3 className="font-cardinal font-bold text-3xl sm:text-4xl text-gray-900 tracking-[-0.01em]">Magic Masala — Spicy</h3>
              <p className="font-cardinal text-base sm:text-lg md:text-[1.35rem] leading-[1.4] text-gray-700 tracking-wide">
                Creating a colourful visual identity inspired by traditional Indian spices and bold masala flavours. Rich reds, warm yellows, and earthy tones combine with aromatic spice-inspired patterns to create an exciting and flavourful design.
              </p>
              <button className="mt-4 sm:mt-6 w-fit bg-[#111] hover:bg-gray-800 text-[#FFFBF2] px-8 py-3 rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tenth Page (Mirrored) */}
      <section className="w-full h-auto bg-[#FFFBF2] text-black py-12 px-6 sm:px-12 md:px-24 flex flex-col-reverse md:flex-row gap-12 md:gap-24 items-start justify-between relative overflow-hidden">
        {/* Left Column (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 flex pt-4 md:pt-24 justify-start md:justify-end"
        >
          <div className="flex gap-4 sm:gap-6 max-w-xl">
            <div className="flex flex-col gap-4">
              <h3 className="font-cardinal font-bold text-3xl sm:text-4xl text-gray-900 tracking-[-0.01em]">Strawberry Cream — Sweet</h3>
              <p className="font-cardinal text-base sm:text-lg md:text-[1.35rem] leading-[1.4] text-gray-700 tracking-wide">
                Creating a delightful visual identity inspired by ripe strawberries and smooth cream. Strawberry pink, creamy white, and vibrant red accents with fresh fruit-inspired graphics create a sweet, refreshing, and playful look.
              </p>
              <button className="mt-4 sm:mt-6 w-fit bg-[#111] hover:bg-gray-800 text-[#FFFBF2] px-8 py-3 rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-[45%] flex flex-col"
        >
          <div className="relative shadow-xl">
            <img
              src={strawberryImg}
              alt="Strawberry Cream — Sweet"
              className="w-full h-auto object-cover border border-gray-300/30 shadow-md"
            />
          </div>
        </motion.div>
      </section>

      {/* Eleventh Page */}
      <section className="w-full h-auto bg-[#FFFBF2] text-black py-12 px-6 sm:px-12 md:px-24 flex flex-col md:flex-row gap-12 md:gap-24 items-start justify-between relative overflow-hidden">
        {/* Left Column (Image) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 lg:w-5/12 flex flex-col"
        >
          <div className="relative shadow-xl">
            <img
              src={creamonionImg}
              alt="Cream & Onion — Savoury"
              className="w-full h-auto object-cover border border-gray-300/30 shadow-md"
            />
          </div>
        </motion.div>

        {/* Right Column (Text) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 flex pt-4 md:pt-24"
        >
          <div className="flex gap-4 sm:gap-6 max-w-xl">
            <div className="flex flex-col gap-4">
              <h3 className="font-cardinal font-bold text-3xl sm:text-4xl text-gray-900 tracking-[-0.01em]">Cream & Onion — Savoury</h3>
              <p className="font-cardinal text-base sm:text-lg md:text-[1.35rem] leading-[1.4] text-gray-700 tracking-wide">
                Creating a fresh, appetising visual identity inspired by smooth cream and aromatic onion seasoning. Soft green, creamy white, and subtle earthy tones create a balanced, modern look. Delicate onion-inspired patterns and smooth graphic elements communicate a savoury flavour experience that feels fresh, creamy, and satisfying.
              </p>
              <button className="mt-4 sm:mt-6 w-fit bg-[#111] hover:bg-gray-800 text-[#FFFBF2] px-8 py-3 rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Twelfth Page (Mirrored) */}
      <section className="w-full h-auto bg-[#FFFBF2] text-black py-12 px-6 sm:px-12 md:px-24 flex flex-col-reverse md:flex-row gap-12 md:gap-24 items-start justify-between relative overflow-hidden">
        {/* Left Column (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 flex pt-4 md:pt-24 justify-start md:justify-end"
        >
          <div className="flex gap-4 sm:gap-6 max-w-xl">
            <div className="flex flex-col gap-4">
              <h3 className="font-cardinal font-bold text-3xl sm:text-4xl text-gray-900 tracking-[-0.01em]">Pudina Punch — Minty & Spicy</h3>
              <p className="font-cardinal text-base sm:text-lg md:text-[1.35rem] leading-[1.4] text-gray-700 tracking-wide">
                Creating a refreshing visual identity inspired by cool mint leaves, tangy spices, and zesty green tones. Fresh botanical patterns and dynamic graphic elements create a vibrant, modern look. The design communicates a cool, tangy, and spicy flavour experience that feels refreshing, bold, and satisfying.
              </p>
              <button className="mt-4 sm:mt-6 w-fit bg-[#111] hover:bg-gray-800 text-[#FFFBF2] px-8 py-3 rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-[45%] flex flex-col"
        >
          <div className="relative shadow-xl">
            <img
              src={pudinapunchImg}
              alt="Pudina Punch — Minty & Spicy"
              className="w-full h-auto object-cover border border-gray-300/30 shadow-md"
            />
          </div>
        </motion.div>
      </section>

      {/* Sixth Page (Flavors showcase) */}
      <section className="w-full min-h-screen bg-[#111111] text-[#FFFBF2] py-20 px-6 sm:px-12 md:px-24 flex flex-col items-center">
        {/* Header Text */}
        <div className="mb-16">
          <span className="font-cardinal text-sm sm:text-base tracking-widest uppercase font-bold text-gray-300">
            SINCE 1996
          </span>
        </div>

        {/* Side by side images */}
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center max-w-7xl">
          {/* Left Item */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-6 group"
          >
            <div className="w-full aspect-square overflow-hidden bg-black flex items-center justify-center">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, ease: "easeOut" }} src={cheeseBowlImg} alt="Cheese Popcorn" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-cardinal text-3xl sm:text-4xl italic tracking-wide group-hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                Cheese Popcorn
              </h3>
            </div>
          </motion.div>

          {/* Right Item */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-6 group"
          >
            <div className="w-full aspect-square overflow-hidden bg-black flex items-center justify-center">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, ease: "easeOut" }} src={chocolateBowlImg} alt="Chocolate Popcorn" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-cardinal text-3xl sm:text-4xl italic tracking-wide group-hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
                Chocolate Popcorn
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#050505] text-gray-300 py-16 px-6 sm:px-12 md:px-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-6 w-full md:w-1/3">
            <img src={logoImg} alt="Happy Bites Logo" className="h-10 sm:h-12 object-contain self-start opacity-90 invert" />
            <p className="text-sm font-sans text-gray-400 leading-relaxed">
              Pop a little happiness. Join our newsletter to get updates on new flavours, exclusive drops, and more.
            </p>
            <div className="flex border-b border-gray-600 focus-within:border-white transition-colors pb-2 mt-4">
              <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none text-white w-full text-sm font-sans" />
              <button className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-white transition-colors">Subscribe</button>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16 md:gap-24">
            <div className="flex flex-col gap-6">
              <h4 className="font-cardinal italic text-2xl text-white">Shop</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400 font-sans">
                <li className="hover:text-white transition-colors cursor-pointer">All Flavours</li>
                <li className="hover:text-white transition-colors cursor-pointer">Best Sellers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Gift Boxes</li>
                <li className="hover:text-white transition-colors cursor-pointer">Merch</li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="font-cardinal italic text-2xl text-white">About</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400 font-sans">
                <li className="hover:text-white transition-colors cursor-pointer">Our Story</li>
                <li className="hover:text-white transition-colors cursor-pointer">Ingredients</li>
                <li className="hover:text-white transition-colors cursor-pointer">FAQ</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans">
          <p>&copy; {new Date().getFullYear()} Happy Bites. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-widest font-bold">
            <span className="hover:text-white transition-colors cursor-pointer">Instagram</span>
            <span className="hover:text-white transition-colors cursor-pointer">Facebook</span>
            <span className="hover:text-white transition-colors cursor-pointer">Twitter</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
