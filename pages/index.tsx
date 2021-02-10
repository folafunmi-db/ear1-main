import Head from "next/head";
import Hero from "../src/components/Hero";
import { App, Main, Footer } from "../styles/";

export default function Home() {
	return (
		<App>
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

			<Main>
				<Hero />
      </Main>
      
			<Footer>Ear1 footer</Footer>
		</App>
	);
}
