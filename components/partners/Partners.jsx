import React from 'react';
import Link from 'next/link';

const Partners = () => {
	return (
		<div>
			<div className="dark:bg-jacarta-800 bg-light-base">
				<div className="container">
					<div className="grid grid-cols-2 py-8 sm:grid-cols-5">
						<Link href="#">
							<a>
								<img src="/images/partners/partner_logo_1.png" alt="partner 1" />{' '}
							</a>
						</Link>
						<Link href="#">
							<a>
								<img src="/images/partners/partner_logo_2.png" alt="partner 1" />{' '}
							</a>
						</Link>
						<Link href="#">
							<a>
								<img src="/images/partners/partner_logo_3.png" alt="partner 1" />{' '}
							</a>
						</Link>
						<Link href="#">
							<a>
								<img src="/images/partners/partner_logo_4.png" alt="partner 1" />{' '}
							</a>
						</Link>
						<Link href="#">
							<a>
								<img src="/images/partners/partner_logo_5.png" alt="partner 1" />{' '}
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
