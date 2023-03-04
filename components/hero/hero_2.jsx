import React from "react";
import ArtsCarousel from "../carousel/artCarousel";
import Link from "next/link";
import Image from "next/image";

const Hero_2 = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="hero relative py-20 md:pt-32">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <figure className="h-[630px] w-full">
            <Image src="/images/gradient.jpg" alt="gradient" layout="fill" />
          </figure>
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <figure className="h-[630px] w-full">
            <Image
              src="/images/gradient_dark.jpg"
              alt="gradient dark"
              layout="fill"
            />
          </figure>
        </picture>

        <div className="container">
          <div className="py-24 text-center">
            <h1 className="text-jacarta-700 font-display mb-6 text-5xl dark:text-white lg:text-6xl xl:text-7xl">
              Collect Digital Art.
            </h1>
            <p className="dark:text-jacarta-200 mb-8 text-lg">
              Buy and sell NFTs from the worlds top artists
            </p>
            <div className="inline-flex space-x-4">
              <Link href="/create">
                <a className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                  Create
                </a>
              </Link>
              <Link href="/collection/explore_collection">
                <a className="text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white">
                  Explore
                </a>
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* <!-- Slider --> */}
            <ArtsCarousel />
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_2;
