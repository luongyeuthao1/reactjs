import Header from './components/header'
import Nav from './components/nav'
import Product from './components/product'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Product products={[
                { id: 1, name: "Product 1" },
                { id: 2, name: "Product 2" }
              ]} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
