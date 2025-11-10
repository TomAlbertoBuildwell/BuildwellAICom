"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.4, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[250vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-background dark:bg-background"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-32 md:py-40 px-4 w-full left-0 top-0 z-20">
      <div className="relative z-30 max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground dark:text-white mb-6">
          Building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FBB429] to-[#F87866]">Future</span> of UK Construction
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mt-8 text-foreground dark:text-white mb-8">
          Transform your construction projects with cutting-edge AI technology. 
          From compliance and safety to project management and digital transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#solutions">
            <button className="bg-gradient-to-r from-[#FBB429] to-[#F87866] text-white px-6 py-3 rounded-[5px] font-medium hover:opacity-90 transition-all shadow-lg">
              Explore Our Solutions
            </button>
          </a>
          <a href="/contact">
            <button className="bg-transparent text-foreground dark:text-white px-6 py-3 rounded-[5px] font-medium hover:bg-muted transition-all shadow-[inset_0_0_0_2px] shadow-foreground/20 dark:shadow-white/20">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 rounded-[5px]"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none rounded-[5px]"></div>
      <h2 className="absolute bottom-4 left-4 text-white font-display font-bold text-xl">
        {product.title}
      </h2>
    </motion.div>
  );
};
