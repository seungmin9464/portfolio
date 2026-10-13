import styled from "styled-components";

const FooterText = styled.footer`
	font-size: var(--font-size-sm);
	line-height: 1.5;
	color: var(--color-gray-30);
	white-space: nowrap;
`;

export default function Footer() {
	return <FooterText>© 2026 백승민 · Crafted with care</FooterText>;
}