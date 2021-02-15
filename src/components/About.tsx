import { AboutHeader, AboutParagraph } from "../../styles";
import Image from "next/image";

const About = () => {
  return (
		<>
			<Image
				src="/assets/ear1-icon.svg"
				alt="Ear1-icon-1"
				width={737}
				height={1200.18}
			/>
			<AboutHeader>What can Ear1 help you do?</AboutHeader>
			<AboutParagraph>
				Are you an individual looking to connect with an influencer
				without the hassle of waiting for the reply over a long time, or
				an influencer looking to filter your dm’s and connect with your
				audience, Ear1 has got you covered.
			</AboutParagraph>
			<Image
				src="/assets/ear1-icon.svg"
				alt="Ear1-icon-2"
				width={737}
				height={1200.18}
			/>
		</>
  );
}

export default About
