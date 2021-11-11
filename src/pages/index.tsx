import Header from "components/UI/Header";
import { Container } from "styles/Home";
import Meta from "../components/Meta/Meta";
import { BiChevronDown } from 'react-icons/bi';

export default function Home() {
  function handleDownPage() {

  }
  return (
    <>
      <Meta />
      <Header logout={false} />
      <Container>
        <section className="title">
          <img src="/Logo.svg" alt="Logo" />
          <button>I WANT TO SIGN</button>
        </section>
        <section className="cards">
          <div className="arrow" onClick={handleDownPage}><BiChevronDown size={70}/></div>
          <div className="title-cards">
            <h1>Choose your plan</h1>
          </div>
          <div className="cards-wrap">
            <div className="card">
              <h1>Plano 2</h1>
            </div>
            <div className="card-middle">
              <div className="most">Most Popular</div>
              <h1>Plano 1</h1>
            </div>
            <div className="card">
              <h1>Plano 3</h1>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
