import SalesCard from "./components/SalesCard"
import Header from "./components/header"

function App() {
  return(
    <>
    <Header/>
    <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard/>

        </div>
        </section>
        </main>
    </>
  )
}

export default App;
