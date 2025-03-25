import { useState } from "react";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Header from "./components/header";
import data from "./assets/data.json";
import Wrapper from "./components/wrapper";
import Container from "./components/container";
import List from "./components/list";

function App() {
  const unfilteredData = data;
  const [filteredData, setFilteredData] = useState(data);
  return (
    <>
      <Wrapper>
        <Container>
          <Header />
          <Nav
            data={unfilteredData}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
          />
          <List data={filteredData} setData={setFilteredData} />
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
