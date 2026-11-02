import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import { OpeningSequence, ScrollThread } from '@/components/ExperienceEffects';
export default function Home() {
  return <div className="page-shell" id="home"><a className="skip-link" href="#main">본문으로 건너뛰기</a><OpeningSequence/><ScrollThread/><Header/><Main/><Footer/></div>;
}
