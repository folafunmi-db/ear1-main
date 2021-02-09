import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="subject" content="Ear1 Landing Page" />
				<title>Ear1</title>
				<link rel="icon" href="/favicon.svg" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main className={styles.main}>Ear1 main</main>

			<footer className={styles.footer}>Ear1 footer</footer>
		</div>
	);
}
