import Navbar from "./navbar";
import Footer from "./footer";
import Wallet_modal from "./modal/wallet_modal";
import BidsModal from "./modal/bidsModal";
import BuyModal from "./modal/buyModal";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Wallet_modal />
      <BidsModal />
      <BuyModal />
      <main>{children}</main>
      <Footer />
    </>
  );
}
