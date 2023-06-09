import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://twitter.com/kalamweb3" target={"_blank"}>
				<img className={styles.alchemy_logo} src="/kalam.png"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
