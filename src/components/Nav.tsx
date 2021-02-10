import { NavContainer, Navg, Hamburger } from "../../styles";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
	const navs = [
		{
			title: "Home",
			link: "#",
		},
		{
			title: "For Fans",
			link: "#",
		},
		{
			title: "For Influencers",
			link: "#",
		},
		{
			title: "Features",
			link: "#",
		},
		{
			title: "FAQ's",
			link: "#",
		},
	];

	return (
		<NavContainer>
			<Link href="/">
				<Image
					src="/assets/ear1-logo.svg"
					alt="Ear1"
					width={100}
					height={100}
				/>
			</Link>

			<Navg>
				{navs.map((nav, i) => (
					<Link href={nav.link} key={i}>
						<a>{nav.title}</a>
					</Link>
				))}
			</Navg>

			<Hamburger />
		</NavContainer>
	);
};

export default Nav;
