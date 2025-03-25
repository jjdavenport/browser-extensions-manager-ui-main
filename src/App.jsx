import { useState } from "react";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Header from "./components/header";
import data from "./assets/data.json";
import Wrapper from "./components/wrapper";
import Container from "./components/container";
import List from "./components/list";

function App() {
  const [unfilteredData, setUnfilteredData] = useState(data);
  const [filter, setFilter] = useState("all");

  const filteredData = unfilteredData.filter((i) =>
    filter === "all"
      ? true
      : filter === "active"
        ? i.isActive
        : filter === "inactive"
          ? !i.isActive
          : false,
  );

  return (
    <>
      <Wrapper>
        <Container>
          <Header />
          <Nav filter={filter} setFilter={setFilter} />
          <List data={filteredData} setData={setUnfilteredData} />
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
