import { HeroContainer, Heading, Sub, Phones,Phone1, Phone2, Phone3 } from "../../styles/";
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

			{/* <Phones> */}
				<Phone1>
					<Image
						src="/assets/ear1-phone5.svg"
						alt="Ear1"
						width={737}
						height={1200.18}
					/>
				</Phone1>
				<Phone3>
					<Image
						src="/assets/ear1-phone3.svg"
						alt="Ear1"
						width={737}
						height={1200.18}
					/>
				</Phone3>
				<Phone2>
					<Image
						src="/assets/ear1-phone4.svg"
						alt="Ear1"
						width={737}
						height={1200.18}
					/>
				</Phone2>
			{/* </Phones> */}
		</HeroContainer>
	);
};

export default Hero;
