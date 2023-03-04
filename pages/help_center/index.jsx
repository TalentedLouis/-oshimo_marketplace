import Link from "next/link";
import React from "react";
import ImageTitle from "../../components/imageTitle";
import { help_center_data } from "../../data/help_center_data";
import { accordion_data } from "../../data/help_center_data";
import Accordion from "../../components/accordion";
import Head from "next/head";
import Meta from "../../components/Meta";

const Help_center = () => {
  const bgImage = "/images/page-title/knowledge_base_banner.jpg";
  return (
    <div>
      <Meta title="Help Center || Xhibiter | NFT Marketplace Next.js Template" />
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- Page Title --> */}

        <ImageTitle text="How can I help you?" image={bgImage} input={true} />

        {/* <!-- Help Center --> */}
        <section className="relative py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <div className="container">
            <h2 className="font-display text-jacarta-700 mb-10 text-center text-xl font-medium dark:text-white">
              Or browse categories
            </h2>

            {/* <!-- Categories --> */}
            <div className="mb-16 grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
              {help_center_data.map((item) => {
                const { id, title, text } = item;
                return (
                  <Link href="#" key={id}>
                    <a className="dark:border-jacarta-600 dark:bg-jacarta-700 rounded-2lg border-jacarta-100 border bg-white p-6 text-center transition-shadow hover:shadow-lg">
                      <h3 className="font-display text-jacarta-700 mb-2 text-base font-semibold dark:text-white">
                        {title}
                      </h3>
                      <p className="dark:text-jacarta-300">{text}</p>
                    </a>
                  </Link>
                );
              })}
            </div>
            {/* <!-- end categories --> */}

            <Accordion data={accordion_data} />
          </div>
        </section>
        {/* <!-- end help center --> */}
      </div>
    </div>
  );
};

export default Help_center;
