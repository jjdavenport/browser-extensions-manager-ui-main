import Footer from "./components/footer";
import Extension from "./components/extension";
import Nav from "./components/nav";
import Header from "./components/header";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <Header />
      <Nav />
      {data.map((i, index) => (
        <Extension key={index} data={i} />
      ))}
      <Footer />
    </>
  );
}

export default App;
