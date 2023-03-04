import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { collectionCategoryData } from '../../data/collection_data';

const Collection_category = ({ bgWhite = false }) => {
	return (
		<div>
			{/* <!-- Today's Drops / Sellers / Buyers --> */}
			<section className="py-24 relative">
				{bgWhite && (
					<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
						<Image
							src="/images/gradient_light.jpg"
							alt="gradient"
							className="h-full"
							layout="fill"
						/>
					</picture>
				)}
				<div className="container">
					<div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-7">
						{collectionCategoryData.map(({ parentId, name, collections }) => {
							return (
								<div
									className="dark:bg-jacarta-800 bg-light-base rounded-2.5xl p-12 lg:w-1/3"
									key={parentId}
								>
									<h2 className="text-jacarta-700 font-display mb-8 text-center text-3xl font-semibold dark:text-white">
										{name}
									</h2>

									<div className="flex flex-col space-y-5">
										{collections.map((item) => {
											const { id, image, title, icon, amount, postTime } = item;
											const itemLink = image
												.split('/')
												.slice(-1)
												.toString()
												.replace('.jpg', '')
												.replace('.gif', '');

											return (
												<div
													key={id}
													className="border-jacarta-100 dark:bg-jacarta-700 rounded-2xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent"
												>
													<figure className="mr-4 shrink-0">
														<Link href={'/collection/' + itemLink}>
															<a className="relative block">
																<img src={image} alt={title} className="rounded-2lg h-12 w-12" />
																<div className="dark:border-jacarta-600 bg-jacarta-700 absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white text-xs text-white">
																	{id}
																</div>
																{icon && (
																	<div
																		className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
																		data-tippy-content="Verified Collection"
																	>
																		<svg
																			xmlns="http://www.w3.org/2000/svg"
																			viewBox="0 0 24 24"
																			width="24"
																			height="24"
																			className="h-[.875rem] w-[.875rem] fill-white"
																		>
																			<path fill="none" d="M0 0h24v24H0z"></path>
																			<path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
																		</svg>
																	</div>
																)}
															</a>
														</Link>
													</figure>
													<div>
														<Link href={'/collection/' + itemLink}>
															<a className="block">
																<span className="font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white">
																	{title}
																</span>
															</a>
														</Link>
														<span className="dark:text-jacarta-300 text-sm">{amount} ETH</span>
													</div>
												</div>
											);
										})}
									</div>
									<Link href="/collection/avatar_1">
										<a className="text-accent mt-8 block text-center text-sm font-bold tracking-tight">
											View All Drops
										</a>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			{/* <!-- end today's drops / sellers / buyers --> */}
		</div>
	);
};

export default Collection_category;
