import Footer from "./components/footer";
import Extension from "./components/extension";
import Nav from "./components/nav";
import Header from "./components/header";
import data from "./assets/data.json";
import Wrapper from "./components/wrapper";
import Container from "./components/container";
import { useState } from "react";

function App() {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <>
      <Wrapper>
        <Container>
          <Header />
          <Nav data={filteredData} setData={setFilteredData} />
          <main className="flex flex-1">
            <ul className="grid grid-cols-3 grid-rows-4 gap-4">
              {filteredData.map((i, index) => (
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
