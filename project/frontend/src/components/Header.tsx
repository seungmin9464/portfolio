"use client";

import type { MouseEvent } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
	display: flex;
	align-items: flex-start;
`;

const HeaderList = styled.ul`
	display: flex;
	flex: 1 0 auto;
	gap: clamp(20px, 5vw, 90px);
	width: auto;
	list-style: none;

	@media (max-width: 600px) {
		gap: 32px;
	}
`;

const HeaderItem = styled.li<{ $isLookingForJob?: boolean }>`
	display: flex;
	flex-shrink: 0;
	flex-direction: column;
	gap: 6px;
	line-height: 1.5;
	padding: 0px;
	font-size: var(--font-size-sm);
	color: var(--color-gray-30);
	white-space: nowrap;

	span {
		font-weight: 500;
		color: var(--color-text-primary);
		font-size: var(--font-size-base);
	}

	&:last-child span {
		position: relative;

		&::after {
			content: "";
			position: absolute;
			top: 50%;
			right: -14px;
			width: 8px;
			height: 8px;
			transform: translateY(-50%);
			border-radius: 50%;
			background-color: ${({ $isLookingForJob }) =>
				$isLookingForJob
					? "#833fab"
					: "var(--color-gray-30)"};
		}
	}
`;

const HeaderLink = styled.a`
	font-size: var(--font-size-sm);
	color: var(--color-gray-30);
	white-space: nowrap;
`;

export default function Header() {
	const isLookingForJob = true; // 구직 상태를 나타내는 변수 (예시로 true로 설정)

	const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
		if (!isLookingForJob) {
			event.preventDefault();
			window.alert("✨ 지금은 새로운 기회를 찾고 있지 않아요!\n관심 가져주셔서 감사합니다 😊");
		}
	};

	return (
		<HeaderContainer>
			<HeaderList>
				<HeaderItem>
					Archive of<span>풀스택 개발자</span>
				</HeaderItem>
				<HeaderItem>
					Duration<span>2020 - 현재</span>
				</HeaderItem>
				<HeaderItem $isLookingForJob={isLookingForJob}>
					Status
					<span>{isLookingForJob ? "구직 중" : "구직 중 아님"}</span>
				</HeaderItem>
			</HeaderList>
			<HeaderLink
				href="/resume.pdf"
				download="resume.pdf"
				onClick={handleContactClick}
			>
				Contact Me
			</HeaderLink>
		</HeaderContainer>
	);
}