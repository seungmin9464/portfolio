import styled from "styled-components";

const HeaderContainer = styled.header`
`;

const HeaderList = styled.ul`
	display: flex;
	gap: 90px;
	width: 100%;
	padding: 24px 40px;
	list-style: none;

	@media (max-width: 600px) {
		flex-wrap: wrap;
		gap: 20px 32px;
		padding: 20px 24px;
	}
`;

const HeaderItem = styled.li<{ $isLookingForJob?: boolean }>`
	display: flex;
	flex-direction: column;
	gap: 6px;
	line-height: 1.5;
    padding: 0px;
    font-size: var(--font-size-sm);
    color: var(--color-gray-30);

	span {
		font-weight: 600;
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
					? "var(--color-primary-50)"
					: "var(--color-gray-30)"};
		}
	}
`;

export default function Header() {
	const isLookingForJob = true; // 구직 상태를 나타내는 변수 (예시로 true로 설정)

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
		</HeaderContainer>
	);
}