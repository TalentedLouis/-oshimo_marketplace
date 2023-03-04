import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { useRouter } from 'next/router';
import { MetaMaskProvider } from 'metamask-react';
import Meta from '../components/Meta';
import UserContext from '../components/UserContext';
import { useEffect, useRef } from 'react';
import { Mainnet, DAppProvider, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const config = {
  readOnlyChainId: Mainnet.chainId,
}

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const pid = router.asPath;
	const scrollRef = useRef({
		scrollPos: 0,
	});

	useEffect(() => {
		// if (pid === '/home/home_8') {
		// 	const html = document.querySelector('html');
		// 	html.classList.remove('light');
		// 	html.classList.add('dark');
		// }
	}, []);

	return (
		<>
			<Meta title="Home 1 || Xhibiter | NFT Marketplace Next.js Template" />

			<Provider store={store}>
				<ThemeProvider enableSystem={true} attribute="class">
          <DAppProvider config={config}>
            <MetaMaskProvider>
              <UserContext.Provider value={{ scrollRef: scrollRef }}>
                {pid === '/login' ? (
                  <Component {...pageProps} />
                ) : (
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                )}
              </UserContext.Provider>
            </MetaMaskProvider>
          </DAppProvider>
				</ThemeProvider>
			</Provider>
		</>
	);
}

export default MyApp;
