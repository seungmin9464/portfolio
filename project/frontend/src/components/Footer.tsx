"use client";

import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

const FooterText = styled.footer`
	margin-top: auto;
	font-size: var(--font-size-sm);
	line-height: 1.5;
	color: var(--color-gray-30);
	white-space: nowrap;
`;

const BackToTopButton = styled.button<{ $visible: boolean }>`
	position: fixed;
	right: 32px;
	bottom: 32px;
	display: grid;
	width: 38px;
	height: 38px;
	place-items: center;
	border: 1px solid var(--color-primary-50);
	border-radius: 50%;
	background: var(--color-white);
	color: var(--color-primary-50);
	font-size: 24px;
	cursor: pointer;
	opacity: ${({ $visible }) => ($visible ? 1 : 0)};
	visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
	transform: translateY(${({ $visible }) => ($visible ? "0" : "8px")});
	transition:
		opacity 300ms ease,
		transform 300ms ease,
		visibility 300ms;

	&:hover {
		background: #833fab;
    color: var(--color-white);
    border-color: none;
    transition: background 0.3s ease, color 0.3s ease;
	}

	&:focus-visible {
		outline: 2px solid var(--color-primary-70);
		outline-offset: 3px;
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}
`;

export default function Footer() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const updateVisibility = () => setIsVisible(window.scrollY > 0);
		window.addEventListener("scroll", updateVisibility, { passive: true });

		return () => window.removeEventListener("scroll", updateVisibility);
	}, []);

	return (
		<FooterText id="contact">
			© 2026 백승민 · Crafted with care
			<BackToTopButton
				type="button"
				aria-label="페이지 맨 위로 이동"
				$visible={isVisible}
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			>
				<IoIosArrowUp aria-hidden="true" />
			</BackToTopButton>
		</FooterText>
	);
}