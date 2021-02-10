import { HeroContainer, Heading, Sub } from "../../styles/";
import Nav from "./Nav";

const Hero = (): JSX.Element => {
	return (
		<HeroContainer>
			<Nav />
			<Heading>Build direct, meaningful connections</Heading>
			<Sub>
				Ear1 helps you connect directly with your favourite influencers
				for a small fee. What’s more? We assure you of getting a reply.
			</Sub>
		</HeroContainer>
	);
};

export default Hero;
