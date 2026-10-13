import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 30px 100px;
`;

export default function Home() {
  return (
    <PageContainer id="home">
      <Header />
      <Main />
      <Nav />
      <Footer />
    </PageContainer>
  );
}
