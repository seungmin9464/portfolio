import { IoHappyOutline, IoHome, IoMail } from "react-icons/io5";
import styled from "styled-components";

const FloatingNav = styled.nav`
	position: fixed;
	z-index: 10;
	left: 50%;
	bottom: max(24px, calc(env(safe-area-inset-bottom) + 16px));
	display: flex;
	align-items: center;
	gap: 2px;
	padding: 7px;
	border-radius: 999px;
  // background-color: var(--color-gray-50);
	// // background: linear-gradient(
	// // 	135deg,
	// // 	rgba(150, 155, 165, 0.62),
	// // 	rgba(92, 98, 108, 0.48)
	// // );
	// box-shadow:
	// 	0 10px 32px rgba(25, 30, 40, 0.2),
	// 	inset 0 1px 0 rgba(255, 255, 255, 0.52),
	// 	inset 0 -1px 0 rgba(255, 255, 255, 0.12);
	// -webkit-backdrop-filter: blur(24px) saturate(180%);
	// backdrop-filter: blur(24px) saturate(180%);

    border: 1px solid rgba(255, 255, 255, 0.08);
    background-color: rgba(83, 88, 98, 0.40);
    backdrop-filter: blur(12px);


	transform: translateX(-50%);
`;

const NavLink = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	padding: 6px 12px 8px;
	border-radius: 40px;
	color: var(--color-white);
	font-size: var(--font-size-sm);
	font-weight: 400;
	white-space: nowrap;
	transition: background-color 180ms ease;

	svg {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	&[aria-current="page"] {
		background-color: rgba(255, 255, 255, 0.24);
	}

	&:hover:not([aria-current="page"]) {
		background-color: rgba(255, 255, 255, 0.14);
	}

	&:focus-visible {
		outline: 2px solid var(--color-white);
		outline-offset: 2px;
	}

	@media (max-width: 480px) {
		gap: 7px;
		padding: 10px 13px;
		font-size: 14px;

		svg {
			width: 18px;
			height: 18px;
		}
	}
`;

export default function Nav() {
	return (
		<FloatingNav aria-label="주요 메뉴">
			<NavLink href="#home" aria-current="page">
				<IoHome aria-hidden="true" />
				Home
			</NavLink>
			<NavLink href="#about">
				<IoHappyOutline aria-hidden="true" />
				About
			</NavLink>
			<NavLink href="#contact">
				<IoMail aria-hidden="true" />
				Contact
			</NavLink>
		</FloatingNav>
	);
}