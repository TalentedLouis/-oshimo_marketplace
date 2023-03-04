import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { HeadLine } from '../component';
import 'tippy.js/dist/tippy.css';
import BidsCarousel from '../carousel/bidsCarousel';

const Bids = ({ classes = 'pt-10 pb-24', bgWhite }) => {
	return (
		<section className={classes}>
			{/* <!-- Hot Bids --> */}
			{bgWhite && (
				<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
					<img src="/images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
				</picture>
			)}
			<div className="container">
				<HeadLine
					text="Hot Bids"
					image="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f525.png"
					classes="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
				/>

				<div className="relative">
					{/* <!-- Slider --> */}
					<BidsCarousel />
				</div>
			</div>
			{/* <!-- end hot bids --> */}
		</section>
	);
};

export default Bids;
