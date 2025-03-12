"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Book1 from "../../public/images/book1.png"
import Book2 from "../../public/images/book2.webp"
// import Book3 from "../../public/images/book3.webp"
import Book4 from "../../public/images/book4.jpg"
// import Book5 from "../../public/images/book5.webp"
import Book6 from "../../public/images/book6.webp"
import Book7 from "../../public/images/book7.png"
import Book8 from "../../public/images/book8.jpg"
import Book9 from "../../public/images/book9.jpg"
import Book10 from "../../public/images/book10.jpg"
import Book11 from "../../public/images/book11.jpg"
import Book12 from "../../public/images/book12.jpg"
import Book13 from "../../public/images/book13.jpg"
import Book14 from "../../public/images/book14.jpg"
import Book15 from "../../public/images/book15.jpg"
import Book16 from "../../public/images/book16.jpg"

const books1Arr = [Book1, Book2, Book4, Book6, Book7, Book8, Book9]
const books2Arr = [ Book10, Book11, Book12, Book13, Book14, Book15, Book16]


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
      <div className="h-[20vh]"></div>

      <div ref={container} className="flex flex-col gap-8">
        <BookSlide
          direction={"left"}
          left={"0%"}
          progress={scrollYProgress}
        />
        <div className="h-[10vh] container">
        </div>

        <Slide
          images={books1Arr}
          direction={"right"}
          left={"-20%"}
          progress={scrollYProgress}
        />
        <Slide
          images={books2Arr}
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
        Books I love. books i love. books i love. Books I love. books. books.Books.
        books.{" "}
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
