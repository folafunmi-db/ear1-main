import {
	Fans1Container,
	Fans1Left,
	Fans1Right,
	Fans1Header,
	FansPill,
	Fans1Paragraph,
	Fans1Image,
} from "../../styles";
import Image from "next/image";

const Fans1 = () => {
	return (
		<Fans1Container>
			<Fans1Left>
				<FansPill>Fans</FansPill>

				<Fans1Header>
					Connect with top influencers in your field
				</Fans1Header>

				<Fans1Paragraph>
					From Tech to music to business, Ear1 has a wide range of
					industry experts in diverse fields you have always wanted to
					connect with. Now is your best chance.
				</Fans1Paragraph>
			</Fans1Left>

			<Fans1Right>
				<Fans1Image>
					<Image
						src="/assets/ear1-fan1.svg"
						alt="Ear1-fan-1"
						width={414}
						height={471}
					/>
				</Fans1Image>
			</Fans1Right>
		</Fans1Container>
	);
};

export default Fans1;
