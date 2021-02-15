import { HeroContainer, Heading, Sub, Phone1, Phone2, Phone3 } from "../../styles/";
import Image from "next/image";
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

				<Phone1>
					<Image
						src="/assets/ear1-phone3.svg"
						alt="Phone-1-Ear1"
						width={737}
						height={1200.18}
					/>
				</Phone1>
				<Phone3>
					<Image
						src="/assets/ear1-phone4.svg"
						alt="Phone-2-Ear1"
						width={737}
						height={1200.18}
					/>
				</Phone3>
				<Phone2>
					<Image
						src="/assets/ear1-phone5.svg"
						alt="Phone-3-Ear1"
						width={737}
						height={1200.18}
					/>
				</Phone2>
		</HeroContainer>
	);
};

export default Hero;
