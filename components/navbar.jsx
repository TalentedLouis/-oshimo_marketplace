/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import MblNavbar from './mblNavbar';
import { useSelector, useDispatch } from 'react-redux';
import { openMblMenu } from '../redux/counterSlice';
import { useRouter } from 'next/router';

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	const [scroll, setScroll] = useState(false);
	const [home3, setHome3] = useState(false);

	const { mblMenu } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const router = useRouter();
	const pid = router.asPath;

	const handleSticky = function () {
		if (window.scrollY >= 100) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	const handleTheme = () => {
		if (theme == 'dark' && pid === '/home/home_8') {
			setTheme('dark');
		} else if (theme == 'dark' && pid !== '/home/home_8') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	// const router = useRouter();

	useEffect(() => {
		if (pid === '/home/home_3') {
			setHome3(true);
		} else {
			setHome3(false);
		}

		if (theme === 'light' && pid === '/home/home_8') {
			setTheme('dark');
		}
	}, [pid, setTheme, theme]);

	useEffect(() => {
		window.addEventListener('scroll', handleSticky);
	}, []);

	if (mblMenu) {
		return (
			<div>
				<header
					className={
						scroll
							? 'js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors js-page-header--is-sticky h-full'
							: 'js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors h-full'
					}
				>
					{pid === '/platform_status' ? (
						<div className="container">
							<div className="flex items-center py-[1.5625rem] lg:py-[1.8125rem]">
								{/* <!-- Logo --> */}
								<Link href="/">
									<a className="shrink-0 lg:mr-14">
										<img
											src="/images/oshimo.png"
											className="max-h-7 dark:hidden"
											alt="oshimake | NFT Marketplace"
										/>
										<img
											src="/images/oshimo.png"
											className="hidden max-h-7 dark:block"
											alt="oshimake | NFT Marketplace"
										/>
									</a>
								</Link>

								<span className="font-display mt-1 hidden text-lg font-semibold lg:inline-block">
									Status
								</span>

								<Link href="#">
									<a className="bg-accent shadow-accent-volume hover:bg-accent-dark ml-auto inline-block rounded-full py-2.5 px-8 text-center text-sm font-semibold text-white transition-all">
										<span className="hidden lg:block">Subscribe to Updates</span>
										<span className="lg:hidden">Subscribe</span>
									</a>
								</Link>
							</div>
						</div>
					) : (
						<div className="flex items-center px-6 py-6 xl:px-24 ">
							{/* <!-- Logo --> */}

							<Link href="/">
								<a className="shrink-0 block dark:hidden">
									<img src="/images/oshimo.png" alt="" className="max-h-7 h-auto" />
								</a>
							</Link>
							<Link href="/">
								<a className="shrink-0 hidden dark:block">
									<img
										src="/images/oshimo.png"
										className="max-h-7 h-auto"
										alt="oshimake | NFT Marketplace"
									/>
								</a>
							</Link>

							{/* <!-- Search --> */}
							<form
								action="search"
								className="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]"
							>
								<input
									type="search"
									className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
									placeholder="Search"
								/>
								<span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										className="fill-jacarta-500 h-4 w-4 dark:fill-white"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
									</svg>
								</span>
							</form>

							{/* <!-- Menu / Actions --> */}
							<MblNavbar theme={handleTheme} />

							{/* <!-- Mobile Menu Actions --> */}
							<div className="ml-auto flex lg:hidden">
								{/* <!-- Profile --> */}
								<Link href="/">
									<a
										className="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
										aria-label="profile"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
										>
											<path fill="none" d="M0 0h24v24H0z" />
											<path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
										</svg>
									</a>
								</Link>

								{/* <!-- Dark Mode --> */}
								<button
									className="js-dark-mode-trigger border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
									onClick={() => {
										handleTheme();
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										className="fill-jacarta-700 dark-mode-light h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										className="fill-jacarta-700 dark-mode-dark hidden h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
									</svg>
								</button>

								{/* <!-- Mobile Menu Toggle --> */}
								<button
									className="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
									aria-label="open mobile menu"
									onClick={() => dispatch(openMblMenu())}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
									</svg>
								</button>
							</div>
						</div>
					)}
				</header>
			</div>
		);
	} else {
		return (
			<div>
				<header
					className={
						scroll && home3
							? 'js-page-header page-header--transparent fixed top-0 z-20 w-full bg-white/[.15] backdrop-blur transition-colors js-page-header--is-sticky'
							: home3
							? 'js-page-header page-header--transparent fixed top-0 z-20 w-full bg-white/[.15] backdrop-blur transition-colors'
							: scroll
							? 'js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors js-page-header--is-sticky'
							: 'js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors'
					}
				>
					{pid === '/platform_status' ? (
						<div className="container">
							<div className="flex items-center py-[1.5625rem] lg:py-[1.8125rem]">
								{/* <!-- Logo --> */}
								<Link href="/">
									<a className="shrink-0 lg:mr-14">
										<img
											src="/images/oshimo.png"
											className="max-h-7 dark:hidden"
											alt="Xhibiter | NFT Marketplace"
										/>
										<img
											src="/images/oshimo.png"
											className="hidden max-h-7 dark:block"
											alt="Xhibiter | NFT Marketplace"
										/>
									</a>
								</Link>

								<span className="font-display mt-1 hidden text-lg font-semibold lg:inline-block">
									Status
								</span>

								<Link href="#">
									<a className="bg-accent shadow-accent-volume hover:bg-accent-dark ml-auto inline-block rounded-full py-2.5 px-8 text-center text-sm font-semibold text-white transition-all">
										<span className="hidden lg:block">Subscribe to Updates</span>
										<span className="lg:hidden">Subscribe</span>
									</a>
								</Link>
							</div>
						</div>
					) : (
						<div className="flex items-center px-6 py-6 xl:px-24 ">
							{/* <!-- Logo --> */}
							{home3 ? (
								<Link href="/">
									<a className="shrink-0">
										{/* <img src="/images/oshimo.png" alt="" className="max-h-7 h-auto dark:hidden" /> */}

										<img
											src="/images/oshimo.png"
											className="max-h-7 h-auto"
											alt="Xhibiter | NFT Marketplace"
										/>
									</a>
								</Link>
							) : (
								<Link href="/">
									<a className="shrink-0">
										<img src="/images/oshimo.png" alt="" className="max-h-7 h-auto dark:hidden" />

										<img
											src="/images/oshimo.png"
											className="max-h-7 h-auto hidden dark:block"
											alt="Xhibiter | NFT Marketplace"
										/>
									</a>
								</Link>
							)}

							{/* <!-- Search --> */}
							{home3 ? (
								<form
									action="search"
									className="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]"
								>
									<input
										type="search"
										className=" focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 border-transparent bg-white/[.15] text-white placeholder-white"
										placeholder="Search"
									/>
									<span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											className=" h-4 w-4 fill-white"
										>
											<path fill="none" d="M0 0h24v24H0z" />
											<path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
										</svg>
									</span>
								</form>
							) : (
								<form
									action="search"
									className="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]"
								>
									<input
										type="search"
										className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
										placeholder="Search"
									/>
									<span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											className="fill-jacarta-500 h-4 w-4 dark:fill-white"
										>
											<path fill="none" d="M0 0h24v24H0z" />
											<path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
										</svg>
									</span>
								</form>
							)}

							{/* <!-- Menu / Actions --> */}
							<MblNavbar theme={handleTheme} />

							{/* <!-- Mobile Menu Actions --> */}
							<div className="ml-auto flex lg:hidden">
								{/* <!-- Profile --> */}
								{home3 ? (
									<Link href="/profile/user_avatar">
										<a
											className="border-jacarta-100 focus:bg-accent group hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
											aria-label="profile"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												width="24"
												height="24"
												className=" h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
											>
												<path fill="none" d="M0 0h24v24H0z" />
												<path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
											</svg>
										</a>
									</Link>
								) : (
									<Link href="/profile/user_avatar">
										<a
											className="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
											aria-label="profile"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												width="24"
												height="24"
												className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
											>
												<path fill="none" d="M0 0h24v24H0z" />
												<path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
											</svg>
										</a>
									</Link>
								)}

								{/* <!-- Dark Mode --> */}
								<button
									className="js-dark-mode-trigger border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
									onClick={() => {
										handleTheme();
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										className="fill-jacarta-700 dark-mode-light h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
									</svg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										className="fill-jacarta-700 dark-mode-dark hidden h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
									>
										<path fill="none" d="M0 0h24v24H0z" />
										<path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
									</svg>
								</button>

								{/* <!-- Mobile Menu Toggle --> */}
								{home3 ? (
									<button
										className="js-mobile-toggle border-jacarta-100 focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
										aria-label="open mobile menu"
										onClick={() => {
											dispatch(openMblMenu());
											console.log('open mbl nav');
										}}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											className=" h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
										>
											<path fill="none" d="M0 0h24v24H0z" />
											<path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
										</svg>
									</button>
								) : (
									<button
										className="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
										aria-label="open mobile menu"
										onClick={() => {
											dispatch(openMblMenu());
										}}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
										>
											<path fill="none" d="M0 0h24v24H0z" />
											<path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
										</svg>
									</button>
								)}
							</div>
						</div>
					)}
				</header>

				{/* <Wallet_modal /> */}
			</div>
		);
	}
};

export default Navbar;
