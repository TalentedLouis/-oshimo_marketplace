import React from 'react';
import Story from '../../components/about/story';
import Head from 'next/head';
import Meta from '../../components/Meta';

const newsletter = () => {
	return (
		<div>
			<Meta title="newseletter || Xhibiter | NFT Marketplace Next.js Template" />
			<div className="pt-[5.5rem] lg:pt-24">
				<Story compFor="news" />
			</div>
		</div>
	);
};

export default newsletter;
