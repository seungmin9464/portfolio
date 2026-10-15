"use client";

import { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineWebAsset } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

type ProjectFilter = "all" | "web" | "individual";

const MainContent = styled.main``;

const ListWrap = styled.section``;

const ListTag = styled.div`
	display: flex;
	gap: 8px;
`;

const ListTagButton = styled.button<{ $active?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid ${({ $active }) => $active ? "#833fab" : "rgba(0, 0, 0, 0.08)"};
    background-color: ${({ $active }) => $active ? "#833fab" : "var(--color-bg-30)"};
    padding: 0 12px 0 10px;
    height: 30px;
    border-radius: 32px;
    color: ${({ $active }) => $active ? "var(--color-white)" : "var(--color-gray-40)"};
    transition: background-color 0.4s ease, border-color 0.4s ease, color 0.4s ease;
    cursor: pointer;

    &:hover {
        background-color: ${({ $active }) => $active ? "#833fab" : "#9e77ed"};
        border-color: ${({ $active }) => $active ? "#833fab" : "#9e77ed"};
        color: var(--color-white);
    }

    svg {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
    }
`;

const List = styled.ul``;

const SloganSection = styled.section`
	display: flex;
	align-items: center;
	gap: 24px;
	line-height: 1.6;
	font-weight: 500;
	position: relative;

	@media (max-width: 600px) {
		align-items: flex-start;
		flex-direction: column;
		gap: 20px;
	}
`;

const SloganText = styled.div`
	min-width: 0;
`;

const SloganTitle = styled.h1`
	color: var(--color-gray-30);
	font-size: 20px;
`;

const SloganSubTitle = styled.h2`
	font-size: 20px;
`;

const DotAnimationSvg = styled.svg`
	flex: 0 0 120px;
	width: 120px;
	height: 120px;
`;

const dotAnimations = [
	{ cx: 30, cy: 8, startTime: 25 },
	{ cx: 52, cy: 30, startTime: 195 },
	{ cx: 30, cy: 52, startTime: 365 },
	{ cx: 8, cy: 30, startTime: 535 },
];

const rippleStartTimes = ["0s", "2.4s"];

export function DotAnimation() {
	return (
		<DotAnimationSvg viewBox="0 0 60 60" role="img" aria-label="보라색 원에서 회색 원 네 개가 퍼져 나가며 사라지는 애니메이션">
			<g>
				{rippleStartTimes.map((begin) => (
					<circle key={begin} cx="30" cy="30" r="4.5" fill="none" stroke="#833fab" strokeWidth="1.2">
						<animate
							attributeName="r"
							values="4.5;28"
							dur="4.8s"
							begin={begin}
							repeatCount="indefinite"
						/>
						<animate
							attributeName="opacity"
							values="0.45;0"
							dur="4.8s"
							begin={begin}
							repeatCount="indefinite"
						/>
					</circle>
				))}
				<g>
					<animateTransform
						attributeName="transform"
						type="rotate"
						keyTimes="0;0.72;1"
						dur="4s"
						repeatCount="indefinite"
						accumulate="sum"
					/>
					{dotAnimations.map(({ cx, cy, startTime }) => {
						const keyTimes = [
							0,
							startTime,
							startTime + 25,
							startTime + 75,
							startTime + 150,
							startTime + 175,
							1000,
						]
							.map((time) => (time === 1000 ? "1" : String(time / 1000)))
							.join(";");

						return (
							<circle key={startTime} cx="30" cy="30" r="3.5" fill="#d1d5db">
								<animate
									attributeName="cx"
									values={`30;30;${cx};${cx};${cx};30;30`}
									keyTimes={keyTimes}
									dur="8s"
									repeatCount="indefinite"
								/>
								<animate
									attributeName="cy"
									values={`30;30;${cy};${cy};${cy};30;30`}
									keyTimes={keyTimes}
									dur="8s"
									repeatCount="indefinite"
								/>
								<animate
									attributeName="opacity"
									values="0;0;1;1;0;0;0"
									keyTimes={keyTimes}
									dur="8s"
									repeatCount="indefinite"
								/>
							</circle>
						);
					})}
				</g>
				<circle cx="30" cy="30" r="4.5" fill="#833fab" />
			</g>
		</DotAnimationSvg>
	);
}

export default function Main() {
	const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

	return (
		<MainContent>
			{/* 슬로건 영역 */}
			<SloganSection id="about" aria-label="슬로건">
				<DotAnimation />
				<SloganText>
					<SloganTitle>
						복잡한 요구사항 속에서 단단한 뼈대를 세우고,<br/>
						완성도와 디테일을 채워가며 가치를 빚어낸 시간.<br/>
					</SloganTitle>
					<SloganSubTitle>이곳은 프로덕트의 궤적을 기록한 프로젝트 아카이브입니다.</SloganSubTitle>
				</SloganText>
			</SloganSection>

			{/* 컨텐츠 영역 */}
			<ListWrap>
				<ListTag>
					<ListTagButton
						type="button"
						$active={activeFilter === "all"}
						aria-pressed={activeFilter === "all"}
						onClick={() => setActiveFilter("all")}
					>
						<RxHamburgerMenu aria-hidden="true" />
						All
					</ListTagButton>
					<ListTagButton
						type="button"
						$active={activeFilter === "web"}
						aria-pressed={activeFilter === "web"}
						onClick={() => setActiveFilter("web")}
					>
						<MdOutlineWebAsset aria-hidden="true" />
						Web
					</ListTagButton>
					<ListTagButton
						type="button"
						$active={activeFilter === "individual"}
						aria-pressed={activeFilter === "individual"}
						onClick={() => setActiveFilter("individual")}
					>
						<FaRegUser aria-hidden="true" />
						Individual
					</ListTagButton>
				</ListTag>
				<List></List>
			</ListWrap>
		</MainContent>
	);
}
