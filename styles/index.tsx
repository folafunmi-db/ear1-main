import styled from "styled-components/";

const ear1Green = "#029F58";
const ear1Green2 = "#007640";

export const App = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	font-family: "DM Sans", sans-serif;
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const HeroContainer = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: ${ear1Green};
	width: 100vw;
	/* min-height: 100vh; */
	height: 1200px;
	position: relative;
	overflow: hidden;

	&::before {
		/* background-image: url(http://api.thumbr.it/whitenoise-144x140.png?background=#029F58ff&noise=626262&density=47&opacity=15); */
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		pointer-events: none;
		mix-blend-mode: multiply;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	width: 100%;
	max-width: 1400px;
`;

export const Navg = styled.div`
	display: flex;
	justify-content: space-between;
	color: white;
	align-items: center;
	width: 30rem;

	@media (max-width: 801px) {
		display: none;
	}

	a {
		position: relative;
		transition: 0.2s ease-in-out;
		height: 1.7rem;

		&::before {
			content: " ";
			position: absolute;
			height: 3px;
			width: 100%;
			bottom: 1px;
			left: 0px;
			background-color: #fff;
			transform: scale(0, 1);
			transition: 0.2s ease-in-out;
		}

		&:hover {
			&::before {
				transform: scale(1, 1);
			}
		}
	}
`;

export const Hamburger = styled.div`
	background-color: #fff;
	height: 3px;
	width: 2rem;
	position: relative;
	cursor: pointer;

	@media (min-width: 801px) {
		display: none;
	}

	&::before {
		content: "";
		position: absolute;
		background-color: #fff;
		height: 3px;
		width: 100%;
		top: -8px;
		left: 0px;
		transition: 0.4s ease-in-out;
	}

	&::after {
		content: "";
		position: absolute;
		background-color: #fff;
		height: 3px;
		width: 100%;
		bottom: -8px;
		left: 0px;
		transition: 0.4s ease-in-out;
	}

	/* &:hover {
		background: none;
		transition: 0.4s ease-in-out;

		&::before {
			transform: translateY(5px) rotate(135deg);
		}
		&::after {
			transform: translateY(-10px) rotate(-135deg);
		}
	} */
`;

export const Heading = styled.h1`
	width: 90%;
	max-width: 50rem;
	color: #fff;
	font-weight: 700;
	font-size: clamp(37px, 15vw, 120px);
	text-align: center;
	line-height: clamp(40px, 15vw, 118px);
	margin-bottom: 0.5rem;
`;

export const Sub = styled.p`
	width: 90%;
	max-width: 40rem;
	font-weight: 400;
	color: #fff;
	font-size: clamp(7px, 4vw, 20px);
	text-align: center;
	line-height: clamp(7px, 7vw, 35px);
`;

export const Phone1 = styled.div`
	z-index: 3;
	position: absolute;
	margin: 0 auto;
	transform: translate(-50%, -50%);
	top: 75%;
	left: 44%;
	margin-top: 15rem;
	height: 900px;
	width: 600px;

	@media (max-width: 801px) {
		transform: scale(0.8) translate(-72.9%, -40%);
		top: 85vmax;
		left: 50%;
		margin-top: 15rem;
	}

	@media (max-width: 580px) {
		/* transform: scale(0.7) translate(-87%, -40%); */
		margin-top: 50vw;
	}

	@media (max-width: 451px) {
		transform: scale(0.65) translate(-87%, -40%);
		margin-top: -30vw;
	}
`;

export const Phone2 = styled.div`
	z-index: 2;
	position: absolute;
	margin: 0;
	transform: rotate(25deg) scale(0.65);
	top: 57%;
	margin-right: -12rem;

	@media (max-width: 801px) {
		display: none;
	}
`;

export const Phone3 = styled.div`
	z-index: 1;
	position: absolute;
	margin: 0;
	transform: rotate(-25deg) scale(0.65);
	top: 60%;
	margin-left: -23rem;

	@media (max-width: 801px) {
		display: none;
	}
`;

export const AboutContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	overflow: hidden;
	background-color: #f7f7f7;
	padding: 2rem;
`;

export const AboutHeader = styled.h1`
	width: 90%;
	max-width: 40rem;
	font-weight: 500;
	color: ${ear1Green2};
	font-size: clamp(15px, 8vw, 60px);
	text-align: left;
	line-height: clamp(15px, 10vw, 70px);
	z-index: 2;
	margin-top: 3rem;
	margin-bottom: 0rem;
`;

export const AboutParagraph = styled(Sub)`
	color: #000;
	text-align: left;
	z-index: 2;
`;

export const AboutIcon = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 10%;
	transform: scale(2.1);
	filter: grayscale(1) opacity(0.2);

	@media (max-width: 801px) {
		transform: scale(0.7);
		right: 0%;
	}
`;

export const AboutIcon2 = styled(AboutIcon)`
	left: -20%;
	transform: scale(0.6);

	@media (max-width: 801px) {
		display: none;
	}
`;

export const Fans1Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap-reverse;
	width: 100vw;
	overflow: hidden;
	background-color: #fff;
	padding: 2rem 4rem;
`;

export const Fans1Left = styled(AboutContainer)`
	min-width: 330px;
	background-color: #fff;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	max-width: 700px;
`;

export const FansPill = styled.div`
	background-color: #ffbb62;
	width: 4rem;
	height: 1.7rem;
	border-radius: 50px;
	display: grid;
	place-items: center;
`;

export const Fans1Header = styled(AboutHeader)`
	color: #000;
`;

export const Fans1Paragraph = styled(AboutParagraph)`
	color: #121212;
`;

export const Fans1Right = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	max-width: 450px;

	&::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		width: 90%;
		height: 90%;
		background-color: #e4e4e4;
	}
`;

export const Fans1Image = styled.div`
	z-index: 3;
	position: relative;
`;
