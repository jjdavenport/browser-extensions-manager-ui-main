import Footer from "./components/footer";
import Extension from "./components/extension";
import Nav from "./components/nav";
import Header from "./components/header";
import data from "./assets/data.json";
import Wrapper from "./components/wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <div className="flex w-full max-w-5xl flex-col gap-4 p-4">
          <Header />
          <Nav />
          <main>
            <ul>
              {data.map((i, index) => (
                <Extension key={index} data={i} />
              ))}
            </ul>
          </main>
        </div>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
