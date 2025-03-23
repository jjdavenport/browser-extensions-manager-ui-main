import Footer from "./components/footer";
import Extension from "./components/extension";
import Nav from "./components/nav";
import Header from "./components/header";
import data from "./assets/data.json";
import Wrapper from "./components/wrapper";
import Container from "./components/container";

function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <Header />
          <Nav />
          <main className="flex flex-1">
            <ul className="grid grid-cols-3 grid-rows-4 gap-4">
              {data.map((i, index) => (
                <Extension key={index} data={i} />
              ))}
            </ul>
          </main>
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
