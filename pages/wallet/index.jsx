import React from 'react';
import ImageTitle from '../../components/imageTitle';
import { wallet_data } from '../../data/wallet_data';
import Link from 'next/link';
import Head from 'next/head';
import Meta from '../../components/Meta';

const Wallet = () => {
	const bgImage = '/images/page-title/wallet_banner.jpg';
	return (
		<div>
			<Meta title="Wallet || Xhibiter | NFT Marketplace Next.js Template" />
			<div className="pt-[5.5rem] lg:pt-24">
				{/* <!-- Wallet --> */}

				<ImageTitle text="Connect your wallet" image={bgImage} />

				<section className="dark:bg-jacarta-800 relative pb-20 pt-28">
					<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
						<img src="images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
					</picture>
					<div className="container">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem]">
							{wallet_data.map((item) => {
								const { id, image, title, text } = item;
								return (
									<Link href="#" key={id}>
										<a className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2.5xl mb-8 border bg-white p-8 text-center transition-shadow hover:shadow-lg">
											<img
												src={image}
												className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 mx-auto mb-7 -mt-[3.5rem] h-[5.5rem] w-[5.5rem] rounded-full border bg-white"
												alt="wallet"
											/>
											<h3 className="font-display text-jacarta-700 text-md mb-3 dark:text-white">
												{title}
											</h3>
											<p className="dark:text-jacarta-300">{text}</p>
										</a>
									</Link>
								);
							})}
						</div>
					</div>
				</section>
				{/* <!-- end wallet --> */}
			</div>
		</div>
	);
};

export default Wallet;
