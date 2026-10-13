import styled from "styled-components";

const MainContent = styled.main`
`;

const SloganSection = styled.section`
	min-height: 70vh;
`;

export default function Main() {
	return (
		<MainContent>
			<SloganSection id="about" aria-label="슬로건" >
				<h1>
					복잡한 요구사항 속에서 단단한 뼈대를 세우고,<br/>
					완성도와 디테일을 채워가며 가치를 빚어낸 시간.<br/>
					이곳은 프로덕트의 궤적을 프로젝트 단위로 엮은 기록입니다.
				</h1>
			</SloganSection>
		</MainContent>
	);
}
