import styled from "styled-components/";

const ear1Green = "#029F58";

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
	min-height: 100vh;
	position: relative;

	&::before {
		background-image: url(http://api.thumbr.it/whitenoise-144x140.png?background=#029F58ff&noise=626262&density=47&opacity=15);
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
