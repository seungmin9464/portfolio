import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 30px 100px;

  main {
    flex: 1;
  }
`;

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <main />
      <Footer />
    </PageContainer>
  );
}
