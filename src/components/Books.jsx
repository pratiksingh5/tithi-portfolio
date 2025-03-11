"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../../public/images/book1.jpg";
import Lenis from "lenis";

import Image from "next/image";
import { useEffect, useRef } from "react";

const Books = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="h-[15vh]"></div>

      <div ref={container} className="flex flex-col gap-8">
        <BookSlide
          src={Picture1}
          direction={"left"}
          left={"0%"}
          progress={scrollYProgress}
        />
        <div className="h-[20vh] container">
          <p
            className="container__title"
            style={{ fontWeight: 700, fontSize: "28px" }}
          >
            &mdash; books I love (੭˃ᴗ˂)੭⋆˚⟡˖ ࣪
          </p>
        </div>

        <Slide
          //   src={Picture1}
          images={[Picture1, Picture1, , Picture1, Picture1, Picture1, Picture1, Picture1, Picture1, Picture1, Picture1]}
          direction={"right"}
          left={"-20%"}
          progress={scrollYProgress}
        />
        <Slide
          //   src={Picture1}
          images={[Picture1, Picture1, , Picture1, Picture1, Picture1, Picture1, Picture1, Picture1, Picture1, Picture1]}
          direction={"left"}
          left={"-20%"}
          progress={scrollYProgress}
        />
      </div>
      <div className="h-[30vh]" />
    </div>
  );
};

export default Books;

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex  gap-8 w-[160%]"
    >
      {props.images.map((image, i) => (
        <Phrase src={image.src} key={i} />
      ))}
    </motion.div>
  );
};

const BookSlide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [400 * direction, -400 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relativ flex  gap-8 w-full whitespace-nowrap"
    >
      <div className="homemade-apple-regular">
        Books. books. books.Books. books. books. Books. books. books.Books.
        books. books.Books. books. books.Books. books. books. Books. books.
        books. Books. books. books. Books. books. books.{" "}
      </div>
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div
      className="relative h-[320px] w-[240px]  rounded-2xl overflow-hidden"
    >
      <Image style={{ objectFit: "cover" }} src={src} alt="image"  layout="responsive" width={240} height={320}/>
    </div>
  );
};
